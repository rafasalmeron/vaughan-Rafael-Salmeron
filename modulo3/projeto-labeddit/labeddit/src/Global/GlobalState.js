import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [cart, setCart] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [orderStatus , setOrderStatus] = useState([])

  const [restaurantId, setRestaurantId] = useState("")

  console.log("ESTADO GLOBAL CART", cart)


  const createPost = (body, clear, setIsLoading) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
          Authorization: localStorage.getItem('tokenLabeddit')
      }
  })
  .then((res) =>{
    clear()
    setPosts()
    // setIsLoading(false)
  })
  .catch((err) => {
    // setIsLoading(false)

    alert(err.response.message)
  })
}


  const states = {posts}
  const sets = {setPosts}

  return (
    <GlobalStateContext.Provider value={{ states, sets }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
// address:
// category:
// deliveryTime:
// description:
// id:
// logoUrl:
// name:
// shipping:
