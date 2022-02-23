import React from "react";
import { Logo, ScreenConteiner } from "./styled";
import logo from "../../assets/logo.png";
import SiginUpForm from "./SiginUpForm";
import useUnProtectedPage from "../../hooks/useunprotectedPage";

const SiginUpPage = ({setLogin_logout}) => {
  useUnProtectedPage()
  return (
    <ScreenConteiner>
      <Logo src={logo} />
      <SiginUpForm setLogin_logout={setLogin_logout}/>
    </ScreenConteiner>
  );
};

export default SiginUpPage;
