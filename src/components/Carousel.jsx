// src/components/Carousel.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide, setSlide } from '../redux/carouselSlice';
import './Carousel.css';

const Carousel = () => {
  const { items, currentIndex } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const currentSlide = items[currentIndex];

  return (
    <div className="carousel">
      <button className="arrow left" onClick={() => dispatch(prevSlide())}>
        &#10094;
      </button>

      <div className="slide">
        <img src={currentSlide.image} alt={currentSlide.title} className="slide-image" />
        <div className="slide-text">
          <h2>{currentSlide.title}</h2>
          <p>{currentSlide.content}</p>
        </div>
      </div>

      <button className="arrow right" onClick={() => dispatch(nextSlide())}>
        &#10095;
      </button>

      <div className="dots">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => dispatch(setSlide(idx))}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
