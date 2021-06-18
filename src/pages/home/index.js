import React, { useContext } from "react";
import CreatePost from "../../containers/create-post";
import Feed from "../../containers/feed";
import Footer from "../../containers/footer";
import Navbar from "../../containers/navbar";
import { UserContext } from "../../contexts/user";
import FirstPage from "../firstPage";
import Login from "../login";


export default function Home() {
  const [user, setUser] = useContext(UserContext).user;
  return (
    <div className="home">
      {user ? (
        <div>
          <CreatePost></CreatePost>
          <Feed></Feed>
        
        </div>
      ) : (
        <div>
          <FirstPage></FirstPage>
       
        </div>
      )}
    </div>
  );
}
