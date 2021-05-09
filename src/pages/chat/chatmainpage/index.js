import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { firebasedb } from "../../../firebase";
import ChatList from "../chatList";
import ChatMessageList from "../chatMessageList";
import ChatReceiver from "../chatReceiver";
import ChatSender from "../chatSender";
import "./style.css";

const ChatListt = (props) => {
  const { user, onClickk } = props;

  return (
    <div onClick={() => onClickk(user)} className="chat_list active_chat">
      <div className="chat_people">
        <div className="chat_img">
          <img src={user.image} alt="sunil" />
        </div>
        <div className="chat_ib">
          <h5>
            {user.name} <span className="chat_date">Dec 25</span>
          </h5>
          <p>Message</p>
        </div>
      </div>
    </div>
  );
};

export default function ChatMainPage(props) {
  const [chatList, setchatList] = useState({});
  const [user, setUser] = useContext(UserContext).user;
  const [userList, setuserList] = useState({});
  const [chatStarted, setchatStarted] = useState(false);
  const [chatUser, setchatUser] = useState("");
  const [userUID, setuserUID] = useState(null);

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

  const changeMessageUser = () => {};

  const initChat = (user) => {
    setchatStarted(true);
    console.log(user);
    setchatUser(user.name);
    setuserUID(user.uid);
  };
  return (
    <div className="container">
      <h3 className=" text-center">{chatStarted ? chatUser : ""}</h3>
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
                if (userList[id].uid === user.uid) {
                  delete userList[id];
                }             
              })}
              {Object.keys(userList).map((id) => {
                if (userList[id] === null || undefined) {
                  return <></>;
                }
                if (userList[id].uid === user.uid) {
                  //delete userList[id];
                } 
                  return (
                    <ChatListt
                      key={id}
                      onClickk={initChat}
                      user={userList[id]}
                      u_Name={userList[id].name}
                      u_image={userList[id].image}
                    ></ChatListt>
                  );
                
              })}
            </div>
          </div>
          {chatStarted ? (
            <ChatMessageList userreceiveruid={userUID}></ChatMessageList>
          ) : (
            <></>
          )}
        </div>
        <p className="text-center top_spac"></p>
      </div>
    </div>
  );
}
