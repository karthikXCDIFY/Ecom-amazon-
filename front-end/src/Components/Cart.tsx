import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';

function Cart() {
    const [productData, setProductData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const id = extractIdFromLocation(location);
    fetchData(id);
  }, [location]); // Fetch data when location changes

  const extractIdFromLocation = (location: any) => {
    // Extract id from location state
    return location.state ? location.state.id : null;
  };

  const fetchData = async (id: string | null) => {
    try {
      if (!id) return; // Make sure id is not null or undefined
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

  if (!productData) {
    // Render loading state or return null if you don't want to render anything
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />

      <div className="product-container">
        <div className="image-container">
          {productData && (
            <div className="product-card">
              <img
                className="main3-images"
                src={productData.image_url}
                alt={productData.title}
              />
              <h2>{productData.title}</h2>
              <p className="price-strikethrough">Rs. {productData.price}</p>
              <p className="price">
                Rs. {productData.discount}{" "}
                <span className="discount">({productData.discount}% OFF)</span>
              </p>
              <button className="add-to-bag">MOVE TO CART</button>
            </div>
          )}
        </div>

        <div className="product-details">
          <h1 className="pro-details">Product details</h1>
          <div className="text">
            <div>Description: {productData.description}</div>
            <div>Product Dimensions: {productData.product_dimensions}</div>
            <div>Manufacturer: {productData.manufacturer}</div>
            <div>ASIN: {productData.ASIN}</div>
            <div>Item Model Number: {productData.item_model_number}</div>
            <div>Country of Origin: {productData.country_of_origin}</div>
            <div>Packer: {productData.packer}</div>
            <div>Item Weight: {productData.item_weight}</div>
            <div>Item Dimensions: {productData.item_dimensions}</div>
            <div>Net Quantity: {productData.net_quantity}</div>
            <div>Included Components: {productData.included_components}</div>
            <div>Generic Name: {productData.generic_name}</div>
            <div>Best Sellers Rank: {productData.best_sellers_rank}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart
function useState<T>(arg0: null): [any, any] {
    throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: import("react-router-dom").Location<any>[]) {
    throw new Error('Function not implemented.');
}

