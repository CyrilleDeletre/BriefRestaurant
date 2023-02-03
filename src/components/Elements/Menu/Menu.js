import { Link } from 'react-router-dom';
import '../Menu/Menu.css';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div>
                
                        <Link Link to="/">
                            <img src="../img/logoRestaurant.jpg" alt="Logo du restaurant la table de Chantal" />
                            Chantal
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link Link to="/plats">Solide</Link>
                        </li>
                        <li>
                            <Link Link to="/boissons?name=focus">Liquide</Link>
                        </li>
                        <li>
                            <Link Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar