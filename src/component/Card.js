import React from "react";

const Card = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
