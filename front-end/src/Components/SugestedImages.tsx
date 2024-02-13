import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../SuggestedImages.scss";

import Header from "./Header";
import Size from "./Size";
import Fotter from "./Fotter";

function SuggestedImages() {
  const [productData, setProductData] = useState<any>(null);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const id = extractIdFromLocation(location);
    fetchData(id);
  }, [location]);

  const extractIdFromLocation = (location: any) => {
    return location.state ? location.state.id : null;
  };

  const fetchData = async (id: string | null) => {
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
    nav("/cart", { state: { id: productData.id } }); // Navigate to Cart component and pass the ID
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
                {" "}
                {productData.customer_reviews}
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="select-size">SELECT SIZE</h3>
              <Size />
              <p className="price-strikethrough"> {100}</p>
              <p className="price">
                {productData.price}{" "}
                <span className="discount">({productData.discount}% OFF)</span>
              </p>

              <button className="add-to-bag" onClick={goToCart}>
                MOVE TO CART
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
