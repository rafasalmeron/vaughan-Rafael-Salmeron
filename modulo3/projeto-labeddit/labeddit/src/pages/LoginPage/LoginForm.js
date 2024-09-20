import React, { useState } from "react";
import { InputConteiner } from "./styled";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import {login} from '../../services/users'
import { useNavigate } from "react-router-dom";

const LoginForm = ({setLogin_logout}) => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)


  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setLogin_logout, setIsLoading)
  };

  return (
    <InputConteiner>
      <form onSubmit={onSubmitForm}>
        <TextField
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          label="E-mail"
          variant={"filled"}
          
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          label="Senha"
          variant="filled"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
        >
          {isLoading ? <CircularProgress
            color="inherit" size={24}
          /> : <>Login</>}
        </Button>
      </form>
    </InputConteiner>
  );
};

export default LoginForm;
