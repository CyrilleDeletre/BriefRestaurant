import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link   Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link   Link to="/plats">Solide</Link>
                    </li>
                    <li>
                        <Link   Link to="/boissons">Liquide</Link>
                    </li>
                    <li>
                        <Link   Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar