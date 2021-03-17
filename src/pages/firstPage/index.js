import React from "react";
import "./style.css";

export default function FirstPage() {
  return (
    <div>
      <div className="jumbotron jumbotron-odi-hero bg-primary">
        <div className="jumbotron-overlay ">
          <div className="container jumbotron-padding  text-center">
            <h1 className="display-4">
              Let the entire world see what you are doing.
            </h1>
            <p>

              <a
        
                className="btn btn-lg btn-success btn-circle my-4 mr-3"
              >
                Sign Up for more
              </a>

            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5" id="about">
        <h1 className="text-center py-4">Why to choose Your Star</h1>
        <div className="row text-center mt-5">
          <div className="col-md-3">
            <div className="card shadow">
              <div className="card-body">
                <div className="py-3 text-center">
                  {" "}
                  <i
                    className="fas fa-rocket card-img-top fa-4x text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Ready to ship everyone</h4>
                  <p className="card-text">
                    You can use this web page as personal as well as for commercial
                    purpose 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow">
              <div className="card-body">
                <div className="py-3 text-center">
                  <i
                    className="fas fa-feather card-img-top fa-4x text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Light weight</h4>
                  <p className="card-text">
                    We avoid needless js and CSS which makes template more sleek
                    and powerful.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow">
              <div className="card-body">
                <div className="py-3 text-center">
                  <i
                    className="fa fa-tablet card-img-top fa-4x text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Responsive </h4>
                  <p className="card-text">
                    Our templates works in all devices (desktop,tablets and
                    phones).{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow">
              <div className="card-body">
                <div className="py-3 text-center">
                  <i
                    className="fas fa-charging-station card-img-top fa-4x text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Easy customisation</h4>
                  <p className="card-text">
                    Our templates are clean,light weight and technically
                    refined.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5  text-center">
        <p className="pt-5 pb-2 h4 text-monospace">
          Speed up your development with high quality themes.
        </p>
        <div className="row">
          <div className="mx-auto" style={{ width: "800px" }}>
            <p className="text-center">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
 
 
      {/* blog post start */}
      <div className="container mt-5">
        <h3 className="pt-4 d-inline latest-news">Latest News</h3>
        <a
          href
          className="btn btn-outline-primary btn-circle d-inline float-right"
        >
          View all
        </a>
        {/*  <p class="h5 text-center text-muted">Awesome featured templates</p> */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src="images/jelly-pro-3.jpg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title mb-3 text-dark">
                  <a
                    href="#"
                    className="text-decoration-none text-dark font-weight-bold"
                  >
                    Title of a blog post
                  </a>
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.{" "}
                </p>
              </div>
              <div className="card-footer text-muted border-0 bg-white"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src="images/jelly-pro-2.jpeg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title mb-3 text-dark">
                  <a
                    href="#"
                    className="text-decoration-none text-dark font-weight-bold"
                  >
                    Title of a blog post
                  </a>
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.{" "}
                </p>
              </div>
              <div className="card-footer text-muted border-0 bg-white"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src="images/jelly-pro-1.jpeg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title mb-3 text-dark">
                  <a
                    href="#"
                    className="text-decoration-none text-dark font-weight-bold"
                  >
                    Title of a blog post
                  </a>
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.{" "}
                </p>
              </div>
              <div className="card-footer text-muted border-0 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* blog post end */}
     
    </div>
  );
}
