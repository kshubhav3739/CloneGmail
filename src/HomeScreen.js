import React from "react";
import Header from "./component/Header";
import Index from "./component/Index";
import Sidebar from "./component/Sidebar";
import "./style/Sidebar.css";

function HomeScreen() {
  return (
    <>

      <Header />
      <div className="mail_body">
        <Sidebar />
        <Index />
      </div>
      
    </>
  );
}

export default HomeScreen;
