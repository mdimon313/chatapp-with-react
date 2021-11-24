import React from "react";

export default function ChatText({ className, profile, message }) {
  return (
    <>
      <div className={`text ${className}`}>
        <div className="user">
          {/* <span>
            <img src={profile} alt="user-profile" />
          </span> */}
        </div>
        <p className="msg">{message}</p>
      </div>
    </>
  );
}
