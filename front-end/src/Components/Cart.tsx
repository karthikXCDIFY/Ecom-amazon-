import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "../Cart.scss";

function Cart() {
  const [productData, setProductData] = useState<any>(null);
  const location = useLocation();

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

  return (
    <>
      <Header />
      <div className="product-container-cart">
        <div className="image-container-cart">
          {productData && (
            <div className="shopping-cart">
              <div className="top">
                <h1 className="shopping-cart-title">SHOPPING CART</h1>
                <div className="price-cart   ">
                  <p className="deselect-cart">All Items</p>

                  <p className="price-p">Price</p>
                </div>
              </div>

              <div className="product-card-cart">
                <img
                  className="cart-images"
                  src={productData.image_url}
                  alt={productData.alt_text}
                />
                <div className="cart-midle">
                  <h2 className="title-cart">{productData.title}</h2>
                  <h3 className="desc-cart">{productData.description}</h3>
                  <p className="stock">In stock</p>
                  <p className="quantity-cart">
                    Quantity:
                    <select className="select-cart">
                      <option>{productData.net_quantity}</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </p>
                  <p className="SIZE-CART">Size:M</p>
                  <p className="manu-cart">
                    Manufacturer:{productData.manufacturer}
                  </p>
                </div>
                <div className="cart-right">{productData.price}</div>
              </div>
            </div>
          )}
        </div>
        <div className="total-price">Total price(1 Items):{productData.price}</div>
      </div>
    </>
  );
}

export default Cart;
