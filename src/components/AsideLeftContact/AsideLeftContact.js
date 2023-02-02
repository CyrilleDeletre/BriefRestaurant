import '../../components/AsideLeftContact/AsideLeftContact.css';

function AsideLeftContact() {
  return (
    <aside>
        <section>
          <h2>Adresse du restaurant</h2>
          <p>297, chaussée Fernand Forest , Tourcoing, France</p>
        </section>
        <section>
          <h2>Numéro de téléphone du restaurant</h2>
          <p>03 20 23 84 65</p>
        </section>
        <section>
          <h2>Horaire d'ouverture</h2>
          <table>
            <tr>
              <td>Lundi</td>
              <td>12:00 - 14:30</td>
            </tr>

            <tr>
              <td>Mardi</td>
              <td>12:00 - 14:30</td>
            </tr>

            <tr>
              <td>Mercredi</td>
              <td>12:00 - 14:30</td>
            </tr>

            <tr>
              <td>Jeudi</td>
              <td>12:00 - 14:30</td>
            </tr>

            <tr>
              <td>Vendredi</td>
              <td>12:00 - 14:30</td>
              <td>18:00 - 23:00</td>
            </tr>

            <tr>
              <td>Samedi</td>
              <td>12:00 - 14:30</td>
              <td>18:00 - 23:00</td>
            </tr>


            <tr>
              <td>Dimanche</td>
              <td>FERMÉ</td>
            </tr>
            
          </table>
        </section>
    </aside>
  );
}

export default AsideLeftContact;