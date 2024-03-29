import Menu from '../../Elements/Menu/Menu';
import Slider from '../../Elements/Slider/Slider';
import Presentation from '../../Presentation/Presentation';
import Footer from '../../Elements/Footer/Footer';
import '../Home/Home.css';


const Home = () => {
    return (
        <>
            <Menu />
            <main>
                <Slider />
                <Presentation />
            </main>
            <Footer />
        </>
    )
}
export default Home;