import React, { Component, useState} from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
export default function NavBarLogged() {
  let navigate = useNavigate();
 const[showLog, setShowLog]=useState(false);

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
                    <Link to={"/categoryList"} title="CategoryList">
                      CategoryList
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <a id="myBtn" onClick={()=>setShowLog(!showLog)}>Log out</a>
                    {showLog &&  <div id="myModal" class="modal">
                      <div class="modal-content">
                        <span class="close" onClick={()=>setShowLog(!showLog)}>&times;</span>
                        <p class="logout-text">Log out of Barbershop?</p>
                        <button class="logout-button" onClick={()=>{window.localStorage.clear();navigate("/home")}}> Log out</button>
                      </div>
                    </div>}
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
