import Menu from '../../Elements/Menu/Menu';
import ComponentCarte from '../../componentCarte/componentCarte';

const Plats = () => {
    return (
        <>
            <Menu />
            <main>
                <ComponentCarte info={'entree'} title={'Nos entrées'}/>
                <ComponentCarte info={'plat'} title={'Nos plats'}/>
                <ComponentCarte info={'dessert'} title={'Carte des dessert'}/>
            </main>
        </>
    )
}
export default Plats;