import React from "react";
import "./PlaceOrder.scss";
import { useNavigate } from "react-router";

function PlaceOrder() {
  const navigate = useNavigate();

  
  function Purchase(){
    alert("Purchase Successful");
    navigate("/home" );
  }
  function BackToCart(){
    alert("back");
    navigate("/cart");
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
              <label>Exp</label>
              <input type="text" name="expire" />
            </div>
            <div>
              <label>CCV</label>
              <input type="text" name="security" />
            </div>
          </div>
        </div>
        <div className="btns-place-order">
          <button className="purchase-button " onClick={Purchase}>Purchase</button>
          <button className="back-button" onClick={BackToCart}>
            Back to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
