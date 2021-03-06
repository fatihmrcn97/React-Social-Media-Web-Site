import React, { useState, useContext } from "react";
import "./style.css";
import { UserContext } from "../../contexts/user";
import Comment from "../../components/comment";
import { firebasedb, storage } from "../../firebase";
import CommentInput from "../../components/commentInput";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
import CommentIcon from "@material-ui/icons/Comment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function Post({
  profileUrl,
  username,
  id,
  photoURL,
  caption,
  comments,
  likes,
  commentCount,
  time,
  title
}) {
  const [user, setUser] = useContext(UserContext).user;
  const [likeToggle, setlikeToggle] = useState(false);
  // Time handling
  var date = new Date(time * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  //finished

  const toggleLike = () => {
    if (likeToggle) setlikeToggle(false);
    else setlikeToggle(true);
  };

  const deletePost = () => {
    //delete the image from firebase sotarege
    //get referen to the image file we like to delete
    var imageRef = storage.refFromURL(photoURL);
    //delete file
    imageRef
      .delete()
      .then(function () {
        console.log("Delete oldu");
      })
      .catch(function (err) {
        console.log(err.message);
      });

    // remove post from firebase database
    firebasedb
      .ref("Posts")
      .child(id)
      .remove()
      .then(function () {
        console.log("databasedende gitti oldu");
      })
      .catch(function (err) {
        console.log(err.message);
      });
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="cardbox shadow-lg bg-white">
              <div className="cardbox-heading">
                {/* START dropdown*/}
                <div className="dropdown float-right">
                  <button
                    onClick={deletePost}
                    className="btn btn-flat btn-flat-icon"
                    type="button"
                    aria-expanded="false"
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                </div>
                {/*/ dropdown */}
                <div className="media m-0">
                  <div className="d-flex mr-3">
                    <a href>
                      <img
                        className="img-fluid rounded-circle"
                        src={profileUrl}
                        alt="User"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="m-0">{username}</p>
                    <small>
                      <span>
                        <i className="icon ion-md-pin" /> {title}
                      </span>
                    </small>
                    <small>
                      <span>
                        <i className="icon ion-md-time" /> {formattedTime}
                      </span>
                    </small>
                  </div>
                </div>
                {/*/ media */}
              </div>
              {/*/ cardbox-heading */}
              <div className="cardbox-item">
                <img
                  className="img-fluid"
                  style={{ width: "100%" }}
                  src={photoURL}
                  alt="Image"
                />
              </div>
              {/*/ cardbox-item */}
              <div className="cardbox-base">
                <ul className="float-right">
                  <li>
  
                  </li>
                  <li>
                  
                  </li>
                  <li>
                  
                  </li>
                  <li>
                   
                      <em className="mr-3">
                        <CommentIcon></CommentIcon>
                      </em>
                   
                  </li>
                </ul>
                <ul>
                  {likeToggle ? (
                    <li onClick={toggleLike}>
                  
                        <span>
                          <FavoriteIcon
                            style={{ color: "pink" }}
                          ></FavoriteIcon>
                        </span>
                     
                    </li>
                  ) : (
                    <li>
                      <a>
                        <span onClick={toggleLike}>
                          <FavoriteBorderIcon
                            style={{ color: "pink" }}
                          ></FavoriteBorderIcon>
                        </span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a>
                      <span>{likes}</span>
                    </a>
                  </li>
                </ul>
                <ul className="float-middle">
                  <li>
                    <a>
                      <i className="fa fa-comments" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <em className="mr-3">{caption}</em>
                    </a>
                  </li>
                
                </ul>
              </div>
              {/*/ cardbox-base */}
        

              {comments ? (
                Object.keys(comments).map((id) => {
                  return (
                    <div className="cardbox-comments">
                      <span className="comment-avatar float-left">
                        <a href>
                          <img
                            className="rounded-circle"
                            src={comments[id].uDp}
                            alt="..."
                          />
                        </a>
                      </span>
                      <div className="search">
                        <input
                          value={comments[id].comment}
                          disabled
                          type="text"
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}

              {user ? (
                <CommentInput
                  comments={comments}
                  id={id}
                  username={username}
                  profileUrl={profileUrl}
                ></CommentInput>
              ) : (
                <></>
              )}
            </div>
            {/*/ cardbox */}
          </div>
          {/*/ col-lg-6 */}
          <div className="col-lg-3">
            <div className="shadow-lg p-4 mb-2 bg-white author">
              <a href="https://fatihmrcn97.github.io/fatihmercanCV.github.io/">
                Get more from my web site
              </a>
              <p>Fatih Mercan</p>
            </div>
          </div>
          {/*/ col-lg-3 */}
        </div>
        {/*/ row */}
      </div>
      {/*/ container */}
    </section>
  );
}
