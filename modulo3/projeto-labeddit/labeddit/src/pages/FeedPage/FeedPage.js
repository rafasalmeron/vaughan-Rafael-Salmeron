import React, { useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { ConteinerCards } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostForm from "../../components/PostCard/PostForm";
import Loading from "../../components/Loading/Loading";

const FeedPage = () => {
  useProtectedPage();
  const feeds = useRequestData([], `${BASE_URL}/posts`);
  console.log(feeds);

  const feedCards = feeds.map((feed) => {
    console.log(feed);

    return (
      <ConteinerCards key={feed.id}>
        <PostCard
          post={feed}
        />
      </ConteinerCards>
      
    );
  });

  return (
  <div>
    <PostForm />
    {feedCards.length > 0 ? feedCards : <Loading /> }
  </div>
  )
  
  
};

export default FeedPage;
