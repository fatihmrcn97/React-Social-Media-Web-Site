import React, { useContext, useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import Post from "../../containers/post";
import { UserContext } from "../../contexts/user";
import { firebasedb } from "../../firebase";
import PopupModal from "../../popups/editprofpopup";

export default function Profile() {
  const [user, setUser] = useContext(UserContext).user;
  const [profileName, setprofileName] = useState("");
  const [image, setimage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [userFromFb, setuserFromFb] = useState([]);
  const [posts, setPosts] = useState({});
 

  useEffect(() => {
    firebasedb.ref("Posts").on("value", (snapshot) => {
      if (snapshot.val()) {
        setPosts({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  useEffect(() => {
    firebasedb.ref("Users").on("value", (snapshot) => {
      if (snapshot.val()) {
        setuserFromFb({ ...snapshot.val() });
      }
    });

 
  }, []);

  useEffect(() => {
    if (user) {
      Object.keys(userFromFb).map((userfromfbid) => {
        if (userfromfbid === user.uid) {
          console.log(userFromFb[userfromfbid].name);
          setprofileName(userFromFb[userfromfbid].name);
          setimage(userFromFb[userfromfbid].image);
          setphoneNumber(userFromFb[userfromfbid].phone);
        }
      });
    }
  }, )

  return (
   <div>
      <div className="row py-5 px-4">
      <div className="col-md-5 mx-auto">
        {/* Profile widget */}
        <div className="bg-white shadow rounded overflow-hidden">
          <div
            className="px-4 pt-0 pb-4 coverr"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="media align-items-end profile-head"
              style={{ transform: "translateY(5rem)" }}
            >
              <div className="mr-3">
                <img
                  src={image}
                  alt="profileimage"
                  className="rounded mb-2 img-thumbnail imagesiz profile"
                />
                <Link to="/editProfile">
                <a href="#" className="btn btn-outline-dark btn-sm btn-block">
                  Edit Profile
                </a>
                </Link>
              </div>
              <div className="media-body mb-5 text-white">
                <h4 className="mt-0 mb-0">{profileName}</h4>
                <p className="small mb-4">
                  {" "}
                  <i className="fas fa-map-marker-alt mr-2" />
                  Istanbul
                </p>
              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fas fa-image mr-1" />
                  Photos
                </small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                <small className="text-muted">
                  <i className="fas fa-user mr-1" />
                  Followers
                </small>
              </li>
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                <small className="text-muted">
                  <i className="fas fa-user mr-1" />
                  Following
                </small>
              </li>
            </ul>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">About</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">Phone Number : {phoneNumber}</p>
              <p className="font-italic mb-0">Lives in Turkey</p>
              <p className="font-italic mb-0">Photographer</p>
            </div>
          </div>      
        </div>
      </div>
    </div>

    {Object.keys(posts).map((id) => {
        if(posts[id].uid === user.uid){
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
        }
        else{
          return (<></>);
        }
      })}
    
    
   </div>
    
  );
}
