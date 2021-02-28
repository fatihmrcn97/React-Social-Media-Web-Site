import React, { useContext ,useState} from "react";
import { UserContext } from "../../contexts/user";
import { signInWithEmail } from "../../services/auth";
import "./style.css";
import logo from "../../assets/logo_1.png"
import { Link } from "react-router-dom";

export default function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user;
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  

  const signInWithEmailBtn = async () => {
    let userBySignInWithEmail = await signInWithEmail(email, password);
    if (userBySignInWithEmail) setUser(userBySignInWithEmail);
    console.log(userBySignInWithEmail);
    console.log("oldu dayı");
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
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
        />
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
