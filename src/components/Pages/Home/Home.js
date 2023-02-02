import Menu from '../../Elements/Menu/Menu';
import Presentation from '../../Presentation/Presentation';
import Footer from '../../Elements/Footer/Footer';
import '../Home/Home.css';

const Home = () => {
    return (
        <>
            <Menu />
            <p>Slider</p>
            <h1>Accueil</h1>
            <Presentation />
            <Footer />
        </>
    )
}
export default Home;