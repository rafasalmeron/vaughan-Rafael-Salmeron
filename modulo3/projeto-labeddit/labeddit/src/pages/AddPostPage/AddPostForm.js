import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

const AddPostForm = () => {
  const navigate = useNavigate();
    const [form, onChange, clear] = useForm({title: '', body: '', name: ''},  )
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <div>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={"Titulo"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"body"}
            value={form.body}
            onChange={() => null}
            label={"Post"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <Button
            color={"primary"}
            variant={"conteined"}
            type={"submit"}
            fullWidth
          >
            AddPost
          </Button>
        </div>
      </div>
    </form>
  );
};
