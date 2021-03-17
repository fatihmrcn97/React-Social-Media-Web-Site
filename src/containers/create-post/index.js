import React, { useContext, useState } from "react";
import SignInBtn from "../../components/signinbtn";
import { UserContext } from "../../contexts/user";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import "./style.css";
import { db, storage, firebasedb } from "../../firebase";
import makeid from "../../helper/functions";
import { debounce } from "@material-ui/core";

import firebase from "firebase";
import Login from "../../pages/login";
import { getUserImage, logout } from "../../services/auth";

export default function CreatePost({}) {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const timesta = firebase.database.ServerValue.TIMESTAMP;
  const [uDpHandle, setuDpHandle] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
      var imagePreview = document.getElementById("image-preview");
      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };

  const handleUpload = () => {
    var timeNow = Date.now();

    if (image) {
      var imageName = makeid(10);
      const uploadTask = storage.ref(`Posts/${imageName}.jpg`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function 1%,2% ... %100
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // buraya alert ekliyebiliriz
          console.log(error);
        },
        () => {
          //get download url and upload post info
          firebasedb
            .ref(`Users/${user.uid}`)
            .get()
            .then(function (snapshot) {
              if (snapshot) {
                console.log(snapshot.val());
                setuDpHandle();
                storage
                  .ref("Posts")
                  .child(`${imageName}.jpg`)
                  .getDownloadURL()
                  .then((imageUrl) => {
                    firebasedb
                      .ref("Posts")
                      .child(timeNow)
                      .set({
                        pDescription: caption,
                        pId: timeNow.toString(),
                        pImage: imageUrl,
                        pTime: timeNow.toString(),
                        pTitle: "From Web",
                        uDp: snapshot.val().image,
                        uEmail: user.email,
                        uName: user.email.replace("@gmail.com", ""),
                        pComments: "0",
                        uid: user.uid,
                        pLikes: "0",
                      });
                  });
                setCaption("");
                setProgress(0);
                setImage(null);
                document.getElementById("image-preview").style.display = "none";
              } else {
                console.log("No data avail");
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      );
    }
  };

  return (
    <div className="createPost">
      {user ? (
        <div className="createPost_loggedIn border border-dark">
          <p>Create Post</p>
          <div className="createPost_loggedInCenter">
            <textarea
              placeholder="Enter caption here."
              className="createPost_textarea"
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>

            <div className="createPost_imagePreview">
              <img id="image-preview" alt=""></img>
            </div>
          </div>
          <div className="createPost_loggedInBottom">
            <div className="createPost_imageUpload">
              <label htmlFor="fileInput">
                <AddAPhotoIcon
                  style={{ cursor: "pointer", fontSize: "20px" }}
                ></AddAPhotoIcon>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleChange}
              ></input>
            </div>
            <button
              className="createPost_uploadBtn"
              onClick={handleUpload}
              style={{ color: caption ? "#000" : "lightgrey" }}
            >
              {`Upload ${progress != 0 ? progress : ""}`}
            </button>
          </div>
        </div>
      ) : (
        <div>
          
            <SignInBtn></SignInBtn>
        
        </div>
      )}
    </div>
  );
}
