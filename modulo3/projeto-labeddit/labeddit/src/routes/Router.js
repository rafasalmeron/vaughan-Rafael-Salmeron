import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SiginUpPage from "../pages/SiginUpPage/SiginUpPage";

const Router = ({setLogin_logout}) => {
  return (
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage setLogin_logout={setLogin_logout}/>} />
        <Route path="/cadastro" element={<SiginUpPage setLogin_logout={setLogin_logout}/>} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
  );
};

export default Router;
