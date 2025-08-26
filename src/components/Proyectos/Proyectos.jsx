import './proyectos.css';

function Proyectos({ texts }) {
  return (
    <section id="projects" className="section-content">
      <h2>{texts.nav.projects}</h2>
      {/*  Scroll horizontal con cajas rojas */}
      <div className="horizontal-scroll-container">
        <div className="scroll-item red-box"></div>
        <div className="scroll-item red-box"></div>
        <div className="scroll-item red-box"></div>

      </div>
    </section>
  )
}

export default Proyectos