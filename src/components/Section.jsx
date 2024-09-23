import React from "react";
import Card from "./Card";

const Section = ({ title }) => {
  return (
    <div className="bg-gray-200 p-3 rounded shadow-md">
      <h2 className="font-bold text-base mb-2">{title}</h2>
      <div className="">
        {/* Card components will be added here */}
        <Card content="Example Task" />
      </div>
    </div>
  );
};

export default Section;
