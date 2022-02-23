import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/cordinator";

export const login = (body, clear, navigate, setLogin_logout) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("tokenLabeddit", res.data.token);
      clear();
      goToFeed(navigate)
      setLogin_logout('Logout')
    })
    .catch((err) => alert(`Erro ao tentar logar. ${err.response.data.message}`));
};

export const signUp = (body, clear, navigate, setLogin_logout) => {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("tokenLabeddit", res.data.token);
        clear();
        goToFeed(navigate)
        setLogin_logout('Logout')
      })
      .catch((err) => alert(`Erro ao tentar logar. ${err.response.data.message}`));
  };