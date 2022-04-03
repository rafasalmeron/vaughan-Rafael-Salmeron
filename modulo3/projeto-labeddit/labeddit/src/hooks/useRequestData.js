import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const handleData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("tokenLabeddit"),
        },
      })
      .then((res) => {
        setData(res.data);
        handleData();
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um erro, try again!");
      });
  };
  useEffect(() => {
    handleData();
  }, [url]);
  return data;
};

export default useRequestData;
