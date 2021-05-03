import React from 'react'
import Header from './component/Header'
import Sent from './component/Sent';
import Sidebar from "./component/Sidebar";
import "./style/Sidebar.css";


function SentScreen() {
    return (
        <>
<Header/>
<div className="mail_body">
<Sidebar/>
<Sent/>
</div>

        </>
    )
}

export default SentScreen;
