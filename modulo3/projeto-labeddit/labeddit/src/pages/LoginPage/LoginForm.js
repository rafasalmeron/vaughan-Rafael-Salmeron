import React from "react";
import { InputConteiner } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import {login} from '../../services/users'
import { useNavigate } from "react-router-dom";

const LoginForm = ({setLogin_logout}) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate()
  console.log(form)
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setLogin_logout)
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
          variant={"outlined"}
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
          variant="outlined"
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
          Login
        </Button>
      </form>
    </InputConteiner>
  );
};

export default LoginForm;
