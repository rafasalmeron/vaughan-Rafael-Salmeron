import React from "react";
import { InputConteiner } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";

const SiginUpForm = ({setLogin_logout}) => {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate, setLogin_logout)
  };

  return (
    <form onSubmit={onSubmitForm}>
      <InputConteiner>
        <TextField
          type={"name"}
          name={"username"}
          value={form.name}
          onChange={onChange}
          label="Nome"
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
        />
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
          Cria Conta
        </Button>
      </InputConteiner>
    </form>
  );
};

export default SiginUpForm;
