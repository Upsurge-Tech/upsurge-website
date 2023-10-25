import React, { useState } from "react";
import phone1 from "../assets/phone1.png";

function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);

  const cards = [
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      photo: { phone1 },
      name: "John Doe",
      role: "Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex items-center justify-center">
      <button className="mr-2" onClick={handlePreviousSlide}>
        Previous
      </button>
      <div className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-64 p-4 bg-white border rounded-lg shadow transform ${
              index === slideIndex
                ? "translate-x-0"
                : "translate-x-40 opacity-50"
            } transition-transform duration-500`}
            style={{
              transformOrigin: "center center",
              transform: `rotateY(${index * 45}deg)`,
            }}
          >
            <img
              src={card.photo}
              alt={card.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg font-bold">{card.name}</h4>
            <p className="text-gray-500">{card.role}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className="ml-2" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slide;
