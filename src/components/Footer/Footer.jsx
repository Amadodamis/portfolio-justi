import "./footer.css";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import mailIcon from "../../assets/icons/mail.png";

function Footer() {
    return (
        <footer id="contact" className="footer-section">
            <h2>Contacto</h2>

            <div className="contact-links">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/5492213641867" // 👈 reemplazar con número real
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <img src={whatsappIcon} alt="WhatsApp" />
                    <span>WhatsApp</span>
                </a>

                {/* Mail */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=amadodamis@gmail.com&su=Consulta%20desde%20el%20portfolio&body=Hola,%20quiero%20consultar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <img src={mailIcon} alt="Email" />
                    <span>Email</span>
                </a>

            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} Portfolio Arquitectura
            </p>
        </footer>
    );
}

export default Footer;
