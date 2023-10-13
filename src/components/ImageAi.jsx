import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStart, getImage } from "../app/actions/chatActions";

const ImageAi = () => {
  const [prompt, setPrompt] = useState("");
  const state = useSelector((state) => state.chatState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getDataStart());

    dispatch(getImage(prompt));
  };
  console.log(state.imageAi);

  return (
    <div className="chat">
      <div className="list">
        {state.imageAi.map((message) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <img src={message.answer[0].url} className="answer image-answer" />
            <img src={message.answer[1].url} className="answer image-answer" />
          </>
        ))}

        {state.isLoading && <p>Loading....</p>}
      </div>
      <div className="form">
        <input
          placeholder="yapay zekadan resim isteyin"
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};

export default ImageAi;
