import React, { useState, useEffect } from "react";
import "../Main2.scss";
import { useNavigate } from "react-router-dom";

interface Category {
  id: string;
  image_url: string;
  alt: string;
  title: string;
  price: number;
  discount: string;
  description: string;
}

function Main2() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCategories(data);
      setFilteredCategories(data); // Set filtered categories initially to all categories
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Filter categories based on search term
    const filtered = categories.filter((category) =>
      category.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const next = (categoryId: string) => {
    navigate("/suggestedimage", { replace: true, state: { id: categoryId } });
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <div className="banner">
          <h1>E-commerce Store</h1>
        </div>
        <div className="hero-section"></div>
        <div className="categories">
          {filteredCategories.map((category) => (
            <div className="category" key={category.id}>
              <img
                onClick={() => next(category.id)}
                className="category-img"
                src={category.image_url}
                alt={category.alt}
              />
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
}

export default Main2;
