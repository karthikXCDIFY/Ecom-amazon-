
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "../Cart.scss";
import Fotter from "./Fotter";

function Cart() {
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M"); // Initialize with default size M
  const location = useLocation();
  const navigate = useNavigate();
const { id ,selected} = useParams();


console.log(`size is ${selected}`)
  
  useEffect(() => {
    // productData.price= productData.price.replace("Rs ", "");
    //let price = isNaN(.price.replace("Rs ", ""));
    if (productData && !isNaN(productData.price)) {
      setTotalPrice(productData.price * quantity);
    } else if (productData && isNaN(productData.price)) {
      console.error("Product price is not valid:", productData.price);
    }
  }, [quantity, productData]);

 
  const fetchData = async (id) => {
    try {
      if (!id) return;
      const response = await fetch(`http://localhost:3000/categories/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProductData(data);
      setSelectedSize(location.state.size); // Set selected size from location state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);
  


  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    if (productData && !isNaN(productData.price)) {
      setTotalPrice(productData.price * newQuantity);
    }
  };
  

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
     
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
                  src={`/${productData.image_url}`} 
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
                  <p className="SIZE-CART">Size: {selected}</p>{" "}
                  {/* Display selected size */}
                  <p className="manu-cart">
                    Manufacturer:{productData.manufacturer}
                  </p>
                </div>
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
        <NavLink to={`/placeorders/${productData.id}`}>
          <button className="place-order-btn">Place Order</button>
        </NavLink>
      </div>
      <Fotter/>
    </>
  );
}

export default Cart;
