import Data from '../../components/Data/Datacarte';

export default function ComponentCarte({info, title}){
    return(
        <div>
            <h2>{title}</h2>
            <ul>
                {Data.map((uneData, i) =>
                    {
                        let parametre = info;
                        if (uneData.type === parametre) 
                        {
                            return (
                                <li key={i}>
                                    <img src={`img/${uneData.illustration}`} alt={uneData.illustration}/>
                                    <p>{uneData.libelle}</p>
                                    <p>{uneData.tarif}</p>
                                </li>
                            )
                        }
                    }
                )}
            </ul>
        </div>
      )
    }