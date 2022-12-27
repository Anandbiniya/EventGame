import React, { useState, useEffect } from "react";
import "./games.css";

function Games() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/games");
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  function addToCart(product) {
    const data = JSON.stringify(product);
    fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {})
      .catch((err) => {
        console.log("err");
      });
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Games List</h1>
      <div className="container_box">
        {data.map((item, i) => (
          <div>
            <img src={item.imageUrl} className="images" />
            <h4 key={i}>{item.name}</h4>
            <p>{item.releaseYear}</p>
            <p>Rs.{item.price}</p>
            <button onClick={() => addToCart(item)} className="AddCart">
              Add to cart
            </button>
            <button className="RemoveCart">Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Games;
