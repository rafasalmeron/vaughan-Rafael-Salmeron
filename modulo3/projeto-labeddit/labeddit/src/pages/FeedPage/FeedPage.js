import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { ConteinerCards } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from '../../constants/urls'

const FeedPage = () => {
  useProtectedPage();
  const feeds = useRequestData([], `${BASE_URL}/posts`)
  console.log(feeds)

  const feedCards = feeds.map((feed)=>{
    return <ConteinerCards>
    <PostCard 
    key={feed.id}
    title={feed.title}
    image={feed.body}
    onClick={()=>null}      
    />
  </ConteinerCards>
  })
  return (
    feedCards
  );
};

export default FeedPage;