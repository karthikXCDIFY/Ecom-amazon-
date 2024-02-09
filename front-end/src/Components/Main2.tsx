// import React, { useState, useEffect } from "react";
// import "../Main2.scss";
// import Main3 from "./SugestedImages";
// import { useNavigate } from "react-router-dom";

// interface Category {
//   image_url: string;
//   alt: string;
//   title: string;
//   price: number;
//   discount: string;
//   description: string;
// }

// function Main2() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/categories");
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   let next = (e: any) => {
//     navigate("/Main3");
//   };
//   return (
//     <div>
//       <div className="banner">
//         <h1>E-commerce Store</h1>
//       </div>
//       <div className="hero-section"></div>
//       <div className="categories">
//         {categories.map((category, index) => (
//           <div className="category" key={index}>
//             <img
//               onClick={next}
//               className="category-img"
//               src={category.image_url}
//               alt={category.alt}
//             />
//             <p>
//               {category.title}
//               <p className="m2price">
//                 {category.price}{" "}
//                 <span className="m2discount">({category.discount})</span>
//               </p>
//               <h6>{category.description}</h6>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Main2;

import React, { useState, useEffect } from "react";
import "../Main2.scss";
import { useNavigate } from "react-router-dom";

interface Category {
  id: string; // Ensure each category object has a unique identifier
  image_url: string;
  alt: string;
  title: string;
  price: number;
  discount: string;
  description: string;
}

function Main2() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const next = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate("/suggestedimage", { replace: true, state: { id: categoryId } });
  };

  return (
    <div>
      <div className="banner">
        <h1>E-commerce Store</h1>
      </div>
      <div className="hero-section"></div>
      <div className="categories">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <img
              onClick={() => next(category.id)} // Pass category id to next function
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
  );
}

export default Main2;
