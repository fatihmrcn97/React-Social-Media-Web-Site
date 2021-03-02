import React from 'react'

export default function ChatList({u_Name,u_image}) {
    return (
        <div className="chat_list active_chat">
        <div className="chat_people">
          <div className="chat_img">
            <img
              src={u_image}
              alt="sunil"
            />
          </div>
          <div className="chat_ib">
            <h5>
              {u_Name} <span className="chat_date">Dec 25</span>
            </h5>
            <p>
              Message
            </p>
          </div>
        </div>
      </div>
    )
}
