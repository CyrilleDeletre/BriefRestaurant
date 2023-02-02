import Menu from '../../Elements/Menu/Menu';
import ComponentCarte from '../../componentCarte/componentCarte';
import Footer from '../../Elements/Footer/Footer';
import '../Boissons/Boissons.css';

const Boissons = () => {
    return (
        <>
            <Menu />
            <main>
                <ComponentCarte info={'alcoolise'} title={'Alcools'} uneClass={'solide'}/>
                <ComponentCarte info={'soft'} title={'Soft'} uneClass={'solide'}/>
                <ComponentCarte info={'chaude'} title={'Boissons chaude'} uneClass={'solide'}/>
            </main>
            <Footer />
        </>
    )
}
export default Boissons;