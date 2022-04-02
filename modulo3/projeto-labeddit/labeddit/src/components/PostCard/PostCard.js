import React, { useState } from "react";
import { Conteiner, Votes } from "./styled";
import ArrowDownIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpwardOutlined";
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
      <Votes>
        <IconButton color="primary" aria-label="add to favorites">
           <ArrowUpwardIcon />
        </IconButton>
        <p>{props.post.voteSum}</p>
        <IconButton color="primary" aria-label="share">
        <ArrowDownIcon />
        </IconButton>
        
      </Votes>
      
      <Card>
        <Box sx={{ bgcolor: "#f4f1e8" }}>
          <CardHeader
            avatar={<Avatar src={`https://picsum.photos/200/300`}></Avatar>}
            // action={
            //   <CardActions disableSpacing>
            //     <IconButton  color="primary" aria-label="add to favorites">
            //       <ArrowDownIcon />
            //     </IconButton>
            //     <p>{props.post.voteSum}</p>
            //     <IconButton color="primary" aria-label="share">
            //       <ArrowUpwardIcon />
            //     </IconButton>
            //   </CardActions>
            // }
            title={("Enviado por", (<strong>{props.post.title}</strong>))}
            subheader={<>{`${props.post.username}`}</>}
          />
        </Box>
        <Box sx={{ bgcolor: "lightgray" }}>
          <CardContent>
            <Typography body="body" variant="body2" color="secondary">
              {props.post.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
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
            <ComentForm id={props.post.id} />
          </Collapse>
        </Box>
      </Card>
    </Conteiner>
  );
};

export default PostCard;
