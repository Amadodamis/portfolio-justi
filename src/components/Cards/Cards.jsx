import React from 'react';
import './Cards.css';

function Cards({ image, title, description }) {
  return (
    <div className="card-item scroll-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Cards;