import React, {  useState } from "react";

function Registration() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange=(value)=>{
        setName(value);
    }
    const handleSurnameChange=(value)=>{
        setSurname(value);
    }
    const handleUsernameChange=(value)=>{
        setUsername(value);
    }
    const handleEmailChange=(value)=>{
        setEmail(value);
    }
    const handlePasswordChange=(value)=>{
        setPassword(value);
    }
    const handleConfirmPasswordChange=(value)=>{
        setConfirmPassword(value);
    }

    const handleSingup=()=>{
      //  console.log('is there1');
    const data={
      name:name,
      surname:surname,
      username:username,
      email:email,
      password:password,
      Status:"average user",
      
    };
    console.log( data.username)
fetch('https://localhost:44370/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  
})
.then((response) => response.json(),

)
//Then with the data from the response in JSON...
.then((data) => {
  console.log('Success:', data);
 
})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});
    }
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
                                <li><a href="/home">Home</a></li>
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
                                        <label className="control-label" htmlFor="name">name</label>
                                        <input type="text" name="name" id="name" placeholder="" className="form-control" 
                                        onChange={(e)=>handleNameChange(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label" htmlFor="surname">surname</label>
                                        <input type="text" name="surname" id="surname" placeholder="" className="form-control"
                                        onChange={(e)=>handleSurnameChange(e.target.value)}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label" htmlFor="username">username</label>
                                        <input type="text" name="username" id="username" placeholder="" className="form-control"
                                        onChange={(e)=>handleUsernameChange(e.target.value)}/>
                                    </div>     
                                    <div className="col-md-6">
                                        <label className="control-label" htmlFor="email">email</label>
                                        <input type="text" name="email" id="email" placeholder="" className="form-control"
                                        onChange={(e)=>handleEmailChange(e.target.value)}/>
                                    </div>  
                                    <div className="col-md-6">
                                        <label className="control-label" htmlFor="password">password</label>
                                        <input type="password" name="password" id="password" placeholder="" className="form-control"
                                        onChange={(e)=>handlePasswordChange(e.target.value)}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label" htmlFor="confirm-password">confirm password</label>
                                        <input type="text" name="confirm password" id="confirm password" placeholder="" className="form-control"
                                        onChange={(e)=>handleConfirmPasswordChange(e.target.value)}/>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <div className="login-register-button">
                                            <button id="singlebutton" name="singlebutton" className="btn btn-default" onClick={()=>handleSingup()}>sing up</button>
                                        </div>
                                    </div>
                                   
                                </div>
                                <hr/>
                                <div className="psw">
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

export default Registration;