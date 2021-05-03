import React from 'react';
import { AiFillSetting, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { GrApps } from "react-icons/gr";

import "../style/header.css";
import { useStateValue,StateContext } from "../context/StateProvider";

import   logo from "../img/logo.png"
import { Avatar } from '@material-ui/core';
import {auth} from '../firebase';

function Header() {
    const [{user},dispatch]=useStateValue(StateContext)
    const logOut=()=>{
        auth.signOut();
        dispatch({
            type:"SET_USER",
            user:null
        })
    }



    return (

<>
<div className="header">
<div className="header_left">
<AiOutlineMenu/>
<img src={logo} alt="" />
</div>


<div className="header_middle">
    <div className="header_middle_search">
<AiOutlineSearch/>
<input placeholder="Search Mail"/>
<MdExpandMore/>
    </div>
</div>

<div className="header_right">
      

<BiHelpCircle className="header_options" />
<AiFillSetting className="header_options"/>
<GrApps className="header_options"/>
<Avatar src={user.photoURL} onClick={logOut}/>
    
</div>


</div>



</>

        )
}

export default Header
