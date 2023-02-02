import Menu from '../../Elements/Menu/Menu';
import ComponentCarte from '../../componentCarte/componentCarte';
import Footer from '../../Elements/Footer/Footer';
import '../Boissons/Boissons.css';

const Boissons = () => {
    return (
        <>
            <Menu />
            <main>
                <ComponentCarte info={'alcoolise'} title={'Alcools'} uneClass={'liquide'}/>
                <ComponentCarte info={'soft'} title={'Soft'} uneClass={'liquide'}/>
                <ComponentCarte info={'chaude'} title={'Boissons chaude'} uneClass={'liquide'}/>
            </main>
            <Footer />
        </>
    )
}
export default Boissons;