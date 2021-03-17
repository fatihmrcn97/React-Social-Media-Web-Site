import React, { useContext ,useState} from "react";
import { UserContext } from "../../contexts/user";
import { signInWithEmail } from "../../services/auth";
import "./style.css";
import logo from "../../assets/logo_1.png"
import { Link, useHistory } from "react-router-dom";
import Footer from "../../containers/footer";

export default function SignInBtn() {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext).user;
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const signInWithEmailBtn = async (event) => {
    event.preventDefault();
    if (email === "") {
      setemailError("Email can not be empty");
      return;
    } else {
      setemailError("");
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
    let userBySignInWithEmail = await signInWithEmail(email, password);
    if (userBySignInWithEmail) {
      setUser(userBySignInWithEmail);
      history.push("/");
    }
    else{
      alert("Wrond Credentials")
    }

    console.log(userBySignInWithEmail);
    if(userBySignInWithEmail ===undefined){
   //   alert("Wrond Credentials")
    }
  };

  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">
      <img src={logo} alt="icon"/>
    </div>
      {/* Login Form */}
      
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          value={email}
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="login"
        />
         <p className="errorStyle">{emailError ? emailError : ""}</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
        />
         <p className="errorStyle">{passwordError ? passwordError : ""}</p>
        <input
          type="submit"
          className="fadeIn fourth"
          onClick={signInWithEmailBtn}
          value="Login"
        />
      
      {/* Remind Passowrd */}
      <div id="formFooter">
        <Link to="" className="underlineHover" href="#">
          Forgot Password?
        </Link>
     <Link className="underlineHover" to="/register">   
          Don't have account ?
      </Link>
      </div>
    </div>
  </div>
  );
}
