import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <Link Link to="/boissons">CGU</Link>
                        </li>
                        <li>
                            <Link Link to="/contact">Protection des données</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}
export default Footer;