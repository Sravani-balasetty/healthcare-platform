import React, { useState } from "react";
import "./Carousel.css"; // Add your CSS here

const testimonials = [
  {
    text: "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
    name: "Amit Sharma",
  },
  {
    text: "The app is user-friendly and has made my medical appointments seamless. Highly recommend to everyone!",
    name: "Priya Mehta",
  },
  {
    text: "Excellent platform! Keeps track of my medical records and simplifies finding the right doctors.",
    name: "Rahul Verma",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2>What our users have to say</h2>
      <div className="carousel-content">
        <button onClick={handlePrev} className="arrow-button">
          &lt;
        </button>
        <div className="testimonial">
          <p>{testimonials[currentIndex].text}</p>
          <p className="author">- {testimonials[currentIndex].name}</p>
        </div>
        <button onClick={handleNext} className="arrow-button">
          &gt;
        </button>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
