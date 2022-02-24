import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import ComentsCard from "../ComentsCard/ComentsCard";
import PostCard from "../PostCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ConteinerCards } from "../../pages/FeedPage/styled";

const PostPage = ({coments}) => {
  useProtectedPage();
//   const params = useParams();
//   const post = useRequestData([], `${BASE_URL}/posts/${coments.id}/comments`);

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

export default PostPage;
