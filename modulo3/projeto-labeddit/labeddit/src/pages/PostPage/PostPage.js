import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import ComentsCard from "../../components/ComentsCard/ComentsCard";
import PostCard from "../../components/PostCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ConteinerCards } from "../FeedPage/styled";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);

  console.log(post);
  const coments = post.map((coment) => {
    return (
      <ConteinerCards>
        <ComentsCard
          key={coment.id}
          name={coment.username}
          body={coment.body}
          subheader={coment.createdAt}
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
  return coments;
};

export default PostPage;
