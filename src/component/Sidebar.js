
import React from 'react'
import { AiFillCaretDown, AiFillStar, AiOutlineInbox, AiOutlinePlus, AiOutlineSend } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { MdDrafts, MdWatchLater } from 'react-icons/md';
import { FaFacebookMessenger, FaKeyboard, FaTrash } from 'react-icons/fa';
import { BiListUl,BiVideo } from 'react-icons/bi';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useStateValue,StateContext } from "../context/StateProvider";
import { Avatar } from '@material-ui/core';


function Sidebar() {
    const [{user}, dispatch]=useStateValue(StateContext);

    return (
        <div>
            <div className="sidebar">
                <div className="sidebar_composeBtn">
                    <GrAdd />
                    <span> Compose </span>
                </div>
                <div className="sidebar_options">
                    <div className="option option_active">
                       <Link exact to="/">
                        <AiOutlineInbox />
                        <span> Inbox </span>
</Link>

                    </div>

                    <div className="option">
                        <AiFillStar />
                        <span> Starred </span>
                    </div>

                    <div className="option">
                        <MdWatchLater />
                        <span> Snoozed </span>

                    </div>

                    <div className="option">
                        <FaFacebookMessenger />
                        <span> Important </span>
                    </div>

                    <div className="option">
<Link to="/sent">
                        <AiOutlineSend />
                        <span> Sent </span>
</Link>
                    </div>

                    <div className="option">
                        < MdDrafts />
                        <span> Draft  </span>
                    </div>

                    <div className="option">
                        <BiListUl />
                        <span> Categories </span>
                    </div>

                    <div className="option">
                        <FaTrash />
                        <span> Map/ Trash </span>
                    </div>



                </div>


            </div>

            <div className="sidebar_options">
                <h4>Meet</h4>
                <div className="option">
                    <BiVideo/>
                    <span> Join Meeting </span>
                </div>
                <div className="option">
                    <FaKeyboard />
                    <span> New Meeting </span>
                </div>
            </div>


            <div className="sidebar_options">
                <h4>Hangout</h4>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <Avatar src={user.photoURL} />
                        <span> {user.displayName}</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <AccountCircleIcon />
                        <span>diozesk singh</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <AccountCircleIcon />
                        <span>meskolvaisita singh</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
