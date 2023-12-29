import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

// Function to create carousel components
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // function call for carousel components
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="overlay">
          <h1 className="carousel-title">{slides[currentIndex].heading}</h1>
          <button className="carousel-btn prev" onClick={prevSlide}>
            &lt;
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

const Home = () => {
  const slides = [
    {
      image: 'home.jpg',
      heading: 'Hello, We are a Game Developer.',
    },
    {
      image: 'home2.jpg',
      heading: 'We provide the tools to build your next game.',
    },
    {
      image: 'home3.jpg',
      heading: 'Sit Back and Relax. We are here to help.',
    },
  ];

  return (
    <div className="app-container">
      <Carousel slides={slides} />
    </div>
  );
};

export default Home