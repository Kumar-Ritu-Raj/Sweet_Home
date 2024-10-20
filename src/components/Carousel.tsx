import React, { useState, useEffect } from "react";
import "./Carousel.scss";

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideInterval: NodeJS.Timeout | null = null;

  useEffect(() => {
    slideInterval = setInterval(() => {
      handleNext();
    }, interval);

    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [interval]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  return (
    <div
      className="carousel"
    >
      <div
        className="carousel__slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Slide ${index + 1} of ${images.length}`}
            className="carousel__slide"
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="carousel__control prev"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="carousel__control next"
        aria-label="Next slide"
      >
        &#10095;
      </button>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <p className="carousel__current-slide">
        Slide {currentSlide + 1} of {images.length}
      </p>
    </div>
  );
};

export default Carousel;
