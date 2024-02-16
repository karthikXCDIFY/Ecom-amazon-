import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import "../Cart.scss";
import Fotter from "./Fotter";

function Cart() {
  const [productData, setProductData] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const id = extractIdFromLocation(location);
    fetchData(id);
    const price=extractIdFromLocation(location);
  }, [location]);

  useEffect(() => {
    if (productData && !isNaN(productData.price)) {
      setTotalPrice(productData.price * quantity);
    }
  }, [quantity, productData]);

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

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    let price = productData.price.replace("Rs ", "");
    // console.log(price);
    // console.log(parseInt(price) + newQuantity);
    if (productData) {
      setTotalPrice(parseInt(price) * newQuantity);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }
  function placeOrder(){
   
   
    navigate("/orders")
   
  }

  return (
    <>
      <Header />
      <div className="product-container-cart">
        <div className="image-container-cart">
          {productData && (
            <div className="shopping-cart">
              <div className="top">
                
                <div className="price-cart">
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
                    <select
                      className="select-cart"
                      value={quantity}
                      onChange={handleQuantityChange}
                    >
                      {[...Array(10).keys()].map((value) => (
                        <option key={value} value={value + 1}>
                          {value + 1}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p className="SIZE-CART">Size:M</p>
                  <p className="manu-cart">
                    Manufacturer:{productData.manufacturer}
                  </p>
                </div >
                <div className="cart-right">{productData.price}</div>
              </div>
            </div>
          )}
        </div>
        <div className="total-price">
          Total price({quantity} Items): {totalPrice}
        </div>
      </div>
      <div className="place-order">
        <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
      </div>
    </>
  );
}

export default Cart;
