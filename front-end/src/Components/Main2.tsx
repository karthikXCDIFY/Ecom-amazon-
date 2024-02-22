import React, { useEffect } from "react";
import "../Main2.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearchContext } from "../Context/SearchContext";

interface Category {
  id: string;
  image_url: string;
  alt: string;
  title: string;
  price: number;
  discount: string;
  description: string;
}

const Main2: React.FC = () => {
  const { filteredCategories, setFilteredCategories, searchTerm } =
    useSearchContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [searchTerm]); // Re-fetch data when search term changes

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Filter categories based on search term
      const filtered = data.filter((category: Category) =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const next = (categoryId: string) => {
    // navigate("/suggestedimage", { replace: true, state: { id: categoryId } });
    navigate(`/suggestedimage/${categoryId}`, { replace: true });
  };

  return (
    <>
      <div>
        {/* <div className="banner">
          <h1>E-commerce Store</h1>
        </div> */}
        <div className="hero-section"></div>
        <div className="categories">
          {filteredCategories.map((category: Category) => (
            <div className="category" key={category.id}>
              <div className="image-and-button">
                <img
                  onClick={() => next(category.id)}
                  className="category-img"
                  src={category.image_url}
                  alt={category.alt}
                />
                <NavLink to={`/placeorders/${category.id}`}>
                  <button className="buynow"> Buy Now</button>
                </NavLink>
              </div>

              <div>
                {category.title}
                <p className="m2price">
                  {category.price}{" "}
                  <span className="m2discount">({category.discount})</span>
                </p>
                <h6>{category.description}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main2;
