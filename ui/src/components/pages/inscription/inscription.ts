import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'page-inscription',
  template: html`${(inscription: Inscription) => {
    return html`
      <div id="inscription">
        <!-- Indicateurs d'étapes avec connexion verticale -->
        <div class="step-indicators">
          <div class="step-container">
            <div class="step-indicator ${inscription.currentStep >= 1 ? 'active' : ''}"></div>
            <span class="step-name ${inscription.currentStep >= 1 ? 'active' : ''}">Informations personnelles</span>
          </div>
          <div class="step-line ${inscription.currentStep >= 2 ? 'active' : ''}"></div>
          <div class="step-container">
            <div class="step-indicator ${inscription.currentStep >= 2 ? 'active' : ''}"></div>
            <span class="step-name ${inscription.currentStep >= 2 ? 'active' : ''}">Détails de connexion</span>
          </div>
          <div class="step-line ${inscription.currentStep >= 3 ? 'active' : ''}"></div>
          <div class="step-container">
            <div class="step-indicator ${inscription.currentStep >= 3 ? 'active' : ''}"></div>
            <span class="step-name ${inscription.currentStep >= 3 ? 'active' : ''}">Confirmation</span>
          </div>
        </div>
        <div class="inscription-form">
          <div class="step">
            ${inscription.currentStep === 1
              ? html`
                  <h2>Informations personnelles</h2>
                  <div class="row">
                    <div class="input-field">
                      <label for="nom">Nom</label>
                      <input type="text" id="nom" name="nom" value="${inscription.nom}"/>
                    </div>
                    <div class="input-field">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" value="${inscription.email}"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field">
                      <label for="prenom">Prénom</label>
                      <input type="text" id="prenom" name="prenom" value="${inscription.prenom}"/>
                    </div>
                    <div class="input-field">
                      <label for="date-de-naissance">Date de naissance</label>
                      <input type="date" id="date-de-naissance" name="date-de-naissance" value="${inscription.date_de_naissance}"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="dropdown">
                      <label for="genre">Genre</label>
                      <select id="genre" name="genre">
                        <option value="homme" ?selected="${inscription.genre === 'homme'}">Homme</option>
                        <option value="femme" ?selected="${inscription.genre === 'femme'}">Femme</option>
                      </select>
                    </div>
                    <div class="dropdown">
                      <label for="tarifs">Plan tarifaire</label>
                      <select id="tarifs" name="tarifs">
                        <option value="mensuel" ?selected="${inscription.plan_tarifaire === 'mensuel'}">Mensuel : 30 euros</option>
                        <option value="trimestriel" ?selected="${inscription.plan_tarifaire === 'trimestriel'}">Trimestriel : 100 euros</option>
                        <option value="annuel" ?selected="${inscription.plan_tarifaire === 'annuel'}">Annuel : 250 euros</option>
                      </select>
                    </div>
                  </div>
                `
              : ''}
            ${inscription.currentStep === 2
              ? html`
                  <h2>Détails de connexion</h2>
                  <div class="row">
                    <div class="input-field">
                      <label for="username">Nom d'utilisateur</label>
                      <input type="text" id="username" name="username" value="${inscription.nom_utilisateur}"/>
                    </div>
                    <div class="input-field">
                      <label for="password">Mot de passe</label>
                      <input type="password" id="password" name="password" value="${inscription.password}"/>
                    </div>
                  </div>
                `
              : ''}
            ${inscription.currentStep === 3
              ? html`
                  <h2>Confirmation</h2>
                  <p>Vérifiez les informations que vous avez fournies avant de soumettre.</p>
                  <ul>
                    <li>Nom : ${inscription.nom}</li>
                    <li>Prénom : ${inscription.prenom}</li>
                    <li>E-mail : ${inscription.email}</li>
                    <li>Date de naissance : ${inscription.date_de_naissance}</li>
                    <li>Genre : ${inscription.genre}</li>
                    <li>Plan tarifaire : ${inscription.plan_tarifaire}</li>
                    <li>Nom d'utilisateur : ${inscription.nom_utilisateur}</li>
                    <li>Mot de passe : ${inscription.password}</li>
                  </ul>
                `
              : ''}
          </div>

          <div class="navigation">
            <button
              @click="${() => inscription.goToStep(inscription.currentStep - 1)}"
              ?disabled="${inscription.currentStep === 1}"
            >
              Précédent
            </button>
            ${inscription.currentStep === 3
              ? html`<button @click="${() => inscription.submitForm()}">Soumettre</button>`
              : html`
                  <button
                    @click="${() => inscription.goToStep(inscription.currentStep + 1)}"
                    ?disabled="${inscription.currentStep === 3}"
                  >
                    Suivant
                  </button>
                `}
          </div>
          <span id="divider">
            <div class="line"></div>
            <div class="divider-text">ou</div>
            <div class="line"></div>
          </span>
          <div class="google-register">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              </button>
          </div>
        </div>
      </div>
    `;
  }}`,
  styles: [
    css`
      #inscription {
        height: auto;
        justify-content: space-around;
        position: absolute;
        right: 25%;
        top: 25%;
        display: grid;
        grid-template-columns: 350px 500px;
        font-family: Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      }
      .inscription-form {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        gap: 20px;
        height: 100%;
      }
      .step {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;
        gap: 20px;
        height: 450px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: space-between;
      }
      .navigation {
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
        margin-left: 15px;
      }
      button {
        padding: 10px 10px;
        font-size: 16px;
        width: 15ch;
        background-color: #005eff;
        border: none;
        color: #ffffff;
        border-radius: 5px;
      }
      button.loading {
  position: relative;
  color: transparent; /* Masquer le texte du bouton */
}

button.loading::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #FFF;
  animation: spin 1s linear infinite;
}

/* Animation pour faire tourner le loader */
@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

      /* Styles pour les indicateurs d'étapes et lignes connectées */
      .step-indicators {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        margin-left: 15px;
        margin-top: 28px;
        margin-bottom: 15px;
      }

      .step-container {
        display: flex;
        align-items: center;
      }

      .step-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 10px;
      }

      .step-indicator.active {
        background-color: #ffff;
        border: 1px solid #005eff;
      }

      .step-name {
        font-size: 14px;
        color: #b1b3bc;
      }
      .step-name.active{
        color: #005eff;
      }

      .step-line {
        width: 2px;
        height: 110px; /* Ajustez la hauteur des lignes */
        background-color: #d3ddeb;
        margin-left: 5px; /* Aligner avec les cercles */
      }

      .step-line.active {
        background-color: #005eff;
      }

      .input-field {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .input-field label {
        color: #b1b3bc;
        font-size: 13px;
      }
      input[type='text'] {
        padding: 10px 10px;
        width: 27ch;
        border: 1px solid #e2e8f1;
        border-radius: 5px;
      }
      input[type='email'] {
        padding: 10px 10px;
        width: 27ch;
        border: 1px solid #e2e8f1;
        border-radius: 5px;
      }
      input[type='password'] {
        padding: 10px 10px;
        width: 27ch;
        border: 1px solid #e2e8f1;
        border-radius: 5px;
      }
      input[type='date'] {
        padding: 9px 10px;
        width: 27ch;
        border: 1px solid #e2e8f1;
        border-radius: 5px;
        color: #b1b3bc;

        svg {
          fill: #b1b3bc;
        }
      }

      input[type='date']::placeholder {
        color: #888;
      }

      input[type='date']:focus,
      input[type='password']:focus,
      input[type='text']:focus,
      input[type='email']:focus,
      select {
        border-color: #005eff;
        outline: none;
      }
      .dropdown{
        color: #b1b3bc;
        display: flex;
        flex-direction: column;
      }
      select {
        padding: 9px 10px;
        width: 30ch;
        border-radius: 5px;
        background-color: #ffffff;
        border: 1px solid #e2e8f1;
        color: #b1b3bc;
      }
      span#divider {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        margin-left: 15px;
        margin-right: 15px;
      }
      span#divider > .line {
        width: 100%;
        height: 1px;
        background-color: #e2e8f1;
      }
      .google-register {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
      }
      .google-register > button{
        background-color: #ffffff;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        width: 70px;
      }
      .divider-text {
        color: #b1b3bc;
      }
    `,
  ],
})

