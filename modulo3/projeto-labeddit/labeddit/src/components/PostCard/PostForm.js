import React, { useState } from "react";
import { FormConteiner, InputConteiner, TextContent } from "./styled";
import {
  Button,
  TextField,
  CircularProgress,
  Input,
  Box,
} from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import { createPost } from "../../services/posts";
import { StylesContext } from "@material-ui/styles";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCard from "./PostCard";

const PostForm = () => {
  const posts = useRequestData([], `${BASE_URL}/posts`);
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, setIsLoading);
  };

  return (
    <InputConteiner>
      <form onSubmit={onSubmitForm}>
      <FormConteiner>
      <TextContent>
        <TextField
          type={"text"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          label="Titulo"
          variant={"outlined"}
          margin={"normal"}
          required
        />
        
          
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
  );
};

export default PostForm;
