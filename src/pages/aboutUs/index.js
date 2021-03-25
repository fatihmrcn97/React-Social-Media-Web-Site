import React from "react";
import "./style.css";
import fatih from "../../assets/fattth.PNG";
export default function AboutUs() {
  return (
    <div className="htmll">
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="columnn"></div>
        <div className="columnn">
          <div className="cardd">
            <img src={fatih} alt="Mike" style={{ width: "100%" }} />
            <div className="containerr">
              <h2>Fatih Mercan</h2>
              <p className="title">Founder , Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>fatihmercan7991@gmail.com</p>
              <p>
                <button className="buttonn">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="columnn"></div>
      </div>
    </div>
  );
}
