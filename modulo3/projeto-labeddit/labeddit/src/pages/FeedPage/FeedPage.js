import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { ConteinerCards } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PostForm from "../../components/PostCard/PostForm";
import Loading from "../../components/Loading/Loading";
import { createPostVote } from "../../services/posts";
import axios from "axios";

const FeedPage = () => {
  const posts = useRequestData([], `${BASE_URL}/posts`);
  useProtectedPage();
  
  const feedCards = posts.map((feed) => {
    return (
      <ConteinerCards key={feed.id}>
        <PostCard post={feed} handleVotePost={createPostVote}/>
      </ConteinerCards>
    );
  });

  return (
    <div>
      <PostForm />
      {feedCards.length > 0 ? feedCards : <Loading />}
    </div>
  );
};

export default FeedPage;
