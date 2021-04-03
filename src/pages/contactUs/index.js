import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
export default function ContactUs() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u78nidu",
        "template_l25jkmk",
        e.target,
        "user_NYZnGDWcgSsEB4X7dJZH0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          {/* SECTION TITLE */}
          <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
            <h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
          </div>
        </div>
        <div className="col-md-7 col-sm-10">
          {/* CONTACT FORM HERE */}
          <div className="wow fadeInUp" data-wow-delay="0.4s">
            <form onSubmit={sendEmail} id="contact-form" action="#" method="get">
              <div className="paddingtop"></div>
              <div className="col-md-6 col-sm-6">
                <input
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="paddingtop"></div>
              <div className="col-md-6 col-sm-6">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="paddingtop"></div>
              <div className="col-md-12 col-sm-12">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  rows={5}
                  name="message"
                  placeholder="Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="paddingtop"></div>
              <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
        
                <input type="submit" value="Send Message" ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 col-sm-8">
          {/* CONTACT INFO */}
          <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
            <div className="section-title">
              <h2>Contact Info</h2>
              <p>
                Lorem ipsum dolor sit consectetur adipiscing morbi venenatis et
                tortor consectetur adipisicing lacinia tortor morbi ultricies.
              </p>
            </div>
            <p>
              <i className="fa fa-map-marker" /> 456 New Street 22000, New York
              City, USA
            </p>
            <p>
              <i className="fa fa-comment" />{" "}
              <a href="mailto:info@company.com">info@company.com</a>
            </p>
            <p>
              <i className="fa fa-phone" /> 010-020-0340
            </p>
          </div>
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
            style={{ height: "250px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
