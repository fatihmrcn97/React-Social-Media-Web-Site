import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import logo from "../../assets/logo_1.png";
import { Link ,useHistory} from "react-router-dom";
import "./style.css";
import { signUpWithEmail } from "../../services/auth";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Register() {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext).user;
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  //errors
  const [emailError, setemailError] = useState("");
  const [nameError, setnameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [imageError, setimageError] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
      var imagePreview = document.getElementById("image-previeww");
      imagePreview.src = selectedImageSrc;
    }
  };

  const handleSignUp = () => {
    if (email === "") {
      setemailError("Email can not be empty");
      return;
    } else {
      setemailError("");
    }
    if (phone === "") {
      setphoneError("Phone can not be empty");
      return;
    } else {
      setphoneError("");
    }
    if (phone.length !== 10) {
      setphoneError("Phone number must be 10 digit");
      return;
    } else {
      setpasswordError("");
    }
    if (name === "") {
      setnameError("Name can not be empty");
      return;
    } else {
      setnameError("");
    }
    if (password === "") {
      setpasswordError("Password can not be empty");
      return;
    } else {
      setpasswordError("");
    }
    if (password.length < 6) {
      setpasswordError("Password must have min 6 char");
      return;
    } else {
      setpasswordError("");
    }

    if (image === null) {
      setimageError("Image can not be empty");
      return;
    } else {
      setimageError("");
    }

    signUpWithEmail(email, password, phone, role, name, image);
    history.push("/login");
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        {/* Icon */}
        <div className="fadeIn first">
          <img src={logo} alt="icon" />
        </div>
        {/* Login Form */}
        <form className="md-form">
          <div className="file-field">
            <div className="mb-4">
              <img
                id="image-previeww"
                src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                className="rounded-circle z-depth-1-half avatar-pic"
                alt="example placeholder avatar"
              ></img>
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn btn-mdb-color btn-rounded">
                <label for="file-upload" className="custom-file">
                  Add Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  onChange={handleChange}
                ></input>
                <div className="errorStyle">{imageError ? imageError : ""}</div>
              </div>
            </div>
          </div>
        </form>

        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="Email"
        />
        <div className="errorStyle">{emailError ? emailError : ""}</div>
        <input
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="Phone Number"
        />

        <div className="errorStyle">{phoneError ? phoneError : ""}</div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="password"
          required
          className="fadeIn third"
          name="login"
          placeholder="name"
        />
        <div className="errorStyle">{nameError ? nameError : ""}</div>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
        />
        <div className="errorStyle">{passwordError ? passwordError : ""}</div>
        <input
          type="submit"
          id="submit"
          className="fadeIn fourth"
          value="Register"
          onClick={handleSignUp}
        />

        {/* Remind Passowrd */}
        <div id="formFooter">
          <Link className="underlineHover" to="/">
            Already have account ?
          </Link>
        </div>
      </div>
    </div>
  );
}
