// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../SuggestedImages.scss";

// import Header from "./Header";

// function SuggestedImages() {
//   const [productData, setProductData] = useState<any>(null);
//   const location = useLocation();
//   const nav = useNavigate();

//   useEffect(() => {
//     const id = extractIdFromLocation(location);
//     fetchData(id);
//   }, [location]);

//   const extractIdFromLocation = (location: any) => {
//     return location.state ? location.state.id : null;
//   };

//   const fetchData = async (id: string | null) => {
//     try {
//       if (!id) return;
//       const response = await fetch(`http://localhost:3000/categories/${id}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setProductData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   if (!productData) {
//     return <div>Loading...</div>;
//   }

//   const goToCart = () => {
//     nav("/cart", { state: { id: productData.id } }); // Navigate to Cart component and pass the ID
//   };

//   return (
//     <>
//       <Header />
//       <div className="product-container">
//         <div className="image-container">
//           {productData && (
//             <div className="product-card">
//               <img
//                 className="main3-images"
//                 src={productData.image_url}
//                 alt={productData.title}
//               />
//               <h2>{productData.title}</h2>
//               <p className="price-strikethrough">Rs. {productData.price}</p>
//               <p className="price">
//                 Rs. {productData.discount}{" "}
//                 <span className="discount">({productData.discount}% OFF)</span>
//               </p>
//               <button className="add-to-bag" onClick={goToCart}>
//                 MOVE TO CART
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="product-details">
//           <h1 className="pro-details">Product details</h1>
//           <div className="text">
//             <div>Description: {productData.description}</div>
//             <div>Product Dimensions: {productData.product_dimensions}</div>
//             <div>Manufacturer: {productData.manufacturer}</div>
//             <div>ASIN: {productData.ASIN}</div>
//             <div>Item Model Number: {productData.item_model_number}</div>
//             <div>Country of Origin: {productData.country_of_origin}</div>
//             <div>Packer: {productData.packer}</div>
//             <div>Item Weight: {productData.item_weight}</div>
//             <div>Item Dimensions: {productData.item_dimensions}</div>
//             <div>Net Quantity: {productData.net_quantity}</div>
//             <div>Included Components: {productData.included_components}</div>
//             <div>Generic Name: {productData.generic_name}</div>
//             <div>Best Sellers Rank: {productData.best_sellers_rank}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SuggestedImages;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../SuggestedImages.scss";

import Header from "./Header";

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
            <div className="size">
              <p className="sizep1">XS</p>
              <p className="sizep2">S</p>
              <p className="sizep3">M</p>
              <p className="sizep4">L</p>
              <p className="sizep5">XL</p>
            </div>
            <p className="price-strikethrough"> {1000}</p>
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
    </>
  );
}

export default SuggestedImages;
