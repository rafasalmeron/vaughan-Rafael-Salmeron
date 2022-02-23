import React from "react";
import { InputConteiner, Logo, ScreenConteiner, SiginUpButton } from "./styled";
import logo from "../../assets/logo_new2-0.png";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSiginUp } from "../../routes/cordinator";
import useUnProtectedPage from "../../hooks/useunprotectedPage";

const LoginPage = ({setLogin_logout}) => {
  useUnProtectedPage()  
  const navigate = useNavigate();
  return (
    <ScreenConteiner>
      <Logo src={logo} />
      <LoginForm setLogin_logout={setLogin_logout}/>
      <InputConteiner>
        <SiginUpButton>
          <Button
            onClick={() => goToSiginUp(navigate)}
            type="submit"
            fullWidth
            variant="text"
            color="primary"
            margin="normal"
          >
            Cadastre-se
          </Button>
        </SiginUpButton>
      </InputConteiner>
    </ScreenConteiner>
  );
};

export default LoginPage;
