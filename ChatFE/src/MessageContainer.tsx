import React from 'react'
import SentMessagForm from './SentMessagForm'

const MessageContainer = ({ messages }) => {
  return (
    messages.map((message, index) => 
        <table>
            <tr key={index}>
                <td> {message.message} - {message.userName}</td>
            </tr>
        </table>
    )
  )
}

export default MessageContainer