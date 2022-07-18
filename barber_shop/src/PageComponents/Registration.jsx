import React from 'react'

function Registration() {
  return (
    <div>
        <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="page-caption">
                        <h2 class="page-title">Registration</h2>
                        <div class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li><a href="/home">Home</a></li>
                                <li class="active">Registration</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container">
            <div class="row">
                         <div class="registration-field">
                            <h1>Registration Form</h1>
                            <p class="log-regist-p"> Please complete the form below.</p>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="control-label" for="name">name</label>
                                        <input type="text" name="name" id="name" placeholder="" class="form-control"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="control-label" for="surname">surname</label>
                                        <input type="text" name="surname" id="surname" placeholder="" class="form-control"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="control-label" for="username">username</label>
                                        <input type="text" name="username" id="username" placeholder="" class="form-control"/>
                                    </div>     
                                    <div class="col-md-6">
                                        <label class="control-label" for="email">email</label>
                                        <input type="text" name="email" id="email" placeholder="" class="form-control"/>
                                    </div>  
                                    <div class="col-md-6">
                                        <label class="control-label" for="password">password</label>
                                        <input type="password" name="password" id="password" placeholder="" class="form-control"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="control-label" for="confirm-password">confirm password</label>
                                        <input type="text" name="confirm password" id="confirm password" placeholder="" class="form-control"/>
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <div class="login-register-button">
                                            <button id="singlebutton" name="singlebutton" class="btn btn-default">sing up</button>
                                        </div>
                                    </div>
                                   
                                </div>
                                <hr/>
                                <div class="psw">
                                    <span > Have an account?</span>
                                    <a href="/login"> Log in</a>
                                </div>
                               
                            </form>
                        </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Registration