import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon,LockClosedIcon} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const CustomerHeader = ({ chat }) => {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    console.log("logout");
     window.location.reload(); 
  };

  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}

      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-logout" onClick={handleLogout}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>

      </div>
      
    </div>
  );
};

export default CustomerHeader;
