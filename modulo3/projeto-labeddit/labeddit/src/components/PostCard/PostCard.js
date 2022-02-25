import React, { useState } from "react";
import { Conteiner } from "./styled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useProtectedPage from "../../hooks/useProtectedPage";
import {  Card,  CardHeader,  CardContent,  CardActions,
Avatar,  IconButton, Typography,  Collapse} from "@material-ui/core";
import ComentForm from "../PostComents/ComentsForm";
import { PostExpandMore } from "./PostExpandeMore";

const PostCard = (props) => {
  useProtectedPage();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Conteiner>
      <Card onClick={props.onClick} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <Typography name="name" variant="body" color="secondary">
                {props.name[0]}
              </Typography>
            </Avatar>
          }
          action={
            <IconButton color="primary" aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.subheader}
        />
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
            <ExpandMoreIcon />
          </PostExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ComentForm id={props.id} />
        </Collapse>
      </Card>
    </Conteiner>
  );
};

export default PostCard;
