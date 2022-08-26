import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  let navigate = useNavigate();
  let errormassage=false;
  const [userRegistr, setUserRegistr] = useState({
    name: undefined,
    surname: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    statusId: 1,
  });
  const [userLogName, setUserLogName] = useState(undefined);
  const [formErrors, setFormErrors] = useState({});
  let countLogedUser=0;
  useEffect(() => {
    fetch("https://localhost:5001/api/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserLogName(data);
       
        
       
      });
      //console.log("count---"+Object.keys(userLogName).length);
     // 
  }, []);
  const checkRightConfirmPassword=()=>{
    if (userRegistr.password != userRegistr.confirmPassword) {
   //   console.log("Pessword is not corect");
      return false;
    }
    else {
      return true;
    }
  }
 
  const handleSingup = (event) => {
    setFormErrors(validate(userRegistr));
    //console.log("datALOG---"+userLogName[0].username);
    event.preventDefault();
    console.log("is there1");
    console.log("i   "+userRegistr.password);
    console.log("i1  "+userRegistr.confirmPassword);
    
    console.log("un "+userRegistr.username);
    console.log("hhh "+JSON.parse(window.localStorage.getItem("userData")));
    console.log("cvvv "+Object.keys(userLogName).length)
    for(let i=0; i<Object.keys(userLogName).length;i++){
      console.log("bbbb "+userLogName[i].username)
      if(userLogName[i].username==userRegistr.username){
        countLogedUser=countLogedUser+1;
        console.log("countt "+countLogedUser)
                         
      }
    }
    if(countLogedUser!==0){
      alert("User with this username already exists");
      navigate("/registration");
      window.location.reload();    
    }
    /*fetch(
      "https://localhost:5001/api/user"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserLogName(data);
        console.log("data- "+ JSON.stringify(userLogName.username));
        console.log("lll- "+data)
      });*/
     // const [categories, setCategories] = useState(undefined);
     if (userRegistr.password === userRegistr.confirmPassword) { 
    fetch("https://localhost:5001/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify(userRegistr),
     
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
     
        console.log(JSON.stringify(userRegistr));
        navigate("/login");
        window.location.reload();
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    else{
      console.log("Error:"+ "The Confirm Password confirmation does not match");
    }
  };
  const validate = (values) => {
    const errors = {};
    
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
      
    }
    if (userRegistr.password !== userRegistr.confirmPassword) {
      errors.confirmPassword = "The Confirm Password confirmation does not match!";
     
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
                <h2 className="page-title">Registration</h2>
                <div className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li className="active">Registration</li>
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
            <div className="registration-field">
              <h1>Registration Form</h1>
              <p className="log-regist-p"> Please complete the form below.</p>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="name">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="surname">
                      surname
                    </label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          surname: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="username">
                      username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                    <p className="errormess">{formErrors.username}</p>
                  </div>
                 
                  
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="email">
                      email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="password">
                      password
                    </label>
                   
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                     <p className="errormess">{formErrors.password}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="control-label" htmlFor="confirm-password">
                      confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm password"
                      id="confirm password"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserRegistr((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                    />
                     <p className="errormess">{formErrors.confirmPassword}</p>
                  </div>

                  <div className="col-md-12">
                    <div className="login-register-button">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-default"
                        onClick= {handleSingup}
                      >
                        sing up
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="psw">
                  <span> Have an account?</span>
                  <a href="/login"> Log in</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
