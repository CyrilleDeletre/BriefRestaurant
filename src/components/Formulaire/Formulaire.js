import './Formulaire.css';

function Formulaire() {
  return (
<form id="validation">
        <fieldset>
            <legend>Contactez nous</legend>

            <section className="inputcss">
                <div>
                    <label htmlFor="lastname">Nom<span>*</span> : </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Martin"
                    />
                    <span id="errorName"></span>
                </div>

                <div>
                    <label htmlFor="firstname">Prénom<span>*</span> : </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Marie"
                    />
                    <span id="error2Name"></span>
                </div>
            </section>

            <section className="inputcss">
                <div>
                    <label htmlFor="birthdate">Date de naissance :</label>
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        min="1900-01-01"
                        max="2010-01-30"
                    />
                </div>

                <div>
                    <label htmlFor="email">Adresse mail<span>*</span> : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="prenom.nom@gmail.com"
                        pattern="[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})"
                        required
                    />
                </div>
            </section>

            <section className="textareacss">
                <div>
                    <label htmlFor="message">Votre message<span>*</span> :</label>
                    <textarea
                        
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        placeholder='Votre message'
                    >
                    </textarea>
                </div>
            </section>

            <section className="cgu">
                <div>
                    <label htmlFor="cgu">CGU<span>*</span> :</label>
                    <input
                        type="checkbox"
                        name="cgu"
                        id="cgu"
                        required
                    />
                </div>
            </section>

            <section className="buttonValidation">
                <div>
                    <button type="submit">Validation</button>
                </div>
            </section>

            <p>
                <em>Les champs marqués par <span>*</span> sont obligatoires.</em>
            </p>
        </fieldset>
    </form>
  );
}

export default Formulaire;