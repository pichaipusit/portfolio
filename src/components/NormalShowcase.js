import React from "react";

function NormalShowcase({ img, title, info, year }) {
  return (
    <div>
      <img width="100px" src={img} alt={title} />
      <div className="text-container">
        <h2>{title} </h2>
        <p>{info} </p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default NormalShowcase;
