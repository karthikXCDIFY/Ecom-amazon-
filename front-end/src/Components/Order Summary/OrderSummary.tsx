// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import text from "../../assets/Images/Im10.jpg";
// import "./orderSummary.css"

// const OrderSummary = () => {
//   const [shippingDetails, setShippingDetails] = useState(null);
//   const [paymentInformation, setPaymentInformation] = useState(null);
//   const [productData, setProductData] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/purchase")
//       .then((response) => {
//         const { shippingDetails, paymentInformation } = response.data;
//         setShippingDetails(shippingDetails[shippingDetails.length - 1]);
//         setPaymentInformation(
//           paymentInformation[paymentInformation.length - 1]
//         );
//         // Call fetchData with the id here
//         fetchData(id);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id]); // Include id in the dependency array to re-fetch data when id changes

//   const fetchData = async (id) => {
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

//   if (!shippingDetails || !paymentInformation || !productData.title) {
//     return <div>Loading...</div>;
//   }

//   console.log("Product Image URL:", productData.image_url); // Log the image URL to check if it's correct

//   return (
//     <div>
//   <div className="Order-Summary-Container">
//     <h1>ORDER SUMMARY</h1>
//     <img src={`/${productData.image_url}`} alt="Product" />
//     <div className="Order-Summary-productInformation">
//       <h1>Product Information</h1>
//       <p>Title: {productData.title}</p>
//       <p>Discount: {productData.discount}</p>
//       <p>Price: {productData.price}</p>
//       {/* <p>Description: {productData.description}</p> */}
//       <p>Product Dimensions: {productData.product_dimensions}</p>
//       <p>Date First Available: {productData.date_first_available}</p>
//       <p>Manufacturer: {productData.manufacturer}</p>
//       <p>ASIN: {productData.ASIN}</p>
//       <p>Item Model Number: {productData.item_model_number}</p>
//       <p>Country of Origin: {productData.country_of_origin}</p>
//       <p>Department: {productData.department}</p>
//       <p>Packer: {productData.packer}</p>
//       <p>Item Weight: {productData.item_weight}</p>
//       <p>Item Dimensions: {productData.item_dimensions}</p>
//       <p>Net Quantity: {productData.net_quantity}</p>
//       <p>Included Components: {productData.included_components}</p>
//       <p>Generic Name: {productData.generic_name}</p>
//       <p>Best Sellers Rank: {productData.best_sellers_rank}</p>
//       {/* <p>Customer Reviews: {productData.customer_reviews}</p> */}
//       {/* <p>Size: {productData.size}</p> */}
//       <p>Colour: {productData.colour}</p>
//     </div>
//     <div className="Order-Summary-shiping-details">
//       <h2>Shipping Details</h2>
//       <p>First Name: {shippingDetails.ShippingDetailId}</p>
//       <p>Last Name: {shippingDetails.LastName}</p>
//       <p>Street: {shippingDetails.Street}</p>
//       <p>City: {shippingDetails.City}</p>
//       <p>State: {shippingDetails.State}</p>
//       <p>PinCode: {shippingDetails.PinCode}</p>
//     </div>
//     <div className="Order-Summary-payment-information">
//       <h2>Payment Information</h2>
//       <p>Credit Card No: {paymentInformation.PaymentId}</p>
//       <p>Expiry Date: {paymentInformation.ExpiryDate}</p>
//       <p>Status: Sucess</p>
//       <p>Payment Mode:Online</p>
//       <p>Platform Fee:Rs 10</p>
//       <p> Shipping Fee: Rs 50</p>
//     </div>
//   </div>
// </div>

//   );
// };

// export default OrderSummary;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import text from "../../assets/Images/Im10.jpg";
// import "./orderSummary.css"

// const OrderSummary = () => {
//   const [shippingDetails, setShippingDetails] = useState(null);
//   const [paymentInformation, setPaymentInformation] = useState(null);
//   //const [productData, setProductData] = useState({});
//   const { id } = useParams();
//   const productData = JSON.parse(localStorage.getItem("cart"))
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/purchase")
//       .then((response) => {
//         const { shippingDetails, paymentInformation } = response.data;
//         setShippingDetails(shippingDetails[shippingDetails.length - 1]);
//         setPaymentInformation(
//           paymentInformation[paymentInformation.length - 1]
//         );
//         // Call fetchData with the id here
//         //fetchData(id);
//         id
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id]); // Include id in the dependency array to re-fetch data when id changes

//   // const fetchData = async (id) => {
//   //   try {
//   //     if (!id) return;
//   //     const response = await fetch(`http://localhost:3000/categories/${id}`);
//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch data");
//   //     }
//   //     const data = await response.json();
//   //     setProductData(data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   if (!shippingDetails || !paymentInformation || !productData.title) {
//     return <div>Loading...</div>;
//   }

