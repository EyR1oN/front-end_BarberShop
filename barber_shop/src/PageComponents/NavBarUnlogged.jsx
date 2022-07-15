import React from "react";
import { Link } from "react-router-dom";
//import logo from "./../Image/logo.png"

export default function NavBarUnloged() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <a href="#">
              <img src={require("./../Image/logo.png")} alt="Barbershop Logo" />
            </a>
          </div>
          <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
            <div className="navigation">
              <div id="navigation">
                <ul>
                  <li>
                    <Link to={"/home"} title="Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"} title="Contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to={"/categoryList"} title="Category">
                      Category
                    </Link>
                  </li>
                  <li>
                    <a href="#" title="Login">
                      Log in
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" title="Registration">
                      Registration
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
