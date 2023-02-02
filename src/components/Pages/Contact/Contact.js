import Menu from '../../Elements/Menu/Menu';
import Formulaire from '../../Formulaire/Formulaire';
import Footer from '../../Elements/Footer/Footer';
import '../Contact/Contact.css';
import AsideLeftContact from '../../AsideLeftContact/AsideLeftContact';
import AsideRightContact from '../../AsideRightContact/AsideRightContact';

const Contact = () => {
    return (
        <>
            <Menu />
            
            <main>
                <AsideLeftContact />
                <Formulaire />
                <AsideRightContact />
            </main>
            <Footer />
        </>
    )
}
export default Contact;