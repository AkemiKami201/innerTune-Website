import React, { useState } from 'react';

const Carousel1 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mt-20">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        onClick={goToNextSlide}
      >
        Next
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="mx-auto"
      />
    </div>
  );
};

export default Carousel1;