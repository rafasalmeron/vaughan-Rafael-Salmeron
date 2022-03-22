import React, { useState } from "react";
import { FormConteiner, InputConteiner, TextContent } from "./styled";
import { Button, TextField, CircularProgress, Input, Box } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import { createPost } from "../../services/posts";
import { StylesContext } from "@material-ui/styles";

const PostForm = () => {
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,},
      }}
      noValidate
      autoComplete="off"
    >
    <InputConteiner>
      <form onSubmit={onSubmitForm}>
        {/* <TextField
          type={"text"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          label="Titulo"
          variant={"outlined"}
          margin={"normal"}
          required
        /> */}
        <FormConteiner>
        <TextContent>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
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
        </TextContent>
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
        </FormConteiner>
      </form>
    </InputConteiner>
    </Box>
  );
};

export default PostForm;
