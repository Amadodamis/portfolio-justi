import React from 'react';
import { content } from '../../JS/textos';
import { useGlobalContext } from '../../context/GlobalContext';
import './SobreMi.css';
import fotoAboutMe from '../../assets/imgs/foto_about_me.png';

function SobreMi() {
    const { language } = useGlobalContext();
    const sobreMiTexts = content[language].home.sobreMi;

    return (
        <section id="about" className="about-me-section">
            <div className="about-me-container">
                <div className="text-column">
                    <p>{sobreMiTexts.text1}</p>
                </div>
                <div className="text-column">
                    <p>{sobreMiTexts.text2}</p>
                </div>
                <div className="image-column">
                    <img src={fotoAboutMe} alt="Justina Spinoso" className="about-me-image" />
                </div>
            </div>
        </section>
    );
}

export default SobreMi;