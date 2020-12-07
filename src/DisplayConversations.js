import React from "react";
import Conversation from "./Conversation";

const DisplayConversations = ({ info, filter }) => {
  const filteredList = info
    .filter((item) => filter === "" || item.name.toUpperCase().includes(filter))
    .map((item) => {
      const { id, name, email, profile } = item;
      return (
        <Conversation key={id} name={name} email={email} profile={profile} />
      );
    });
  return <div className="disp">{filteredList}</div>;
};

export default DisplayConversations;
