
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./PlaceOrder.scss";
import Header from "../Header";

function PlaceOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    shippingDetails: {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
    },
    paymentInformation: {
      creditCardNo: "",
      expiryDate: "",
      ccv: "",
    },
  });
  const [errors, setErrors] = useState({
    shippingDetails: {},
    paymentInformation: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const section = name.split("-")[0];
    const field = name.split("-")[1];
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
    // Validate input
    validateInput(section, field, value);
  };

  const validateInput = (section, field, value) => {
    let error = "";
    // Perform validation based on field name
    switch (field) {
      case "firstName":
      case "lastName":
      case "street":
      case "city":
      case "state":
        error = value ? "" : "This field is required";
        break;
      case "pinCode":
        error =
          value && /^[0-9]{6}$/.test(value)
            ? ""
            : "Please enter a valid pin code";
        break;
      case "creditCardNo":
        error =
          value && /^[0-9]{16}$/.test(value)
            ? ""
            : "Please enter a valid credit card number";
        break;
      case "expiryDate":
        error =
          value && /^[0-9]{2}\/[0-9]{2}$/.test(value)
            ? ""
            : "Please enter a valid expiry date (MM/YY)";
        break;
      case "ccv":
        error =
          value && /^[0-9]{3}$/.test(value) ? "" : "Please enter a valid CCV";
        break;
      default:
        break;
    }
    setErrors((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: error,
      },
    }));
  };

  const isFormValid = () => {
    // Check if there are any errors in the form data
    for (const section in errors) {
      for (const field in errors[section]) {
        if (errors[section][field]) {
          return false;
        }
      }
    }
    // Check if any required fields are empty
    for (const section in formData) {
      for (const field in formData[section]) {
        if (!formData[section][field]) {
          setErrors((prevState) => ({
            ...prevState,
            [section]: {
              ...prevState[section],
              [field]: "This field is required",
            },
          }));
          return false;
        }
      }
    }
    return true;
  };

  async function Purchase() {
    if (!isFormValid()) {
      alert("Please fill in all required fields correctly");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Purchase Successful");
        navigate(`/orderSummary/${id}`);
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  function BackToCart() {
    navigate("/home");
  }

  return (
    <>
      <div className="full-place-order">
        <div className="only-address">
          <h1 className="shipping">
            <i className="fas fa-shipping-fast"></i>
            Shipping Details
          </h1>
          <div className="address-place-order">
            <div className="fn-place-order">
              <label className="fn-l-place-order">First Name</label>
              <input
                type="text"
                name="shippingDetails-firstName"
                value={formData.shippingDetails.firstName}
                onChange={handleInputChange}
              />
              {errors.shippingDetails.firstName && (
                <div className="error">{errors.shippingDetails.firstName}</div>
              )}
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="shippingDetails-lastName"
                value={formData.shippingDetails.lastName}
                onChange={handleInputChange}
              />
              {errors.shippingDetails.lastName && (
                <div className="error">{errors.shippingDetails.lastName}</div>
              )}
            </div>

            <div className="street-place-order">
              <label>Street</label>
              <input
                type="text"
                name="shippingDetails-street"
                value={formData.shippingDetails.street}
                onChange={handleInputChange}
              />
              {errors.shippingDetails.street && (
                <div className="error">{errors.shippingDetails.street}</div>
              )}
            </div>
            <div className="address-info-place-order">
              <div>
                <label>City</label>
                <input
                  type="text"
                  name="shippingDetails-city"
                  value={formData.shippingDetails.city}
                  onChange={handleInputChange}
                />
                {errors.shippingDetails.city && (
                  <div className="error">{errors.shippingDetails.city}</div>
                )}
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  name="shippingDetails-state"
                  value={formData.shippingDetails.state}
                  onChange={handleInputChange}
                />
                {errors.shippingDetails.state && (
                  <div className="error">{errors.shippingDetails.state}</div>
                )}
              </div>
              <div>
                <label>Pin Code</label>
                <input
                  type="text"
                  name="shippingDetails-pinCode"
                  value={formData.shippingDetails.pinCode}
                  onChange={handleInputChange}
                />
                {errors.shippingDetails.pinCode && (
                  <div className="error">{errors.shippingDetails.pinCode}</div>
                )}
              </div>
            </div>
          </div>
          </div>
          <div className="only-payment">
            <h1 className="payment">
              <i className="far fa-credit-card"></i> Payment Information
            </h1>
            <div className="cc-num-place-order">
              <label>Credit Card No.</label>
              <input
                type="text"
                name="paymentInformation-creditCardNo"
                value={formData.paymentInformation.creditCardNo}
                onChange={handleInputChange}
              />
              {errors.paymentInformation.creditCardNo && (
                <div className="error">
                  {errors.paymentInformation.creditCardNo}
                </div>
              )}
            </div>
            <div className="cc-info-place-order">
              <div>
                <label>Exp Date</label>
                <input
                  type="text"
                  name="paymentInformation-expiryDate"
                  value={formData.paymentInformation.expiryDate}
                  onChange={handleInputChange}
                />
                {errors.paymentInformation.expiryDate && (
                  <div className="error">
                    {errors.paymentInformation.expiryDate}
                  </div>
                )}
              </div>
              <div>
                <label>CCV</label>
                <input
                  type="text"
                  name="paymentInformation-ccv"
                  value={formData.paymentInformation.ccv}
                  onChange={handleInputChange}
                />
                {errors.paymentInformation.ccv && (
                  <div className="error">{errors.paymentInformation.ccv}</div>
                )}
              </div>
            </div>
          </div>
        
      </div>



      <div className="btns-place-order">
        <button className="purchase-button" onClick={Purchase}>
          Purchase
        </button>
        <button className="back-button" onClick={BackToCart}>
          Back
        </button>
      </div>
    </>
  );
}

export default PlaceOrder;
