
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "../Cart.scss";
import Fotter from "./Fotter";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function Cart() {
 const [productData, setProductData] = useState([]);
 const location = useLocation();
 const navigate = useNavigate();
 const { id } = useParams();

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/carts`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
 }, []);

 const deleteItem = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/carts/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      // Filter out the deleted item from the productData state
      const updatedProductData = productData.filter(product => product.id !== productId);
      setProductData(updatedProductData);
      //alert("Delete Successful");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
 }

 return (
    <>
      <Header />
      <div className="product-container-cart">
        <div className="cart-banner">
          <h1> Keep shopping </h1>
        </div>
        <div className="shopping-cart">
          <div className="top">
            <div className="price-cart">
              <p className="deselect-cart">All Items</p>
              <p className="price-p">Price</p>
              <p className="delete">Delete</p>
            </div>
          </div>
        </div>

        {productData.map((product) => (
          <div key={product.id} className="product-card-cart">
            <img
              className="cart-images"
              src={`/${product.image_url}`}
              alt={product.alt_text}
            />
            <div className="cart-midle">
              <h2 className="title-cart">{product.title}</h2>
              <h3 className="desc-cart">{product.description}</h3>
              <p className="stock">In stock</p>
              <p className="SIZE-CART">Size: {product.size}</p>
              <p className="manu-cart">Manufacturer: {product.manufacturer}</p>
            </div>
            <div className="cart-right">{product.price}</div>
            <div className="delete-cart">
              <button onClick={() => deleteItem(product.id)} className="delete-btn">
                <DeleteForeverRoundedIcon/>
              </button>
            </div>
          </div>
        ))}

        <br></br>
      </div>
      <div className="place-order">
        <NavLink to={`/placeorders/${id}`}>
          <button className="place-order-btn">Place Order</button>
        </NavLink>
      </div>
      <Fotter />
    </>
 );
}

export default Cart;
