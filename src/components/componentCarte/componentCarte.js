import Data from '../../components/Data/Datacarte';
import './componentCarte.css'

export default function ComponentCarte({info, title, uneClass}){
    return(
        <div className={uneClass}>
            <h2>{title}</h2>
            <ul>
                {Data.map((uneData, i) =>
                    {
                        let parametre = info;
                        if (uneData.type === parametre) 
                        {
                            return (
                                <li id={i} key={i}>
                                    <img src={`img/${uneData.illustration}`} alt={uneData.illustration}/>
                                    <p className='p1'>{uneData.libelle}</p>
                                    <p className='p2'>{`${uneData.tarif} €`}</p>
                                </li>
                            )
                        }
                    }
                )}
            </ul>
        </div>
      )
    }