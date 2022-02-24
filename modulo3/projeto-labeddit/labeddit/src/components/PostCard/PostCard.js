import * as React from "react";
import { Conteiner } from "./styled";
import styled from "@material-ui/styles/styled";
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
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/cordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import PostPage from "../PostComents/PostComents";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = (props) => {
  const coments = useRequestData([], `${BASE_URL}/posts/${props.id}/comments`);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
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

        {/* <CardMedia
          component="img"
          height="150"
          width='100'
          image={props.image}
          alt={props.title}
        /> */}
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
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>aaaa
            <PostPage
              coments={coments}
            />
            
          </CardContent>
        </Collapse>
      </Card>
    </Conteiner>
  );
};

export default PostCard;
