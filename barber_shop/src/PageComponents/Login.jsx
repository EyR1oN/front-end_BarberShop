import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [userLog, setUserLog] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleLogin = (event) => {
    setFormErrors(validate(userLog));
    event.preventDefault();
    
    fetch(
      "https://localhost:5001/api/user/" +
        userLog.username +
        "/" +
        userLog.password
    )
      .then((response) => response.json())
      .then((data) => {
        setUserLog(data);
        if(data=="Error"){
          window.localStorage.removeItem("userData")
          console.log("d");
        }
        else{
        window.localStorage.setItem("userData", JSON.stringify(data[0]));
        navigate("/home");
        window.location.reload();
        }

     
      });
      window.localStorage.setItem("userPassword", JSON.stringify(userLog.password));
      setFormErrors(validate(userLog));
  };

 
  const validate = (values) => {
    console.log("ooo  "+window.localStorage.getItem("userData"))
    const errors = {};
     
    if (!values.username ) {
      errors.username = "Username is required!";
    }
    if (!values.password ) {
      errors.password = "Password is required!";
      
    }
    if( window.localStorage.getItem("userData")===null)
   {
    errors.full = "Sorry, your password or username were incorrect";
   }
 
  return errors;
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">Log in</h2>
                <div className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li className="active">Log in</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="login-field">
              <h1>Login Form</h1>
              <p className="log-regist-p"> Please complete the form below.</p>
              <form>
                <div className="row">
                  <div className="login-data">
                    <label className="control-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserLog((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                    <p className="errormess">{formErrors.username}</p>
                  </div>
                 
                  
                  <div className="login-data">
                    <label className="control-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserLog((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                     <p className="errormess">{formErrors.password}</p>
                  </div>
                 
                  <div className="col-md-12">
                    <div className="login-register-button">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-default"
                        
                        onClick={ // handleLogin
                          (e) => {
                            handleLogin(e);
                                                
                            if(window.localStorage.getItem("userData")===null)
                            {
                            //  alert("Incorrect username or password");
                            //  navigate("/login");
                              console.log("not logined");
                            //  window.location.reload();
                            }
                            else
                            {
                              console.log("logined");
                            }
                           
                          }
                        }
                      >
                        Login
                      </button>

                      <p className="errormess">{formErrors.full}</p>
                    </div>
                  </div>
                </div>
                <div className="psw">
                  <a href="#"> Forgot password?</a>
                </div>
                <hr />
                <div className="psw">
                  <span>Don't have an account?</span>
                  <a href="/registration"> Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
