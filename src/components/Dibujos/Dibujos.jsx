import './dibujos.css';

function Dibujos({ texts }) {
  return (
    <section id="drawings" className="section-content">
          <h2>{texts.nav.drawings}</h2>
          {/* 5. Scroll horizontal con cajas rojas */}
          <div className="horizontal-scroll-container">
            <div className="scroll-item red-box"></div>
            <div className="scroll-item red-box"></div>
            <div className="scroll-item red-box"></div>
          </div>
        </section>
  )
}

export default Dibujos