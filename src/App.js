import "./App.css";
import SignInBtn from "./components/signinbtn";
import { UserContextProvider } from "./contexts/user";
import Home from "./pages/home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import { auth } from "./firebase";
import Navbar from "./containers/navbar";
import Register from "./components/register";
import ChatMainPage from "./pages/chat/chatmainpage";
import Footer from "./containers/footer";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Profile from "./pages/profile";
import PopupModal from "./popups/editprofpopup";

function App() {
  return (
    <Router>
      <div className="app">
        <UserContextProvider>
          <Navbar></Navbar>
          <Route path="/" exact component={Home}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/chat" component={ChatMainPage}></Route>
          <Route path="/login" component={SignInBtn}></Route>
          <Route path="/aboutUs" component={AboutUs}></Route>
          <Route path="/contact" component={ContactUs}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/editProfile" component={PopupModal}></Route>
          <Footer></Footer>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
