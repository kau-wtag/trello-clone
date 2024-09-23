import React from "react";

const Card = ({ content }) => {
  return (
    <div className="bg-white p-2 rounded shadow-sm mb-2 cursor-pointer">
      {content}
    </div>
  );
};

export default Card;
