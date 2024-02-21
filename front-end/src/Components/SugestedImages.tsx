
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../SuggestedImages.scss";

import Header from "./Header";
import Size from "./Size";
import Fotter from "./Fotter";

function SuggestedImages() {
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M"); // Default size M
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const id = extractIdFromLocation(location);
    fetchData(id);
  }, [location]);

  const extractIdFromLocation = (location) => {
    return location.state ? location.state.id : null;
  };

  const fetchData = async (id) => {
    try {
      if (!id) return;
      const response = await fetch(`http://localhost:3000/categories/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const goToCart = () => {
    nav("/cart", {
      state: { 
        id: productData.id,
        price: productData.price,
        size: selectedSize // Pass selected size to cart page
      }
    });
  };

  const finalPrice = () => {
    let price = productData.price.replace("Rs ", "");
    let discount = productData.discount.replace("%", "");
    let r = price - (price * discount) / 100;

    return r;
  };

  return (
    <>
      <Header />
      <div>
        <div className="product-container">
          <div className="image-container">
            {productData && (
              <div className="product-card">
                <h1 className="Clothing-Accessories">Clothing & Accessories</h1>
                <img
                  className="main3-images"
                  src={productData.image_url}
                  alt={"title"}
                />
                <img
                  className="i2-images"
                  src={productData.image_url}
                  alt={"title"}
                />
              </div>
            )}
          </div>

          <div className="product-details">
            <div className="text">
              <h2 className="name">{productData.title}</h2>
              <div className="descr">{productData.description}</div>

              <div>
                {productData.customer_reviews}
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="select-size">SELECT SIZE</h3>
              <Size setSelectedSize={setSelectedSize} /> {/* Pass setSelectedSize as props */}
              <p className="price-strikethrough"> {productData.price}</p>
              <p className="price">
              Rs  {finalPrice()}{" "}
                <span className="discount">({productData.discount}% OFF)</span>
              </p>

              <button className="add-to-bag" onClick={goToCart}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default SuggestedImages;
