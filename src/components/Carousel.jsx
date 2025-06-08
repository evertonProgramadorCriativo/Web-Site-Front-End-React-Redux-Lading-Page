// src/components/Carousel.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide, setSlide } from '../redux/carouselSlice';
import './Carousel.css';

const Carousel = () => {
  const currentIndex = useSelector((state) => state.carousel.currentIndex);
  const slides = useSelector((state) => state.carousel.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={() => dispatch(prevSlide())}>
        &#10094;
      </button>
      <div className="slide">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].content}</p>
      </div>
      <button className="arrow right" onClick={() => dispatch(nextSlide())}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, idx) => (
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
