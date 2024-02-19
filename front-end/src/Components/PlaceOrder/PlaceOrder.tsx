
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.scss";

function PlaceOrder() {
  const navigate = useNavigate();

  async function Purchase() {
    const formData = {
      shippingDetails: {
        firstName: (document.querySelector('input[name="f-name"]') as HTMLInputElement)?.value,
        lastName: (document.querySelector('input[name="l-name"]') as HTMLInputElement)?.value,
        street: (document.querySelector('input[name="address"]') as HTMLInputElement)?.value,
        city: (document.querySelector('input[name="city"]') as HTMLInputElement)?.value,
        state: (document.querySelector('input[name="state"]') as HTMLInputElement)?.value,
        pinCode: (document.querySelector('input[name="zip"]') as HTMLInputElement)?.value
      },
      paymentInformation: {
        creditCardNo: (document.querySelector('input[name="card-num"]') as HTMLInputElement)?.value,
        expiryDate: (document.querySelector('input[name="expire"]') as HTMLInputElement)?.value,
        ccv: (document.querySelector('input[name="security"]') as HTMLInputElement)?.value
      }
    };
    
    

    try {
      const response = await fetch("http://localhost:3000/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Purchase Successful");
        navigate("/home");
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
    alert("back");
    navigate("/home");
  }

  return (
    <div className="full-place-order">
      <div className="conta-place-order">
        <h1 className="shipping">
          <i className="fas fa-shipping-fast"></i>
          Shipping Details
        </h1>
        <div className="address-place-order">
          <div className="fn-place-order">
            <label className="fn-l-place-order">First Name</label>
            <input type="text" name="f-name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="l-name" />
          </div>

          <div className="street-place-order">
            <label>Street</label>
            <input type="text" name="address" />
          </div>
          <div className="address-info-place-order">
            <div>
              <label>City</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label>State</label>
              <input type="text" name="state" />
            </div>
            <div>
              <label>Pin Code</label>
              <input type="text" name="zip" />
            </div>
          </div>

          <h1 className="payment">
            <i className="far fa-credit-card"></i> Payment Information
          </h1>
          <div className="cc-num-place-order">
            <label>Credit Card No.</label>
            <input type="text" name="card-num" />
          </div>
          <div className="cc-info-place-order">
            <div>
              <label>Exp Date</label>
              <input type="text" name="expire" />
            </div>
            <div>
              <label>CCV</label>
              <input type="text" name="security" />
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
      </div>
    </div>
  );
}

export default PlaceOrder;
