import Menu from '../../Elements/Menu/Menu';
import ComponentCarte from '../../componentCarte/componentCarte';
import Footer from '../../Elements/Footer/Footer';
import '../Plats/Plats.css';

const Plats = () => {
    return (
        <>
            <Menu />
            <main>
                <ComponentCarte info={'entree'} title={'Nos entrées'}/>
                <ComponentCarte info={'plat'} title={'Nos plats'}/>
                <ComponentCarte info={'dessert'} title={'Carte des dessert'}/>
            </main>
            <Footer />
        </>
    )
}
export default Plats;