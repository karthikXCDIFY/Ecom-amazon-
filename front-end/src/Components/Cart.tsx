

// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
// import Header from "./Header";
// import "../Cart.scss";
// import Fotter from "./Fotter";
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

// function Cart() {
//  const [productData, setProductData] = useState([]);
//  const location = useLocation();
//  const [totalPrice, setTotalPrice] = useState(0);
//  const navigate = useNavigate();
//  const { id } = useParams();

//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/carts`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         // Initialize quantity for each product
//         const updatedData = data.map(product => ({ ...product, quantity: 1 }));
//         setProductData(updatedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//  }, []);

//  useEffect(() => {
//     // Calculate the total price for all items in the cart
//     const total = productData.reduce((acc, product) => acc + (product.price * product.quantity), 0);
//     setTotalPrice(total);
//  }, [productData]);

//  const deleteItem = async (productId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/carts/${productId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error("Failed to delete data");
//       }
//       // Filter out the deleted item from the productData state
//       const updatedProductData = productData.filter(product => product.id !== productId);
//       setProductData(updatedProductData);
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//  }

//  const handleQuantityChange = (event, productId) => {
//     const newQuantity = parseInt(event.target.value);
//     // Update the quantity for the specific product
//     const updatedProductData = productData.map(product => 
//       product.id === productId ? { ...product, quantity: newQuantity } : product
//     );
//     setProductData(updatedProductData);
//  };

//  return (
//     <>
//       <Header />
//       <div className="product-container-cart">
//         <div className="cart-banner">
//           <h1> Keep shopping </h1>
//         </div>
//         <div className="shopping-cart">
//           <div className="top">
//             <div className="price-cart">
//               <p className="deselect-cart">All Items</p>
//               <p className="price-p">Price</p>
//               <p className="delete">Delete</p>
//             </div>
//           </div>
//         </div>

//         {productData.map((product) => (
//           <div key={product.id} className="product-card-cart">
//             <img
//               className="cart-images"
//               src={`/${product.image_url}`}
//               alt={product.alt_text}
//             />
//             <div className="cart-midle">
//               <h2 className="title-cart">{product.title}</h2>
//               <h3 className="desc-cart">{product.description}</h3>
//               <p className="stock">In stock</p>
//               <p className="quantity-cart">
//                 Quantity:
//                 <select
//                  className="select-cart"
//                  value={product.quantity}
//                  onChange={(event) => handleQuantityChange(event, product.id)}
//                 >
//                  {[...Array(10).keys()].map((value) => (
//                     <option key={value} value={value + 1}>
//                       {value + 1}
//                     </option>
//                   ))}
//                 </select>
//               </p>
//               <p className="SIZE-CART">Size: {product.size}</p>
//               <p className="manu-cart">Manufacturer: {product.manufacturer}</p>
//             </div>
//             <div className="cart-right">{product.price * product.quantity}</div>
//             <div className="delete-cart">
//               <button onClick={() => deleteItem(product.id)} className="delete-btn">
//                 <DeleteForeverRoundedIcon/>
//               </button>
//             </div>
//           </div>
//         ))}

//         <div className="total-price">Total Price: {totalPrice}</div>
//         <br></br>
//       </div>
//       <div className="place-order">
//         <NavLink to={`/placeorders/${id}`}>
//           <button className="place-order-btn">Place Order</button>
//         </NavLink>
//       </div>
//       <Fotter />
//     </>
//  );
// }

// export default Cart;




import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import "../Cart.scss";
import Fotter from "./Fotter";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

function Cart() {
 const [productData, setProductData] =  useState<Product[]>([]);;
 const location = useLocation();
 const [totalPrice, setTotalPrice] = useState(0);
 const navigate = useNavigate();
 const { id } = useParams();
 interface Product {
  image_url: string;
  alt_text: string;
  title: string;
  discount: number;
  price: number;
  description: string;
  quantity: number;
  customer_reviews: string[];
  size: string;
  colour: string;
  manufacturer: string;
  country_of_origin:string;
  packer: string;
  item_weight:number;
 }
 const send = async () => {
  try {
     // Assuming you want to add all items in productData to the cart
     const cartdata = JSON.parse(localStorage.getItem("cart")) || [];
 
     // Check if the product is already in the cart
     //const isAlreadyInCart = cart.some((item) => item.id === productData.id);
 
    //  if (isAlreadyInCart) {
    //    alert("This item is already in the cart.");
    //  } else {
       // Assuming productData is a single product object
       cartdata.splice(productData);
       cartdata.push(productData);
       localStorage.setItem("cart", JSON.stringify(cartdata));
       alert("Added to Cart");
     }
    //}
     catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
   }
  };
 
 
 

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/carts`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Initialize quantity for each product
        const updatedData = data.map(product => ({ ...product, quantity: 1 }));
        setProductData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
 }, []);

 useEffect(() => {
    // Calculate the total price for all items in the cart
    const total = productData.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setTotalPrice(total);
 }, [productData]);

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
    } catch (error) {
      console.error("Error deleting data:", error);
    }
 }

 const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    // Update the quantity for the specific product
    const updatedProductData = productData.map(product => 
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setProductData(updatedProductData);
 };

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
              <p className="quantity-cart">
                Quantity:
                <select
                 className="select-cart"
                 value={product.quantity}
                 onChange={(event) => handleQuantityChange(event, product.id)}
                >
                 {[...Array(10).keys()].map((value) => (
                    <option key={value} value={value + 1}>
                      {value + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p className="SIZE-CART">Size: {product.size}</p>
              <p className="manu-cart">Manufacturer: {product.manufacturer}</p>
            </div>
            <div className="cart-right">{product.price * product.quantity} Rs</div>
            <div className="delete-cart">
              <button onClick={() => deleteItem(product.id)} className="delete-btn">
                <DeleteForeverRoundedIcon/>
              </button>
            </div>
          </div>
        ))}

        <div className="total-price">Total Price: {totalPrice}  Rs</div>
        <br></br>
      </div>
      <div className="place-order">
        <NavLink to={`/placeorders/${id}`}>
          <button className="place-order-btn " onClick={send}>Place Order</button>
        </NavLink>
      </div>
      <Fotter />
    </>
 );
}

export default Cart;
