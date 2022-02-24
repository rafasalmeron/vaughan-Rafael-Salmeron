import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { ConteinerCards } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/cordinator";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const feeds = useRequestData([], `${BASE_URL}/posts`);
  console.log(feeds);

  const onClickCard = (id) => {
    goToPost(navigate, id);
  };

  const feedCards = feeds.map((feed) => {
    console.log(feed.username[0]);

    return (
      <ConteinerCards key={feed.id}>
        <PostCard
          id={feed.id}
          title={feed.title}
          name={feed.username}
          body={feed.body}
          subheader={feed.createdAt}
          // onClick={() => onClickCard(feed.id)}
        />

      </ConteinerCards>
      
    );
  });

  return feedCards;
};

export default FeedPage;
