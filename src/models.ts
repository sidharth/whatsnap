


// Models mapped to Whatsapp's Database.

export interface ZChatSession {
    Z_PK: number,
    ZPARTNERNAME: string,
    ZCONTACTJID: string
}

export interface ZChatMessage {
    Z_PK: number,
    ZFROMJID: string,
    ZTOJID: string,
    ZMESSAGETYPE: number,
    ZTEXT: string
}

