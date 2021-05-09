import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user";
import { firebasedb } from "../../firebase";

export default function PopupModal() {
  const [user, setUser] = useContext(UserContext).user;
  const [profileName, setprofileName] = useState("");
  const [image, setimage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [userFromFb, setuserFromFb] = useState([]);
  const [posts, setPosts] = useState({});
  const [profileChangeName, setprofileChangeName] = useState("")
  const [phoneChangeNumber, setphoneChangeNumber] = useState("")

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
  });

  const updateProfile =() =>{
    if(user){
      console.log("calsiryormlaaaaaa")
      if(profileChangeName){
        console.log("calsiryormlaaaaaa")
        firebasedb.ref(`Users/${user.uid}`).update({
          name : profileChangeName
        });
      }

      if(phoneChangeNumber ==! null && phoneChangeNumber.length === 10){
        firebasedb.ref(`Users/${user.uid}`).update({
          phone : phoneChangeNumber
        });
      }else{
        alert("Phone number is empty or not 10 digit")
      }
    }
  }

  return (
    <div className="container bodyy">
      <div className="row gutters ">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src={image} alt="Maxwell Admin" />
                  </div>
                  <h5 className="user-name">{profileName}</h5>
                  <h6 className="user-email">{user.email}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName"></label>
                    <input
                      onChange={(e) => setprofileChangeName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter new name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail"></label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Interest of you"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone"></label>
                    <input
                      onChange={(e) => setphoneChangeNumber(e.target.value)}
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder={phoneNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Street">Street</label>
                    <input
                      type="name"
                      className="form-control"
                      id="Street"
                      placeholder="Enter Street"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="ciTy">City</label>
                    <input
                      type="name"
                      className="form-control"
                      id="ciTy"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                      onClick={updateProfile}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
