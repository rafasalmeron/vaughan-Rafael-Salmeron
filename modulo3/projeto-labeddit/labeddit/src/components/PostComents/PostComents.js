import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ComentsCard from "../ComentsCard/ComentsCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ConteinerCards } from "../../pages/FeedPage/styled";

const PostComents = ({coments}) => {
  useProtectedPage();

  console.log('COMENTARIO:', coments);
  const allComents = coments.map((coment) => {
    return (
      <ConteinerCards  key={coment.id}>
        <ComentsCard         
          name={coment.username}
          body={coment.body}
          subheader={coment.createdAt}
          id={coment.id}
        >
          <CardContent>
            <Typography body="body" variant="body2" color="secondary">
              {coment.body}
            </Typography>
          </CardContent>
        </ComentsCard>
      </ConteinerCards>
    );
  });
  return allComents;
};

export default PostComents;
