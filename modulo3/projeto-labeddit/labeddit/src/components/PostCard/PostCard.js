import React, { useState } from "react";
import { Conteiner } from "./styled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Collapse,
  Box,
} from "@material-ui/core";
import ComentForm from "../PostComents/ComentsForm";
import { PostExpandMore } from "./PostExpandeMore";

const PostCard = (props) => {
  useProtectedPage();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props);
  return (
    <Conteiner>
      <Card>
        <Box sx={{ bgcolor: "#f4f1e8" }}>
          <CardHeader
            avatar={<Avatar src={`https://picsum.photos/200/300`}></Avatar>}
            action={
              <IconButton color="primary" aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={("Enviado por", (<strong>{props.name}</strong>))}
            subheader={<>{props.subheader}</>}
          />
        </Box>
        <Box sx={{ bgcolor: "lightgray" }}>
          <CardContent>
            <Typography body="body" variant="body2" color="secondary">
              {props.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton color="primary" aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share">
              <ShareIcon />
            </IconButton>
            <PostExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Typography body="body" variant="body2" color="primary">
                Comentar
              </Typography>
            </PostExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ComentForm id={props.id} />
          </Collapse>
        </Box>
      </Card>
    </Conteiner>
  );
};

export default PostCard;
