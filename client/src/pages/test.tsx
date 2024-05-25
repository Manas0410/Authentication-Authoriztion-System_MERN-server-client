import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setdata("data came");
      console.log(res.data);
    });
  }, []);

  return <div>{data} WELCOME !!</div>;
};

export default Test;
