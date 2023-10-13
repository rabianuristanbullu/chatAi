import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const getAnswer = (prompt) => async (dispatch) => {
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "d4d2d3dfadmshf9dc48e96cfef32p105891jsneac5523a880e",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
  };

  const res = await axios.request(options);

  dispatch({
    type: ActionTypes.GET_ANSWER,
    payload: { prompt, answer: res.data.choices[0].message.content },
  });
};

export const getImage = (prompt) => async (dispatch) => {
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/images/generations",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "d4d2d3dfadmshf9dc48e96cfef32p105891jsneac5523a880e",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`,
  };

  const res = await axios.request(options);

  dispatch({
    type: ActionTypes.GET_IMAGE,
    payload: { prompt, answer: res.data.data },
  });
};

export const getDataStart = () => ({
  type: ActionTypes.GET_DATA_START,
  payload: true,
});
