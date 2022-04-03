import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("tokenLabeddit"),
      },
    })
    .then((res) => {
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.message);
    });
};
export const createComment = (body, id, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("tokenLabeddit"),
      },
    })
    .then((res) => {
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.message);
    });
};

export const createPostVote = (body, id, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem("tokenLabeddit"),
      },
    })
    .then((res) => {
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.message);
    });
};
