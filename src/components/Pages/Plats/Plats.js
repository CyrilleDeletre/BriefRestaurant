import Menu from '../../Elements/Menu/Menu';
import ComponentCarte from '../../componentCarte/componentCarte';
import Footer from '../../Elements/Footer/Footer';
import '../Plats/Plats.css';

const Plats = () => {
    return (
        <>
            <Menu />
            <main>
                <ComponentCarte info={'entree'} title={'Nos entrées'} uneClass={'solide'}/>
                <ComponentCarte info={'plat'} title={'Nos plats'} uneClass={'solide'}/>
                <ComponentCarte info={'dessert'} title={'Carte des dessert'} uneClass={'solide'}/>
            </main>
            <Footer />
        </>
    )
}
export default Plats;