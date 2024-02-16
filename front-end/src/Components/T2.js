import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Main.css";

// Importing car images
import car1 from "./Assets/Audi340i.jpg";
import car2 from "./Assets/car2.jpg";
import car3 from "./Assets/car3.png";
import car4 from "./Assets/car4.png";
import car5 from "./Assets/car5.jpg";
import car6 from "./Assets/car6.png";
import car7 from "./Assets/mdzire.jpg";

const Main = () => {
  // State variables for managing data and navigation
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const itemsPerPage = 3; // Number of items per page
  const navigate = useNavigate();

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle click event for viewing car details
  const handleSeeDetails = (carId) => {
    navigate(/main/details/${carId}, {
      state: { image: getCarImage(carId) },
    });
  };

  // Function to handle click event for buying a car
  const handleBuyClick = (event, carId) => {
    event.stopPropagation(); // Prevent event propagation to handleSeeDetails
    navigate(/buynowcheckout/${carId});
  };

  // Function to handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to get car image based on carId
  const getCarImage = (carId) => {
    switch (carId) {
      case 1:
        return car1;
      case 2:
        return car2;
      case 3:
        return car3;
      case 4:
        return car4;
      case 5:
        return car5;
      case 6:
        return car6;
      case 12:
        return car7;
      default:
        return "";
    }
  };

  // Filter cars based on search term
  const filteredCars = cars.filter((car) =>
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate start index for slicing cars array based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate end index for slicing cars array based on current page
  const endIndex = startIndex + itemsPerPage;
  // Slice the cars array to display only items for the current page
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  // Function to handle click event for previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle click event for next page
  const handleNextPage = () => {
    const totalPageCount = Math.ceil(filteredCars.length / itemsPerPage);
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="product-container">
      <div className="search">
        {/* Basic search bar input */}
        <input
          type="text"
          placeholder="Search by brand"
          value={searchTerm}
          onChange={handleSearchChange} // Add onChange event handler
        />
      </div>
      {/* Display cars in a grid layout */}
      <div className="grid-container">
        {/* Map through displayed cars and render each car */}
        {displayedCars.map((car) => (
          <div
            key={car.id}
            className={grid-item carDetails car${car.id}}
            onClick={() => handleSeeDetails(car.id)}
          >
            <div className="car-brand">
              <h3>{car.brand}</h3>
            </div>
            <img
              src={getCarImage(car.id)}
              alt=""
              className={car${car.id}-image}
            />
            <div>
              <div>
                <p>
                  <span className="key">Brand :</span>{" "}
                  <span className="value">{car.brand}</span>
                </p>
                <p>
                  <span className="key">Type :</span>{" "}
                  <span className="value">{car.type}</span>
                </p>
                <p>
                  <span className="key">Model :</span>{" "}
                  <span className="value">{car.model}</span>
                </p>
                <p>
                  <span className="key">Price :</span>{" "}
                  <span className="value">{car.price}</span>
                </p>
              </div>
              <button onClick={(event) => handleBuyClick(event, car.id)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &#9664;
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredCars.length / itemsPerPage)
          }
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Main;