import React from "react";

//import logo from "./../Image/logo.png"

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="footer-widget">
                <h2 className="widget-title">Salon Address</h2>
                <ul className="listnone contact">
                  <li>
                    <i className="fa fa-map-marker"></i> 4958 Norman Street Los
                    Angeles, CA 90042{" "}
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +00 (800) 123-4567
                  </li>
                  <li>
                    <i className="fa fa-fax"></i> +00 (123) 456 7890
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i> info@salon.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="footer-widget footer-social">
                <h2 className="widget-title">Social Feed</h2>
                <ul className="listnone">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook"></i> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i> Google Plus
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i> Linked In
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-youtube"></i>Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="footer-widget widget-newsletter">
                <h2 className="widget-title">Newsletters</h2>
                <p>
                  Enter your email address to receive new patient information
                  and other useful information right to your inbox.
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tiny-footer">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="copyright-content">
                  <p>© Men Salon 2020 | all rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
