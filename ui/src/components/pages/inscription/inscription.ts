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
          <div class="step-indicator ${inscription.currentStep >= 1 ? 'active' : ''}">
            1
          </div>
          <div class="step-line ${inscription.currentStep >= 2 ? 'active' : ''}"></div>
          <div class="step-indicator ${inscription.currentStep >= 2 ? 'active' : ''}">
            2
          </div>
          <div class="step-line ${inscription.currentStep >= 3 ? 'active' : ''}"></div>
          <div class="step-indicator ${inscription.currentStep >= 3 ? 'active' : ''}">
            3
          </div>
        </div>
        <div class="inscription-form">
          <div class="step">
            ${inscription.currentStep === 1
              ? html`
                  <h2>Étape 1 : Informations personnelles</h2>
                  <label for="name">Nom :</label>
                  <input type="text" id="name" name="name" />
                  <label for="email">Email :</label>
                  <input type="email" id="email" name="email" />
                `
              : ''}
            ${inscription.currentStep === 2
              ? html`
                  <h2>Étape 2 : Détails de connexion</h2>
                  <label for="username">Nom d'utilisateur :</label>
                  <input type="text" id="username" name="username" />
                  <label for="password">Mot de passe :</label>
                  <input type="password" id="password" name="password" />
                `
              : ''}
            ${inscription.currentStep === 3
              ? html`
                  <h2>Étape 3 : Confirmation</h2>
                  <p>Vérifiez les informations que vous avez fournies avant de soumettre.</p>
                  <ul>
                    <li>Nom : ${inscription.getValueById('name')}</li>
                    <li>Email : ${inscription.getValueById('email')}</li>
                    <li>Nom d'utilisateur : ${inscription.getValueById('username')}</li>
                  </ul>
                  <button @click="${inscription.submitForm}">Soumettre</button>
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
            <button
              @click="${() => inscription.goToStep(inscription.currentStep + 1)}"
              ?disabled="${inscription.currentStep === 3}"
              >
              Suivant
            </button>
          </div>
        </div>
      </div>
    `;
  }}`,
  styles: [
    css`
      #inscription {
        display: flex;
      }
      .step {
        margin-bottom: 20px;
      }
      .navigation {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      button {
        padding: 10px;
        font-size: 16px;
      }

      /* Styles pour les indicateurs d'étapes et lignes connectées */
      .step-indicators {
        display: flex;
        flex-direction: column; /* Orientation verticale */
        justify-content: space-between;
        align-items: center;
        width: 250px;
        position: relative;
        margin-bottom: 20px;
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
        position: relative;
        z-index: 1;
        margin: 0; /* Suppression de la marge */
      }

      .step-indicator.active {
        background-color: #4caf50;
        color: white;
      }

      .step-line {
        width: 4px; /* Lignes plus fines pour le format vertical */
        height: 50px; /* Ajustez la hauteur des lignes */
        background-color: #ddd;
        position: relative;
        z-index: 0;
        margin: 0; /* Suppression de la marge */
      }

      .step-line.active {
        background-color: #4caf50;
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