export class Inscription extends WebComponent {
  @state() currentStep: number = 1;


  @attr() step: "true" | "false" | null = null;

  nom: string = "";
  prenom: string = "";
  date_de_naissance: string = "";
  email: string = "";
  genre: string = "";
  plan_tarifaire: string = "";
  nom_utilisateur: string = "";
  password: string = "";

  firstUpdated() {
    // Synchroniser la valeur du genre avec le select
    const genreElement = this.shadowRoot?.getElementById('genre') as HTMLSelectElement;
    if (genreElement && this.genre) {
      genreElement.value = this.genre; // Définir la valeur sélectionnée pour genre
    }
    
    // Ajouter un écouteur pour mettre à jour genre lorsqu'une nouvelle valeur est sélectionnée
    if (genreElement) {
      genreElement.addEventListener('change', (event) => {
        this.genre = (event.target as HTMLSelectElement).value; // Mettre à jour genre
      });
    }
  
    // Synchroniser la valeur du plan tarifaire avec le select
    const tarifsElement = this.shadowRoot?.getElementById('tarifs') as HTMLSelectElement;
    if (tarifsElement && this.plan_tarifaire) {
      tarifsElement.value = this.plan_tarifaire; // Définir la valeur sélectionnée pour plan_tarifaire
    }
  
    // Ajouter un écouteur pour mettre à jour plan_tarifaire lorsqu'une nouvelle valeur est sélectionnée
    if (tarifsElement) {
      tarifsElement.addEventListener('change', (event) => {
        this.plan_tarifaire = (event.target as HTMLSelectElement).value; // Mettre à jour plan_tarifaire
      });
    }
  }
  

