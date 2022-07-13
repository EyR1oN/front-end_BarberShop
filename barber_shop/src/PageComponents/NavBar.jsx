import React from 'react';
import "./../CSS/style.css";
//import logo from "./../Image/logo.png"

export default function NavBar() {
  return (
    
    <div className="header">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <a href="index.html"><img src={require("./../Image/logo.png")}  alt="Barbershop Logo"/></a>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
                <div className="navigation">
                    <div id="navigation">
                        <ul>
                            <li className="active"><a href="index.html" title="Home">Home</a></li>
                            <li><a href="contact.html" title="Contact Us">Contact</a> </li>
                            <li><a href="login.html" title="Login">Log in</a> </li>
                            <li><a href="registration.html" title="Registration">Registration</a> </li>
                            <li><a href="caregory-list.html" title="Barbershop category">Barbershop category</a> </li>
                       
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}