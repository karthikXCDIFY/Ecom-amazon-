import React from "react";

function OrderSummary() {
  interface ApiResponse {
    // Define the structure of your API response here
    // For example:
    id: number;
    name: string;
    // Add other properties as per your API response
  }

  // Function to fetch data from the API
  async function fetchDataFromApi(): Promise<ApiResponse[]> {
    try {
      const response = await fetch("http://localhost:3000/api/purchase");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: ApiResponse[] = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  return <>
  <div>
    <h1>Order Summary</h1>
    <div className="order-summary">
        {/* Display a loading message while data is being fetched */}
        <div className="shippingDetail">
            <div className="details">
                <h2>Shipping Details</h2>
                <div className="address">
                    <label>First Name:{shippingDetails.ShippingDetailId}</label>
                   
                </div>
                <div className="address">
                    <label>Last Name</label>
                    <input type="text" name="l-name" />
        </div>
            </div>
        </div>
    </div>
  </div>
  </>;
}

export default OrderSummary;
