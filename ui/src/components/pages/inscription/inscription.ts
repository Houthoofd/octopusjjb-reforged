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
            <span class="step-name">Informations personnelles</span>
          </div>
          <div class="step-line ${inscription.currentStep >= 2 ? 'active' : ''}"></div>
          <div class="step-container">
            <div class="step-indicator ${inscription.currentStep >= 2 ? 'active' : ''}"></div>
            <span class="step-name">Détails de connexion</span>
          </div>
          <div class="step-line ${inscription.currentStep >= 3 ? 'active' : ''}"></div>
          <div class="step-container">
            <div class="step-indicator ${inscription.currentStep >= 3 ? 'active' : ''}"></div>
            <span class="step-name">Confirmation</span>
          </div>
        </div>
        <div class="inscription-form">
          <div class="step">
            ${inscription.currentStep === 1
              ? html`
                  <h2>Informations personnelles</h2>
                  <div class="row">
                    <div class="input-field">
                      <label for="name">Nom</label>
                      <input type="text" id="name" name="name" />
                    </div>
                    <div class="input-field">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field">
                      <label for="name">Prénom</label>
                      <input type="text" id="name" name="name" />
                    </div>
                    <div class="input-field">
                      <label for="email">Date de naissance</label>
                      <input type="date" id="email" name="email" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="dropdown">
                      <label for="genre">Genre</label>
                      <select id="genre" name="cars">
                        <option value=""></option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                      </select>
                    </div>
                    <div class="dropdown">
                      <label for="tarifs">Plan tarifaire</label>
                      <select id="tarifs" name="cars">
                        <option value=""></option>
                        <option value="mensuel">Mensuel : 30 euros</option>
                        <option value="trimestriel">Trimestriel : 100 euros</option>
                        <option value="annuel">Annuel : 250 euros</option>
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
                      <input type="text" id="username" name="username" />
                    </div>
                    <div class="input-field">
                      <label for="password">Mot de passe</label>
                      <input type="password" id="password" name="password" />
                    </div>
                  </div>
                `
              : ''}
            ${inscription.currentStep === 3
              ? html`
                  <h2>Confirmation</h2>
                  <p>Vérifiez les informations que vous avez fournies avant de soumettre.</p>
                  <ul>
                    <li>Nom : ${inscription.getValueById('name')}</li>
                    <li>Email : ${inscription.getValueById('email')}</li>
                    <li>Nom d'utilisateur : ${inscription.getValueById('username')}</li>
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
              ? html`<button @click="${inscription.submitForm}">Soumettre</button>`
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
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
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
        height: 400px;
        width: 100%;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
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

      /* Styles pour les indicateurs d'étapes et lignes connectées */
      .step-indicators {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        margin-left: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .step-container {
        display: flex;
        align-items: center;
      }

      .step-indicator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 10px;
      }

      .step-indicator.active {
        background-color: #4caf50;
        color: white;
      }

      .step-name {
        font-size: 16px;
      }

      .step-line {
        width: 4px;
        height: 110px; /* Ajustez la hauteur des lignes */
        background-color: #ddd;
        margin-left: 18px; /* Aligner avec les cercles */
      }

      .step-line.active {
        background-color: #4caf50;
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
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      select {
        padding: 9px 10px;
        width: 25ch;
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
    `,
  ],
})

export class Inscription extends WebComponent {
  @state() currentStep: number = 1;


  @attr() step: "true" | "false" | null = null;

  // Méthode pour changer d'étape
  goToStep(step: number) {
    if (step >= 1 && step <= 3) {
      this.currentStep = step;
    }
  }

  // Méthode pour obtenir la valeur d'un champ de formulaire par son ID
  getValueById(id: string): string {
    const input = this.shadowRoot.getElementById(id) as HTMLInputElement;
    return input ? input.value : '';
  }

  // Méthode pour soumettre le formulaire
  submitForm() {
    console.log('Formulaire soumis avec succès');
    // Logique de traitement des données du formulaire
  }

  // Méthode pour gérer la connexion avec Google
  connectedCallback() {
    super.connectedCallback();
    //this.loadGoogleSignIn();
  }

  // loadGoogleSignIn() {
  //   const googleSignInContainer = this.shadowRoot.getElementById('google-signin-container');
    
  //   // Initialiser le bouton Google Sign-In après que le script a été chargé
  //   google.accounts.id.initialize({
  //     client_id: 'YOUR_GOOGLE_CLIENT_ID',
  //     callback: (response: any) => this.handleGoogleSignIn(response)
  //   });

  //   google.accounts.id.renderButton(
  //     googleSignInContainer,
  //     { theme: 'outline', size: 'large' }  // options
  //   );
  // }

  // handleGoogleSignIn(response: any) {
  //   const credential = response.credential;
  //   const userInfo = this.parseJwt(credential);
    
  //   // Remplir les champs du formulaire avec les informations Google
  //   (this.shadowRoot.getElementById('name') as HTMLInputElement).value = userInfo.name;
  //   (this.shadowRoot.getElementById('email') as HTMLInputElement).value = userInfo.email;
  // }

  // parseJwt(token: string) {
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   const jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split('')
  //       .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
  //       .join('')
  //   );
  //   return JSON.parse(jsonPayload);
  // }
}


