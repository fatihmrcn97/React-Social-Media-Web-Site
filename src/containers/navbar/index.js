import React, { useState, useContext } from "react";
import SignInBtn from "../../components/signinbtn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { UserContext } from "../../contexts/user";
import { logout, signInWithGoogle } from "../../services/auth";
import { Link } from "react-router-dom";
function Navbar() {
  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
    console.log(userBySignIn);
  };
  const [user, setUser] = useContext(UserContext).user;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            Your Star
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto"></ul>

          {user ? (
            <ul className="navbar-nav">
                   <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link active" aria-current="page">
                    Contact Us
                  </a>
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/aboutUs">
                  <a className="nav-link active" aria-current="page">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chat">
                  <a className="nav-link active" aria-current="page">
                    Chat
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile">
                  <a className="nav-link active" aria-current="page">
                    Profile
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/profile">
                  <img className="navbar_img" src={user.photoURL}></img>
                </Link>
              </li>

              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
               <li className="nav-item">
                <Link to="/contact">
                  <a className="nav-link active" aria-current="page">
                    Contact Us
                  </a>
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/aboutUs">
                  <a className="nav-link active" aria-current="page">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a className="nav-link active" aria-current="page">
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <a className="nav-link active" aria-current="page">
                    Register
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={signInBtnClick}
                >
                  Sign In With Google
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
