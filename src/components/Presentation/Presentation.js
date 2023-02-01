import '../Presentation/Presentation.css';

const Presentation = () => {
    return (
        <div className='presentation'>

            <div className='texte_presentation'>
                <h2 className='titre_presentation'>La table de Chantal</h2>
                <p className='soustitre_presentation'>Une équipe au service de sa clientèle</p>
                <p className='contenu_presentation'>La table de Chantal a été créé en décembre 2017 par Mme Laobie. Après un BTS en cuisine et plusieurs années 
                    dans la restauration, il se lance à son compte avec quelques actionnaires. L’entrepreneur rachètera leur 
                    part en 2020 pour être le seul à la tête de son entreprise. Il collabore encore aujourd’hui avec des chefs 
                    du Nord et une équipe fixe qui assure la convivialité de son établissement. Mme Laobie souhaite créer une 
                    certaine proximité avec ses clients afin de leur assurer un maximum de confort.
                </p>
            </div>

            <img src='/img/table.jpg' alt="Logo HubSpot"></img>

        </div>
    )
}
export default Presentation