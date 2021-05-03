import React, { useState } from 'react'
import { auth,provider } from './firebase';
import logo from './img/logo.png'
import "./style/login.css";
import {StateContext, useStateValue} from "./context/StateProvider"

function Login() {
    const [state,dispacth]=useStateValue(StateContext)
const loginwithgmail=()=>{
    auth.signInWithPopup(provider).then(result=>{
        console.log(result.user);
dispacth({
    type:'SET_USER',
    user:result.user
})
    });
}
    return (
        <div className="login_wrapper">
            <div className="loginpage">
                <img src={logo}  />
<button className="gmail_login" onClick={loginwithgmail}>Login With Gmail</button>
            </div>
        </div>
    )
}

export default Login
