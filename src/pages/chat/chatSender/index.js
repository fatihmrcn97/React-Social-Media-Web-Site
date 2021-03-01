import React from 'react'

export default function ChatSender({meesageSender,timestampsender}) {
    return (
        
        <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{meesageSender}</p>
          <span className="time_date">{timestampsender}</span> 
        </div>
      </div>
  
      
    )
}
