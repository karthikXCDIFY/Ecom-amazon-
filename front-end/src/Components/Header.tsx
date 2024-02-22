import React from "react";
import "../Header.scss";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../Context/SearchContext";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    console.log("Search term:", value);
    setSearchTerm(value);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const About = () => {
    navigate("/about");
  };

  const Contact = () => {
    navigate("/contact");
  };

  return (
    <header>
      <div className="navbar">
        <div className="navlogo border">
          <div className="logo"></div>
        </div>
        <div className="navaddress border">
          <p className="address-first">Delivering to Bengaluru 560067</p>
          <div className="add-icon">
            
            <LocationOnIcon />
            <p className="address-second"> India</p>
          </div>
        </div>
        <div className="nav-search">
          <input
            type="search"
            className="search-input"
            placeholder="Search By Name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="search-icon">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <SearchOutlinedIcon />  
          </div>
        </div>

        <div className="navorder border">
          <p>
            <span onClick={About}>About Us</span>
          </p>
        </div>
        <div className="nav-cart border" onClick={Contact}>
          Contact us
        </div>
        <div className="navsigin ">
          <p>
            <span className="sign-in border" onClick={handleLogout}>
              Logout
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
