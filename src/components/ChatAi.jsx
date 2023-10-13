import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getDataStart } from "../app/actions/chatActions";

const ChatAi = () => {
  const state = useSelector((state) => state.chatState);
  const dispatch = useDispatch();

  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    dispatch(getDataStart());

    dispatch(getAnswer(prompt));
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="chat">
      <div className="list">
        {state.chatAi.map((message) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <p className="answer">{message.answer}</p>
          </>
        ))}

        {state.isLoading && <p>Loading....</p>}
      </div>
      <div className="form">
        <input
          placeholder="yapay zekadan bir şey isteyin"
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};

export default ChatAi;
