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
    console.log("show cart");
    navigate("/cart");

  }
  function About(){
    console.log("About");
    navigate("/about");
  }
  function Contact(){
    console.log("Contact");
    navigate("/contact");
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
            {/* <select className="search-select">
              <option>All</option>
            </select> */}
            <input
              type="search"
              className="search-input"
              placeholder="Search By Title"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
         
          <div className="navorder border">
            <p>
              <span onClick={About}>About Us</span>
            </p>
            {/* <p className="nav-second">Orders</p> */}
          </div>
          {/* <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping" onClick={showCart}></i>
            Orders
          </div> */}
          <div className="nav-cart border" onClick={Contact}>
           
            Contact us
          </div>
          <div className="navsigin ">
            <p>
              <span className="sign-in border" onClick={handleLogout}>
           Logout
              </span>
            </p>
            {/* <p className="nav-second border">Account and lists</p> */}
          </div>

        </div>
       
      </header>
    </>
  );
}

export default Header;
