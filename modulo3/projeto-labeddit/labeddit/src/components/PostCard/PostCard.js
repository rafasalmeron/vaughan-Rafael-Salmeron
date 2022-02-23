import * as React from "react";
import { Conteiner } from "./styled";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { primarycolor } from "../../constants/colors";
import testIMG from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/cordinator";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostCard = (props) => {
    useProtectedPage();
    const navigate = useNavigate();
  return (
    <Conteiner>
      <Card
      onClick={props.onClick} 
      sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar  sx={{ bgcolor: primarycolor }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton color="primary" aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader="September 14, 2016"

        />
        <CardMedia
          component="img"
          height="150"
          width='100'
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="secondary">
            {props.description}
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

export default PostCard;
