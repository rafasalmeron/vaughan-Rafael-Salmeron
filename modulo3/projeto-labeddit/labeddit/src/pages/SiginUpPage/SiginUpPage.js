import React from "react";
import { Logo, ScreenConteiner, SiginUpButton } from "./styled";
import logo from "../../assets/logo_new2-0.png";
import SiginUpForm from "./SiginUpForm";
import useUnProtectedPage from "../../hooks/useunprotectedPage";
import { Button } from "@material-ui/core";
import { goToLogin } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";

const SiginUpPage = ({setLogin_logout}) => {
  useUnProtectedPage()
  const navigate = useNavigate();
  return (
    <ScreenConteiner>
      <Logo src={logo} />
      <SiginUpForm setLogin_logout={setLogin_logout}/>
      <SiginUpButton>
        <Button
              onClick={() => goToLogin(navigate)}
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              margin="normal"
            >
              voltar
            </Button>
        </SiginUpButton>
    </ScreenConteiner>
  );
};

export default SiginUpPage;
