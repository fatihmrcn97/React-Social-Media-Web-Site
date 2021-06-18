import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { firebasedb } from "../../../firebase";
import ChatReceiver from "../chatReceiver";
import ChatSender from "../chatSender";
import "./style.css"

export default function ChatMessageList({ userreceiveruid }) {
  const [chatList, setchatList] = useState({});
  const [user, setUser] = useContext(UserContext).user;
  const [userList, setuserList] = useState({});
  const [message, setMessage] = useState("");
  useEffect(() => {
    firebasedb
      .ref("Chats")
      .orderByChild("timestamp")
      .on("value", (snapshot) => {
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

  function smallestToBiggest(a, b) {
    return a.createdDate - b.createdDate;
  }

  const sendMessage = (e) => {
    const msgObj = {
      sender: user.uid,
      receiver: userreceiveruid,
      message: message,
      isSeen: false,
      timestamp: Date.now().toString(),
    };
    console.log(msgObj);
    if (msgObj.message !=="" && msgObj.message !==" "  && msgObj.message !== null) {
      firebasedb.ref("Chats").push({ ...msgObj });
      setMessage("")
    }
  };

  return (
    <div className="mesgs">
      <div className="msg_history">
        {Object.keys(chatList).map((id) => {
          if (user.uid === chatList[id].receiver && userreceiveruid === chatList[id].sender) {
            console.log(userreceiveruid+" user reciever Id")
            console.log(chatList[id].sender+" user sender Id")
            return (
              <ChatReceiver
                key={id}
                id={id}
                message={chatList[id].message}
              ></ChatReceiver>
            );
          }
          if (userreceiveruid === chatList[id].receiver && chatList[id].sender === user.uid) {
            return (
              <ChatSender
                key={id}
                id={id}
                meesageSender={chatList[id].message}
              ></ChatSender>
            );
          }
        })}
      </div>
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="msg_send_btn" type="button" onClick={sendMessage}>
             <img src="https://static.thenounproject.com/png/373675-200.png" className="imgsrc" width="20"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
