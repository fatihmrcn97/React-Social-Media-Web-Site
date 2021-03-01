import React, { useState, useEffect ,useContext} from "react";
import { UserContext } from "../../contexts/user";
import { firebasedb } from "../../firebase";
import Post from "../post";
import "./style.css";

export default function Feed() {
  const [posts, setPosts] = useState({});
  const [user, setUser] = useContext(UserContext).user;

  useEffect(() => {
    firebasedb.ref("Posts").on("value", (snapshot) => {
      if (snapshot.val()) {
        setPosts({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  return (
    <div className="feed">
      {Object.keys(posts).map((id) => {
        return (
          <Post
            profileUrl={posts[id].uDp}
            username={posts[id].uName}
            photoURL={posts[id].pImage}
            caption={posts[id].pDescription}
            id={id}
            key={id}
            comments={posts[id].Comments}
            likes ={posts[id].pLikes}
            commentCount ={posts[id].pComments}
            time ={posts[id].pTime}
            title = {posts[id].pTitle}
            postId = {posts[id].uid}
            pId = {posts[id].pId}
          ></Post>
        );
      })}
    </div>
  );
}
