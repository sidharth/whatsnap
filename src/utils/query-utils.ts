import { Database } from "sqlite3"

export function getChatSessionsQuery() {
    return `
        SELECT 
            Z_PK, 
            ZPARTNERNAME, 
            ZCONTACTJID 
        FROM 
            ZWACHATSESSION 
    `
}

export function getMessagesForSessionQuery(sessionId: number) {
    return `
        SELECT 
            Z_PK,
            ZFROMJID,
            ZTOJID,
            ZMESSAGETYPE,
            ZTEXT,
            ZISFROMME
        FROM 
            ZWAMESSAGE
        WHERE 
            1=1
            AND ZCHATSESSION = ${sessionId}
        ORDER BY ZMESSAGEDATE
    `
}

export function getIOSChatDbQuery() {
    return `
        SELECT 
            fileID
        FROM 
            Files 
        WHERE 
            relativepath='ChatStorage.sqlite'
    `
}

export function query(db: Database, queryStr: string) {
    return new Promise((resolve, reject) => {
        db.all(queryStr, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

export default {}