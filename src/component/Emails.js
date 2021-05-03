import LabelImportantIcon  from "@material-ui/icons/LabelImportant";
import StarBorderIcon  from "@material-ui/icons/StarBorder";
import CheckBoxOutlineBlankIcon  from "@material-ui/icons/CheckBoxOutlineBlank";
import "../style/inbox.css"

import React from "react";

export default function Emails() {
  return (
    <div className="email">
      <div className="email_left">

<CheckBoxOutlineBlankIcon/>
<StarBorderIcon/>
<LabelImportantIcon/>

<span>MPadosi Thakur </span>
      </div>

      <div className="email_middle">
<span>Hi How Are You</span>

      </div>
      <div className="email_right">
          Sun 20 May 2001 09:26 
      </div>
    </div>
  );
}
