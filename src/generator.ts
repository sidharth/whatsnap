// import {ChatSession} from './models'
import {ZChatMessage, ZChatSession} from './models'
import {savePage} from './utils/file-utils'

export function generateSessionPage(chatSession: ZChatSession, chatMessages: ZChatMessage[]) {
    let messagesHtml = chatMessages.map((chatMessage) => {
        return `<div> ${chatMessage.ZTEXT} </div>`
    })
    .reduce((ac, val) => ac + val, '')
    let containerHtml = `<div> ${messagesHtml} </div>`
    let fileName = chatSession.ZPARTNERNAME

    savePage(fileName, containerHtml)
}

export default {}