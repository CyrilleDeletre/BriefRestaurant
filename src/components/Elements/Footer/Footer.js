import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/LaTableDeChantal/?locale=fr_FR">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/p/CdGWZpiNQHv/">Instagram</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/cgu">CGU</Link>
                        </li>
                        <li>
                            <Link to="/protection">Protection des données</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}
export default Footer;