import {ZChatMessage, ZChatSession} from './models'
import {savePage} from './utils/file-utils'
import {getDateStr} from './utils/date-utils'

export function generateSessionPage(chatSession: ZChatSession, chatMessages: ZChatMessage[]) {
    let previousDateStr = ''
    let messagesHtml = chatMessages.map((chatMessage) => {
        let style = (chatMessage.ZISFROMME == 1) ? 'self': 'other'
        let dateStr = getDateStr(chatMessage.ZMESSAGEDATE, "ios")
        let dateBarComponent = ''

        if (dateStr != undefined && dateStr != previousDateStr) {
            dateBarComponent = `
            <div class='date-pill'>${dateStr}</div>
            `
            previousDateStr = dateStr
        }

        return `
            ${dateBarComponent}
            <div class='message ${style}'> ${chatMessage.ZTEXT} </div>
        `
    })
    .reduce((ac, val) => ac + val, '')
    
    let containerHtml = `
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel='stylesheet' href='styles.css'/>
        </head>
        <div class='container'> ${messagesHtml} </div>
        </html>
    `
    let fileName = chatSession.ZPARTNERNAME
    savePage(fileName, containerHtml)
}

export default {}