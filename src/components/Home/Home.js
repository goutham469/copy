import React from 'react'
import { useState } from 'react'
import './Home.css'
import messageImage from './messagerIcon.svg'
import { Link } from 'react-router-dom'
import { compareSync } from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate=useNavigate();
    let [errorMessage,changeErrorMessage]=useState("error")
    let [userName,changeUserName]=useState()
    let [password,changePassword]=useState()
    function LoginFunction(event)
    {
        event.preventDefault();
        console.log(userName,password)
        fetch(`http://localhost:4000/users/?user_name=${userName}`).then(data=>data.json())
        .then(data=>{
            //console.log(data)
            if(data.length==0){alert("invalid username")}
            else{if(compareSync(password,data[0].Password_in)){alert("you got it");navigate("/Main",{state:{userName}});}else{alert("invalid password")}}
    
        })
    }
  return (
    <div>
        <h3>Home</h3>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                <center><img className='messasgeIcon' src={messageImage}></img></center>
                <center>
                    <span className='errorMessageSpan'>
                    <p className='errorMessage text-danger'>{errorMessage}</p>
                    </span>
                    <form className='FormDiv'>
                        <input className='usernameInput' type='test' placeholder='Username' onChange={(event)=>{changeUserName(event.target.value)}}/><br/>
                        <input className='passwordInput' type='password' placeholder='Password' onChange={(event)=>{changePassword(event.target.value)}}/><br/>
                        <button className='SubmiButton' onClick={LoginFunction}>Continue</button>
                    </form>
                </center>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Link to="/SignIn">Sign in</Link>
                    </div>
                    <div className='col-lg-6'>
                        <Link to="/ForgotPassword">forgot password</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home