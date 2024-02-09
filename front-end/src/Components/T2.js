// Main.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Main.css';

// Importing car images
import car1 from './Assets/Audi340i.jpg';
import car2 from './Assets/car2.jpg';
import car3 from './Assets/car3.png';
import car4 from './Assets/car4.png';
import car5 from './Assets/car5.jpg';
import car6 from './Assets/car6.png';

const Main = () => {
  // State variables for managing data and navigation
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
  const navigate = useNavigate();

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle click event for viewing car details
  const handleSeeDetails = (carId) => {
    const selected = cars.find((car) => car.id === carId);
    setSelectedCar(selected);
    navigate(/details/${carId}, { state: { image: getCarImage(carId) } });
  };

  // Function to handle click event for buying a car
  const handleBuyClick = (carId) => {
    const selected = cars.find((car) => car.id === carId);
    setSelectedCar(selected);
    navigate(/details/${carId}, { state: { image: getCarImage(carId) } });
  };

  // Function to handle click event for previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle click event for next page
  const handleNextPage = () => {
    const totalPageCount = Math.ceil(cars.length / itemsPerPage);
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
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
      default:
        return '';
    }
  };

  // Calculate start index for slicing cars array based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Calculate end index for slicing cars array based on current page
  const endIndex = startIndex + itemsPerPage;
  // Slice the cars array to display only items for the current page
  const displayedCars = cars.slice(startIndex, endIndex);

  return (
    <div className="product-container">
      {/* Display cars in a grid layout */}
      <div className="grid-container">
        {/* Map through displayed cars and render each car */}
        {displayedCars.map((car) => (
          <div key={car.id} className={grid-item carDetails car${car.id}} onClick={() => handleSeeDetails(car.id)}>
            <h3>{car.brand}</h3>
            <img src={getCarImage(car.id)} alt="" className={car${car.id}-image} />
            <div>
              <p>Brand: {car.brand}</p>
              <p>Type: {car.type}</p>
              <p>Model: {car.model}</p>
              <p>Price: {car.price}</p>
              <button onClick={() => handleBuyClick(car.id)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>&#8592; Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(cars.length / itemsPerPage)}>Next &#8594;</button>
      </div>
    </div>
  );
};

export default Main;




import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(http://localhost:3000/cars/${id});
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  const carImage = location.state ? location.state.image : '';

  return (
    <div className="details-container">
      <Link to="/main" className="back-to-main-button" style={{ position: 'absolute', top: '70px', left: '-5px', margin: '7px' }}>
        <span>&#8592;</span>
      </Link>
      {details && (
        <div className="car-details">
          <div className="image-box">
            <img src={carImage} alt="" className="car-image" />
          </div>
          <div className="details-info-box">
            <div className="details-info">
              <h3>{details.brand} {details.model}</h3>
              <div className="car-info">
                <p>Brand: {details.brand}</p>
                <p>Type: {details.type}</p>
                <p>Model: {details.model}</p>
                <p>Price ₹: {details.price}</p>
              </div>
              <div className="details-description">
                <p>Description: {details.description}</p>
              </div>
            </div>
            <div className="details-actions">
              <button className="buy-now-button">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;