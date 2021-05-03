import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../style/inbox.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CachedIcon from "@material-ui/icons/Cached";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Emails from "./Emails";

function Index() {
  return (
      <div className="inbox">
    <div className="mail_body_header">
      <div className="left_icon">
        <div className="checkbox">
          <CheckBoxOutlineBlankIcon />
          <ArrowDropDownIcon />
        </div>
        <CachedIcon />
        <MoreVertIcon />
      </div>
      <div className="right_icon">
        <span>1-50 12,21 </span>
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </div>
    </div>
<div className="mail_body_tabs">
    <div className="tabs_inner active_tab">
        <InboxIcon/>
        <span>Primary</span>
    </div>
    <div className="tabs_inner">
        <GroupIcon/>
        <span>Social</span>
    </div>
    <div className="tabs_inner">
        <LocalOfferIcon/>
        <span>Promotion</span>
    </div>


</div>
    <Emails/>
    <Emails/>
    <Emails/>
    <Emails/>
    <Emails/>




    </div>

)

  }
export default Index;
