import React, {useState} from "react";
import { FormComent, InputConteiner } from "./styled";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/UseForm";
import {createPost} from '../../services/posts'
import { Comentar } from "../PostCard/styled";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import PostComents from "../PostComents/PostComents";
import { CardContent } from "@material-ui/core";
import {createComment} from "../../services/posts";

const ComentForm = (props) => {
  const coments = useRequestData([], `${BASE_URL}/posts/${props.id}/comments`);
  const [form, onChange, clear] = useForm({ body: ''});
  const [isLoading, setIsLoading] = useState(false)
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, props.id, clear, setIsLoading)
  };

  return (
    <CardContent>
            <PostComents coments={coments} />
            <form onSubmit={onSubmitForm}>
            <Comentar>
              <TextField
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChange}
                label="Comentário"
                variant={"outlined"}
                margin={"normal"}
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                margin="normal"
              >
                {isLoading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  <>Comentar</>
                )}
              </Button>
              </Comentar>
            </form>
          </CardContent>
  );
};

export default ComentForm;