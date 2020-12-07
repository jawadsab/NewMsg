import React, { useState } from "react";

import Header from "./Header";
import TextInput from "./TextInput";
import DisplayConversations from "./DisplayConversations";

import info from "./info";

const App = () => {
  const [data, setData] = useState(info);
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value.toUpperCase());
  };
  return (
    <div className="container">
      <Header />
      <TextInput handleChange={handleChange} />
      <p className="subtitle">Recent Conversations</p>
      <DisplayConversations info={data} filter={filter} />
    </div>
  );
};

export default App;
