import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { firebasedb } from "../../../firebase";
import ChatReceiver from "../chatReceiver";
import ChatSender from "../chatSender";

export default function ChatMessageList() {
    const [chatList, setchatList] = useState({});
    const [user, setUser] = useContext(UserContext).user;
    const [userList, setuserList] = useState({});
  useEffect(() => {
    firebasedb.ref("Chats").on("value", (snapshot) => {
      if (snapshot.val()) {
        setchatList({ ...snapshot.val() });
      }
    });
    firebasedb.ref("Users").on("value", (snapshot) => {
      if (snapshot.val()) {
        setuserList({ ...snapshot.val() });
      }
    });
  }, []);
    return (
        <div className="mesgs">
        <div className="msg_history">
          {Object.keys(chatList).map((id) => {
            if (user.uid.toString() === chatList[id].receiver) {
              return (
                <ChatReceiver
                  key={id}
                  id={id}
                  message={chatList[id].message}
                ></ChatReceiver>
              );
            }
          })}
          <ChatSender></ChatSender>
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input
              type="text"
              className="write_msg"
              placeholder="Type a message"
            />
            <button className="msg_send_btn" type="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    )
}