// console.log(cart)
//   return (
//     <div>
//   <div className="Order-Summary-Container">
//     <h1>ORDER SUMMARY</h1>
//     <h2 className="product-Name">Product Name  {productData.title}</h2>
//     <img src={`/${productData.image_url}`} alt="Product" />
//     <div className="Order-Summary-productInformation">
//       <h1>Product Information</h1>
//       <p>Title: {productData.title}</p>
//       <p>Discount: {productData.discount}</p>
//       <p>Price: {productData.price}</p>
//       {/* <p>Description: {productData.description}</p> */}
//       {/* <p>Product Dimensions: {productData.product_dimensions}</p>
//       <p>Date First Available: {productData.date_first_available}</p>
//       <p>Manufacturer: {productData.manufacturer}</p>
//       <p>ASIN: {productData.ASIN}</p>
//       <p>Item Model Number: {productData.item_model_number}</p> */}
//       <p>Country of Origin: {productData.country_of_origin}</p>
//       {/* <p>Department: {productData.department}</p> */}
//       <p>Packer: {productData.packer}</p>
//       <p>Item Weight: {productData.item_weight}</p>
//       <p>Item Dimensions: {productData.item_dimensions}</p>
//       {/* <p>Net Quantity: {productData.net_quantity}</p> */}
//       {/* <p>Included Components: {productData.included_components}</p>
//       <p>Generic Name: {productData.generic_name}</p> */}
//       <p>Best Sellers Rank: {productData.best_sellers_rank}</p>
//       {/* <p>Customer Reviews: {productData.customer_reviews}</p> */}
//       {/* <p>Size: {productData.size}</p> */}
//       {/* <p>Colour: {productData.colour}</p> */}
//     </div>
//     <div className="Order-Summary-shiping-details">
//       <h2>Shipping Details</h2>
//       <p>Name: {shippingDetails.FirstName} {shippingDetails.LastName}</p>

//       <p>Street: {shippingDetails.Street}</p>
//       <p>City: {shippingDetails.City}</p>
//       <p>State: {shippingDetails.State}</p>
//       <p>PinCode: {shippingDetails.PinCode}</p>
//     </div>
//     <div className="Order-Summary-payment-information">
//       <h2>Payment Information</h2>
//       <p>Credit Card No: {paymentInformation.PaymentId}</p>
//       {/* <p>Expiry Date: {paymentInformation.ExpiryDate}</p> */}
//       <p>Status: Sucess</p>
//       <p>Payment Mode:Online</p>
//       <p>Platform Fee:Rs 10</p>
//       <p> Shipping Fee: Rs 50</p>
//     </div>
//   </div>
// </div>

//   );
// };

// export default OrderSummary;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./orderSummary.css";

const OrderSummary = () => {
  const [shippingDetails, setShippingDetails] = useState(null);
  const [paymentInformation, setPaymentInformation] = useState(null);
  const { id } = useParams();
  // Retrieve and flatten the cart data from local storage
  const productData = JSON.parse(localStorage.getItem("cart")) || [];
  const flattenedProductData = productData.flat();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/purchase");
        const { shippingDetails, paymentInformation } = response.data;
        setShippingDetails(shippingDetails[shippingDetails.length - 1]);
        setPaymentInformation(
          paymentInformation[paymentInformation.length - 1]
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (
    !shippingDetails ||
    !paymentInformation ||
    flattenedProductData.length === 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Order-Summary-Container">
      <h1>ORDER SUMMARY</h1>
      {flattenedProductData.map((product, index) => (
        <div key={index} className="product-summary">
          <h2 className="product-Name">Product Name: {product.title}</h2>
          <img className="Order-Summary-image" src={`/${product.image_url}`} alt={product.alt_text} />
          <div className="Order-Summary-productInformation">
            <h1>Product Information</h1>
            <p>Title: {product.title}</p>
            <p>Discount: {product.discount}</p>
            <p>Price: {product.price}</p>
            <p>Size: {product.size}</p>
            <p>Manufacturer : {product.manufacturer}</p>
            <p>Description:{product.description}</p>
          </div>
        </div>
      ))}
      <div className="Order-Summary-shiping-details">
        <h2>Shipping Details</h2>
        <p>
          Name: {shippingDetails.FirstName} {shippingDetails.LastName}
        </p>
        <p>Street: {shippingDetails.Street}</p>
        <p>City: {shippingDetails.City}</p>
        <p>State: {shippingDetails.State}</p>
        <p>PinCode: {shippingDetails.PinCode}</p>
      </div>
      <div className="Order-Summary-payment-information">
        <h2>Payment Information</h2>
        <p>Credit Card No: {paymentInformation.PaymentId}</p>
        <p>Status: Success</p>
        <p>Payment Mode: Online</p>
        <p>Platform Fee: Rs 10</p>
        <p>Shipping Fee: Rs 50</p>
      </div>
    </div>
  );
};

export default OrderSummary;
