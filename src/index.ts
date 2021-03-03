import sqlite3 from 'sqlite3'
import fs from 'fs'

const DEV_OUTPUT_DIR = './out/'
// const DEV_BACKUP_DIR = '/Users/sidharth/Library/Application\ Support/MobileSync/Backup/00008030-0011256A022A802E/'
const DEV_BACKUP_DIR = '/Users/sidharth/Desktop/'

const sqlite = sqlite3.verbose()


function getWhatsappChatDb() {
    let manifestFileName = 'Manifest.db'
    let manifestFileSrc = DEV_BACKUP_DIR + manifestFileName
    let manifestFileDest = DEV_OUTPUT_DIR + manifestFileName
    
    if (!fs.existsSync(DEV_OUTPUT_DIR)) {
        fs.mkdirSync(DEV_OUTPUT_DIR)
    }

    // make a copy of manifest DB (we don't have exec privs in Backup/ folder)
    fs.copyFileSync(manifestFileSrc, manifestFileDest)

    let manifestDb = new sqlite.Database(manifestFileDest, sqlite3.OPEN_READONLY)

    let chatExtractQuery = "\
        SELECT fileID from Files WHERE relativepath='ChatStorage.sqlite'";

    manifestDb.serialize(() => {
        manifestDb.all(chatExtractQuery, (err, rows) => {
            console.log('Successfully read.')
            console.log(rows.length)
            console.log(rows)
        })
    })
}

getWhatsappChatDb()