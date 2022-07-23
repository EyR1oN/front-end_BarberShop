import React, { useState } from "react";

function Login() {
  const [userLog, setUserLog] = useState({
    username: undefined,
    password: undefined,
  });
  const handleLogin = (event) => {
    event.preventDefault();
    fetch(
      "https://localhost:44370/api/user/" +
        userLog.username +
        "/" +
        userLog.password
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserLog(data);
      });
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
                  </div>

                  <div className="col-md-12">
                    <div className="login-register-button">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-default"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
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