  goToStep(step: number) {
    if (this.currentStep === 1) {
      this.nom = this.getValueById('nom');
      this.prenom = this.getValueById('prenom');
      this.date_de_naissance = this.getValueById('date-de-naissance');
      this.email = this.getValueById('email');
      this.genre = this.getValueById('genre');
      this.plan_tarifaire = this.getValueById('tarifs');
    } else if (this.currentStep === 2) {
      this.nom_utilisateur = this.getValueById('username');
      this.password = this.getValueById('password');
    }
    
    if (step >= 1 && step <= 3) {
      this.currentStep = step;
    }
  }

  getValueById(id: string): string {
    const input = this.shadowRoot.getElementById(id);
    if (input instanceof HTMLSelectElement) {
      return input.value; // Récupérer la valeur d'un select
    } else if (input instanceof HTMLInputElement) {
      return input.value; // Récupérer la valeur d'un input classique
    }
    return ''; // Retourner une valeur vide si l'élément n'est pas trouvé
  }

  submitForm(){
    const submitBtn = this.shadowRoot?.querySelectorAll("button")[1] as HTMLButtonElement;
    console.log(this.nom, this.prenom, this.email, this.genre, this.date_de_naissance, this.plan_tarifaire, this.nom_utilisateur, this.password)
    if (submitBtn) {
      const originalText = submitBtn.innerText;
  
      submitBtn.classList.add('loading');
      submitBtn.innerText = '';
      submitBtn.disabled = true;
  
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.innerText = 'Inscription réussie !';
        submitBtn.disabled = false;
        setTimeout(() => {
          submitBtn.innerText = originalText; 
        }, 3000);
      }, 2000);
    } else {
      console.error('Le bouton de soumission n\'a pas été trouvé');
    }
  }
}


