import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide } from '../redux/carouselSlice';
import './Carousel.css';

const Carousel = () => {
  const dispatch = useDispatch();
  const { items, currentIndex } = useSelector((state) => state.carousel);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={() => dispatch(prevSlide())}>‹</button>

      <div className="slide">
        <h2>{items[currentIndex].title}</h2>
        <p>{items[currentIndex].content}</p>
      </div>

      <button className="arrow right" onClick={() => dispatch(nextSlide())}>›</button>
    </div>
  );
};

export default Carousel;
