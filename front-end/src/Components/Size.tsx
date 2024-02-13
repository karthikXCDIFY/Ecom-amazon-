import React, { useState } from "react";

function Size() {
  const [filter, setFilter] = useState("XS");

  return (
    <div className="filter-container">
      <div
        onClick={() => setFilter("XS")}
        className={`${filter === "XS" ? "size-active" : "size"}`}
      >
        <p className="sizep1">XS</p>
      </div>

      <div
        onClick={() => setFilter("s")}
        className={`${filter === "s" ? "size-active" : "size"}`}
      >
        <p className="sizep1">S</p>
      </div>

      <div
        onClick={() => setFilter("m")}
        className={`${filter === "m" ? "size-active" : "size"}`}
      >
        <p className="sizep1">M</p>
      </div>

      <div
        onClick={() => setFilter("l")}
        className={`${filter === "l" ? "size-active" : "size"}`}
      >
        <p className="sizep1">L</p>
      </div>

      <div
        onClick={() => setFilter("xl")}
        className={`${filter === "xl" ? "size-active" : "size"}`}
      >
        <p className="sizep1">XL</p>
      </div>
    </div>
  );
}

export default Size;
