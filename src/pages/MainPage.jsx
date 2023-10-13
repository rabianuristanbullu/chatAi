import React, { useState } from "react";
import ChatAi from "../components/ChatAi";
import ImageAi from "../components/ImageAi";

const MainPage = () => {
  const [isChatMode, setIsChatMode] = useState(true);
  const handleToggleMode = () => {
    setIsChatMode(!isChatMode);
  };
  return (
    <div className="chat-bot">
      <h1>Hayal Et</h1>
      <button onClick={handleToggleMode}>
        {isChatMode ? "Resim İste" : "Bir Şey Sor"}
      </button>
      {isChatMode ? <ChatAi /> : <ImageAi />}
    </div>
  );
};

export default MainPage;
