import { Link } from 'react-router-dom';
import '../Menu/Menu.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    
                    <Link Link to="/">
                        <img src="../img/logoRestaurant.jpg" alt="" />
                        La table de Chantal
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
                        <Link Link to="/boissons">Liquide</Link>
                    </li>
                    <li>
                        <Link Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar