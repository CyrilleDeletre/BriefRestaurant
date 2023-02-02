import './Formulaire.css';

function Formulaire() {
  return (
<form id="validation">
        <fieldset>
            <legend>Inscrivez-vous</legend>

            <section class="inputcss">
                <div>
                    <label for="lastname">Nom<span>*</span> : </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Martin"
                    />
                    <span id="errorName"></span>
                </div>

                <div>
                    <label for="firstname">Prénom<span>*</span> : </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Marie"
                    />
                    <span id="error2Name"></span>
                </div>
            </section>

            <section class="inputcss">
                <div>
                    <label for="birthdate">Date de naissance<span>*</span> :</label>
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        min="1900-01-01"
                        max="2010-01-30"
                        required
                    />
                </div>

                <div>
                    <label for="email">Adresse mail<span>*</span> : </label>
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

            <section class="inputcss">
                <div>
                    <label for="password">Mot de passe<span>*</span> :</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="1234ABCDabcd@"
                        required
                    />
                </div>


                <div>
                    <label for="passwordConfirmation">Confirmation du mot de passe<span>*</span> :</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        id="passwordConfirmation"
                        placeholder="1234ABCDabcd@"
                        required
                    />
                </div>
            </section>



            <section class="cgu">
                <div>
                    <label for="cgu">CGU<span>*</span> :</label>
                    <input
                        type="checkbox"
                        name="cgu"
                        id="cgu"
                        required
                    />
                </div>
            </section>

            <section>
                <div>
                    <button type="submit">Validation</button>
                </div>
            </section>

            <p>
                <em>Les accents ne sont pas autorisés.</em>
                <em>En cas de nom composé, utilisez un tiret au lieu d'un espace.</em>
                <em>Les champs marqués par <span>*</span> sont obligatoires.</em>
            </p>
        </fieldset>
    </form>
  );
}

export default Formulaire;