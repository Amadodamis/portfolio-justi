import { content } from '../../JS/textos';
import { useGlobalContext } from '../../context/GlobalContext';
import './SobreMi.css';
import fotoAboutMe from '../../assets/imgs/foto_about_me.jpg';

function SobreMi() {
    const { language } = useGlobalContext();
    const sobreMiTexts = content[language].home.sobreMi;

    return (
        <section  className="about-me-section">

            <h1 className="name-title">Justina Spinoso</h1>

            <div className='container-foto-about-me'>
                <img src={fotoAboutMe} alt='foto jus' className='ph-jus' />

            </div>
               
            <div id="about" className="container-texts-about">

                <p className="text-aboutme">
                    {sobreMiTexts.text1}
                </p>
                <p className="text-aboutme">
                    {sobreMiTexts.text2}
                </p>
            </div>

        </section>
    );
}

export default SobreMi;
