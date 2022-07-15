import React from "react";
import { Link } from "react-router-dom";

//import logo from "./../Image/logo.png"

export default function NavBarLogged() {
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
                    <Link to={"/categoryList"} title="CategoryList">
                      CategoryList
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <a id="myBtn">Log out</a>
                    <div id="myModal" class="modal">
                      <div class="modal-content">
                        <span class="close">&times;</span>
                        <p class="logout-text">Log out of Barbershop?</p>
                        <button class="logout-button"> Log out</button>
                      </div>
                    </div>
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
