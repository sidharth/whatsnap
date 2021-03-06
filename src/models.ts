


// Models mapped to Whatsapp's Database.

interface ZChatSession {
    Z_PK: number,
    ZPARTNERNAME: string,
    ZCONTACTJID: string
}

interface ZChatMessage {
    Z_PK: number,
    ZFROMJID: string,
    ZTOJID: string,
    ZMESSAGETYPE: number,
    ZTEXT: string
}

