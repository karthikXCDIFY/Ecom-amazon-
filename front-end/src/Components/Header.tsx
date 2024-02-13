import React from "react";
import "../Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Optionally, you can redirect the user to the login page or any other page after logout
    navigate("/"); // Redirect to the login page
  };


  function singnin() {
    navigate("/");
  }
  function showCart() {
    navigate("/cart");
  }

  const PrivateRoute = ({ element }: { element: React.ElementType }) => {
    // Check if the user is authenticated
    const isAuthenticated = !!localStorage.getItem("token");

    // If authenticated, render the component, else redirect to the login page
    return isAuthenticated ? element : navigate("/", { replace: true });
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navlogo border">
            <div className="logo"></div>
          </div>
          <div className="navaddress border">
            <p className="address-first">Delivering to Bengaluru 560067</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="address-second"> India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input
              type="search"
              className="search-input"
              placeholder=" Amazon search"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="navsigin ">
            <p>
              <span className="sign-in border" onClick={handleLogout}>
                Hello, Logout
              </span>
            </p>
            <p className="nav-second border">Account and lists</p>
          </div>
          <div className="navorder border">
            <p>
              <span>Return</span>
            </p>
            {/* <p className="nav-second">Orders</p> */}
          </div>
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping" onClick={showCart}></i>
            Orders
          </div>
        </div>
        <div className="panel ">
          <i className="fa-solid fa-bars"></i>
          <h3 className=" border">All</h3>
          <div className="panel-options ">
            <p className=" border">miniTV</p>
            <p className=" border">Sell</p>
            <p className=" border"> Best Sellers</p>
            <p className=" border">Mobil</p>
            <p className="border">Electronics</p>
            <p className=" border">Customer service</p>
            <p className=" border">New Releases</p>
            <p className=" border">Laptops</p>
          </div>
          <div className="panel-deals  border ">
            <p className=" border">
              New Launches from Mobils Electrons and more
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
