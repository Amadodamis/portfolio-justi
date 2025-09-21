import React from 'react';
import './Bitacora.css';
import Cards from '../Cards/Cards';
import { bitacoraData } from '../../JS/database';

function Bitacora({ texts }) {
  return (
    <section id="bitacora" className="bitacora-section">
      <h2>{texts.nav.bitacora}</h2>
      <div className="bitacora-container">
        {bitacoraData.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Bitacora;