import React from 'react';
import './Dibujos.css';
import Cards from '../Cards/Cards';
import { drawingsData } from '../../JS/database';

function Dibujos({ texts }) {
  return (
    <section id="drawings" className="dibujos-section">
      <h2>{texts.nav.drawings}</h2>
      <div className="dibujos-container">
        {drawingsData.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Dibujos;