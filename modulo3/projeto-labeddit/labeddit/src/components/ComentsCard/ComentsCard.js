import * as React from "react";
import { Conteiner } from "./styled";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

const ComentsCard = (props) => {
  useProtectedPage();
  const navigate = useNavigate();
  console.log(props);
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
        </CardActions>
      </Card>
    </Conteiner>
  );
};

export default ComentsCard;
