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
import useProtectedPage from "../../hooks/useProtectedPage";
import { Box } from "@material-ui/core";

const ComentsCard = (props) => {
  useProtectedPage();
  console.log(props);
  return (
    <Conteiner>
      <Card>
        <Box sx={{ bgcolor: '#f4f1e8' }}>
        <CardHeader
          avatar={
            <Avatar src={`https://picsum.photos/200/300`} aria-label="recipe">
            </Avatar>
          }
          action={
            <IconButton color="primary" aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={'Enviado por', <strong>{props.name}</strong>}
          subheader={props.subheader}
        />
        </Box>
        <Box sx={{ bgcolor: 'lightgray' }}>
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
        </Box>
      </Card>
    </Conteiner>
  );
};

export default ComentsCard;
