import '../../components/AsideLeftContact/AsideLeftContact.css';
import Map from '../Map';

function AsideLeftContact() {
  return (
    <aside>
        <section>
          <h2>Adresse du restaurant</h2>
          <p>297, chaussée Fernand Forest , Tourcoing, France</p>
          <figure className='GoogleMap'>
            <Map />
          </figure>
        </section>

        

        <figure>
          <figcaption>La salle principale</figcaption>
          <img src="../img/laTableDeChantal2.jpg" alt="restaurant la Table de Chantal" />
        </figure>
    </aside>
  );
}

export default AsideLeftContact;