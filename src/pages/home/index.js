import React from "react";
import CreatePost from "../../containers/create-post";
import Feed from "../../containers/feed";
import Navbar from "../../containers/navbar";
import Login from "../login";

export default function Home(
) {
  return (
    <div className="home">

      <CreatePost></CreatePost>
      <Feed></Feed>
    </div>
  );
}
