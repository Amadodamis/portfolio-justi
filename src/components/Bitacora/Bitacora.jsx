
import './Bitacora.css';
import Cards from '../Cards/Cards';
import { bitacoraData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png"
import arrowRight from "../../assets/icons/arrow_right.png"

function Bitacora({ texts }) {
  return (
    <section id="bitacora" className="bitacora-section">
      <h2>{texts.nav.bitacora}</h2>
      
      <img src={arrowLeft} alt='icon-arrow-left-alt' className='icon-arrow' />
      <img src={arrowRight} alt='icon-arrow-right-alt' className='icon-arrow' />

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