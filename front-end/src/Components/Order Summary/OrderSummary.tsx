

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router';

// const OrderSummary = () => {
//   const [shippingDetails, setShippingDetails] = useState(null);
//   const [paymentInformation, setPaymentInformation] = useState(null);
//   const [productData, setProductData] = useState({});
//   const { id } = useParams();
// console.log(shippingDetails);
//   useEffect(() => {
//     axios.get('http://localhost:3000/api/purchase')
//       .then(response => {
//         const { shippingDetails, paymentInformation } = response.data;
//         setShippingDetails(shippingDetails[shippingDetails.length - 1]);
//         setPaymentInformation(paymentInformation[paymentInformation.length - 1]);
//         // Call fetchData with the id here
//         fetchData(id);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
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

//   return (
//     <div>
//       <div className="productInformation">

        
//       </div>
//     <img src={productData.image_url} alt="not found" />
  
      
//       <h1>Product Discount: {productData.discount}</h1>
//       <h1>Order Summary</h1>
//       <h2>Shipping Details</h2>
//       <p>First Name: {shippingDetails.ShippingDetailId}</p>
//       <p>Last Name: {shippingDetails.LastName}</p>
//       <p>Street: {shippingDetails.Street}</p>
//       <p>City: {shippingDetails.City}</p>
//       <p>State: {shippingDetails.State}</p>
//       <p>PinCode: {shippingDetails.PinCode}</p>

//       <h2>Payment Information</h2>
//       <p>Credit Card No: {paymentInformation.PaymentId}</p>
//       <p>Expiry Date: {paymentInformation.ExpiryDate}</p>
//       <p>CCV: {paymentInformation.CCV}</p>
//     </div>
//   );
// };

// export default OrderSummary;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import text from "../../assets/Images/Im10.jpg"

const OrderSummary = () => {
  const [shippingDetails, setShippingDetails] = useState(null);
  const [paymentInformation, setPaymentInformation] = useState(null);
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/api/purchase')
      .then(response => {
        const { shippingDetails, paymentInformation } = response.data;
        setShippingDetails(shippingDetails[shippingDetails.length - 1]);
        setPaymentInformation(paymentInformation[paymentInformation.length - 1]);
        // Call fetchData with the id here
        fetchData(id);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // Include id in the dependency array to re-fetch data when id changes

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

  if (!shippingDetails || !paymentInformation || !productData.title) {
    return <div>Loading...</div>;
  }

  console.log("Product Image URL:", productData.image_url); // Log the image URL to check if it's correct

  return (
    <div>

      <div className="productInformation">
        <h1>ORDER SUMMARY</h1>
        <img src={`/${productData.image_url}`} alt="Product" />
        
      </div>
     
      {/* <h1>Order Summary</h1> */}
      <h2>Shipping Details</h2>
      <p>First Name: {shippingDetails.ShippingDetailId}</p>
      <p>Last Name: {shippingDetails.LastName}</p>
      <p>Street: {shippingDetails.Street}</p>
      <p>City: {shippingDetails.City}</p>
      <p>State: {shippingDetails.State}</p>
      <p>PinCode: {shippingDetails.PinCode}</p>

      <h2>Payment Information</h2>
      <p>Credit Card No: {paymentInformation.PaymentId}</p>
      <p>Expiry Date: {paymentInformation.ExpiryDate}</p>
      <p>CCV: {paymentInformation.CCV}</p>
    </div>
  );
};

export default OrderSummary;

