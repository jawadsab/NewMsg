import React from "react";

const Conversation = ({ name, email, profile }) => {
  return (
    <div className="conversation-container">
      <div className="profile-info">
        <img className="profile" src={profile} alt="null" />
        <div className="details">
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
      <input className="check" type="checkbox" />
    </div>
  );
};

export default Conversation;
