import '../../components/AsideRightContact/AsideRightContact.css';

function AsideRightContact() {
  return (
    <aside className='asideRight'>
        <section>
          <h2>Numéro de téléphone du restaurant</h2>
          <p>03 20 23 84 65</p>
        </section>
        <section>
          <h2>Horaire d'ouverture</h2>
          <table>
            <tbody>
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
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>18:00 - 23:00</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>12:00 - 14:30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>18:00 - 23:00</td>
              </tr>
              <tr>
                <td>Dimanche</td>
                <td><span>FERMÉ</span></td>
              </tr>
            </tbody>
            
          </table>
      </section>

      <figcaption>
          <img src="../img/laTableDeChantal.jpg" alt="restaurant la Table de Chantal" />
        </figcaption>

        <button>Réservation</button>
    </aside>
  );
}

export default AsideRightContact;