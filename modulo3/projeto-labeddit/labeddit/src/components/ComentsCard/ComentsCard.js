import * as React from "react";
import { BoxUser, Conteiner } from "./styled";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDownIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpwardOutlined";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Box } from "@material-ui/core";

const ComentsCard = (props) => {
  useProtectedPage();
  const handleUpVote = () => {
      props.handleCommentVote(props.coment.id, 1)
  }
  const handleDownVote = () => {
      props.handleCommentVote(props.coment.id, -1)
  }
  return (
    <Conteiner>
      <Card>
        <Box sx={{ bgcolor: "#f4f1e8" }}>
          <BoxUser>
            <CardHeader
              avatar={
                <Avatar
                  src={`https://picsum.photos/200/300`}
                  aria-label="recipe"
                ></Avatar>
              }
              title={<strong>{props.coment.username}</strong>}
              subheader={<>{}</>}
            />
          </BoxUser>
        </Box>
        <Box sx={{ bgcolor: "white" }}>
          <CardContent>
            <Typography body="body" variant="body2" color="secondary">
              {props.coment.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton  onClick={handleUpVote}>
              <ArrowUpwardIcon color={props.coment.userVote === 1 ? "primary" : "disabled"}/>
            </IconButton>
            <p>{props.coment.voteSum}</p>
            <IconButton  onClick={handleDownVote}>
              <ArrowDownIcon color={props.coment.userVote === -1 ? "secondary" : "disabled"}/>
            </IconButton>
            
          </CardActions>
        </Box>
      </Card>
    </Conteiner>
  );
};

export default ComentsCard;
