import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { firebasedb } from "../../../firebase";
import ChatReceiver from "../chatReceiver";
import ChatSender from "../chatSender";
import "./style.css";
export default function ChatMainPage() {
  const [chatList, setchatList] = useState("");
  const [user, setUser] = useContext(UserContext).user;
  const [userList, setuserList] = useState("");

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
                      {" "}
                      <i className="fa fa-search" aria-hidden="true" />{" "}
                    </button>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="inbox_chat">
              <div className="chat_list active_chat">
                <div className="chat_people">
                  <div className="chat_img">
                    {" "}
                    <img
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{" "}
                  </div>
                  <div className="chat_ib">
                    <h5>
                      Sunil Rajput <span className="chat_date">Dec 25</span>
                    </h5>
                    <p>
                      Test, which is a new approach to have all solutions
                      astrology under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
        <p className="text-center top_spac"></p>
      </div>
    </div>
  );
}
