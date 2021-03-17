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
        
                className="btn btn-lg btn-success btn-circle my-4 mr-3 colors"
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
                  <h4 className="card-title">Everybody see you in second</h4>
                  <p className="card-text">
                    You can use this web page as personal sharing
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
                  <h4 className="card-title">User Friendly</h4>
                  <p className="card-text">
                    Simple and fast usage.
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
                  <h4 className="card-title">Multi Platform </h4>
                  <p className="card-text">
                    Andriod application is available on the play store.
                  </p>
                </div>
              </div>
            </div>
          </div>
     
        </div>
      </div>
      <div className="container mt-5  text-center">
        <p className="pt-5 pb-2 h4 text-monospace">
          Share your photos with people and see how much like you get.
        </p>
        <div className="row">
          <div className="mx-auto" style={{ width: "800px" }}>
            <p className="text-center">
            The perfection of this web page , you have zero followers but everybody see what you are publishing
            with the limited publish (1 per day, it will change by number of user) we will encounter 
            unstable post flow .
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
                   Rihanna sharing with us !!!
                  </a>
                </h4>
                <p className="card-text">
                  Rihanna deside to use this web page for the sharing daily rutine.
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
                    Cristiano Ronaldo
                  </a>
                </h4>
                <p className="card-text">
                Cristiano Ronaldo deside to use this web page for the sharing daily training.
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
                    Todays best liked : 
                  </a>
                </h4>
                <p className="card-text">
                 ... User get the most like for today.
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
