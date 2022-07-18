import React from "react";
import { Link } from "react-router-dom";

export default function NavBarUnloged() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <a href="#">
              <img src="./images/logo.png" alt="Barbershop Logo" />
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
                  <Link to={"/login"} title="Log in">
                      Log in
                    </Link>
                  </li>
                  <li>
                  <Link to={"/registration"} title="Registration">
                      Registration
                    </Link>
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
