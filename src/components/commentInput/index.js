import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user";
import { firebasedb } from "../../firebase";
import SendIcon from '@material-ui/icons/Send';
import "./style.css";
export default function CommentInput({ comments, id , username ,profileUrl}) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useContext(UserContext).user;
  const timestampforid =Date.now();
  const addComment = () => {
    //Add comment to the post info
    if (comment !== "") {
    
      firebasedb
        .ref("Posts")
        .child(`${id}/Comments/${timestampforid}`)
        .set({
          comment: comment,
          uName: username,
          cId: timestampforid,
          timestamp: Date.now(),
          uDp: profileUrl,
          uEmail: username,
          uid: user.uid,
        })
        .then(function () {
          setComment("");
          console.log("Comment Added");
        })
        .catch(function (er) {
          console.log(er.message);
        });
    }
  };
  return (
 
    <div className="cardbox-comments">
    <span className="comment-avatar float-left">
      <a href><img className="rounded-circle" src={user.photoURL} alt="..." /></a>                            
    </span>

    <div className="search">
      <input   rows="1"
        placeholder="Comment Here"
        onChange={(e) => setComment(e.target.value)}
        value={comment} type="text" />
      <button onClick={addComment}><SendIcon></SendIcon></button>
    </div>
  </div>			  
  );
}
