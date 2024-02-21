
import React, { useState } from "react";

function Size({ setSelectedSize }) { // Receive setSelectedSize as props
  const [filter, setFilter] = useState("M"); // Default size M

  const handleSizeChange = (size) => {
    setFilter(size);
    setSelectedSize(size); // Update selected size in the parent component
  };

  return (
    <div className="filter-container">
      <div
        onClick={() => handleSizeChange("XS")}
        className={`${filter === "XS" ? "size-active" : "size"}`}
      >
        <p className="sizep1">XS</p>
      </div>

      <div
        onClick={() => handleSizeChange("S")}
        className={`${filter === "S" ? "size-active" : "size"}`}
      >
        <p className="sizep1">S</p>
      </div>

      <div
        onClick={() => handleSizeChange("M")}
        className={`${filter === "M" ? "size-active" : "size"}`}
      >
        <p className="sizep1">M</p>
      </div>

      <div
        onClick={() => handleSizeChange("L")}
        className={`${filter === "L" ? "size-active" : "size"}`}
      >
        <p className="sizep1">L</p>
      </div>

      <div
        onClick={() => handleSizeChange("XL")}
        className={`${filter === "XL" ? "size-active" : "size"}`}
      >
        <p className="sizep1">XL</p>
      </div>
    </div>
  );
}

export default Size;
