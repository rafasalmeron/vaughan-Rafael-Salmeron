import React, { useState } from "react";
import { InputConteiner } from "./styled";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import { createPost } from "../../services/posts";

const PostForm = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
    <InputConteiner>
      <form onSubmit={onSubmitForm}>
        <TextField
          type={"text"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          label="Title"
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          type={"text"}
          name={"body"}
          value={form.body}
          onChange={onChange}
          label="Texto"
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
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Postar</>
          )}
        </Button>
      </form>
    </InputConteiner>
  );
};

export default PostForm;
