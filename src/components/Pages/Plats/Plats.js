import Menu from '../../Elements/Menu/Menu';
import Data from '../../Data/Datacarte';

const Plats = () => {
    return (
        <>
            <Menu />
            <main>
                <h2>Je suis la page plats</h2>
                <ul>
                    {Data.map((uneData, i) =>
                        {
                            if (uneData.type === 'entree') 
                            {
                                return (
                                    <li key={i}>
                                        <img src={`img/${uneData.illustration}`} alt="un txt au pif"/>
                                        <p>{uneData.libelle}</p>
                                        <p>{uneData.tarif}</p>
                                    </li>
                                )
                            }
                        }
                    )}
                </ul>
            </main>
        </>
    )
}
export default Plats;