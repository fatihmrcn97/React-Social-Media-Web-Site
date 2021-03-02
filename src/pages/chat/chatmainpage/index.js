import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { firebasedb } from "../../../firebase";
import ChatList from "../chatList";
import ChatMessageList from "../chatMessageList";
import ChatReceiver from "../chatReceiver";
import ChatSender from "../chatSender";
import "./style.css";
export default function ChatMainPage() {
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
    <div className="container">
      <h3 className=" text-center">Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search"
                  />
                  <span className="input-group-addon">
                    <button type="button">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="inbox_chat">
              {Object.keys(userList).map((id) => {
                return <ChatList key={id} u_Name={userList[id].name} u_image={userList[id].image}></ChatList>;
              })}
            </div>
          </div>
      <ChatMessageList></ChatMessageList>
        </div>
        <p className="text-center top_spac"></p>
      </div>
    </div>
  );
}
