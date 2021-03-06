import sqlite3, { Database } from 'sqlite3'
import { getChatSessionsQuery, getIOSChatDbQuery, query, getMessagesForSessionQuery } from './utils/query-utils'
import {copyToTemp, saveStyles} from './utils/file-utils'
import {cliArgs} from './utils/cli-utils'
import { ZChatMessage, ZChatSession } from './models'
import {generateSessionPage} from './generator'

const PLATFORM = cliArgs.platform as string // currently only supports iOS backups.
const BACKUP_PATH = cliArgs.path as string
const sqlite = sqlite3.verbose()

// Program Driver.
async function main() {
    let {chatDbPath} = await getWhatsappChatDb(BACKUP_PATH)
    let chatDb = new sqlite.Database(chatDbPath, sqlite3.OPEN_READONLY)
    let chatSessions = await query(chatDb, getChatSessionsQuery()) as ZChatSession[]
    let chatHistory: Map<string, ZChatMessage[]> = new Map() // user ID -> chat messages.

    for (let chatSession of chatSessions) {
        let {Z_PK: sessionId, ZCONTACTJID: contactId, ZPARTNERNAME: contactName } = chatSession
        let sessionMessages = await query(chatDb, getMessagesForSessionQuery(sessionId)) as ZChatMessage[]
        chatHistory.set(contactId, sessionMessages)
        if (sessionMessages.length > 0) {
            generateSessionPage(chatSession, sessionMessages)
        }
    }

    saveStyles()
}

async function getWhatsappChatDb(iosBackupDirPath: string): Promise<{chatDbPath: string}> {
    let manifestPath = copyToTemp(iosBackupDirPath + 'Manifest.db')
    let manifestDb = new sqlite.Database(manifestPath, sqlite3.OPEN_READONLY)

    let chatExtractRows = await query(manifestDb, getIOSChatDbQuery()) as {fileID: string}[]
    let chatDbFileName = chatExtractRows[0].fileID
    let chatDbPath = copyToTemp(BACKUP_PATH + chatDbFileName.slice(0,2) + '/' + chatDbFileName)

    return {chatDbPath: chatDbPath}
}

async function getMessagesForSession(sessionId: number, chatDb: Database) {
    return await query(chatDb, getMessagesForSessionQuery(sessionId))
}



main()