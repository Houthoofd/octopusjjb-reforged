var e=globalThis,o={},i={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){i[e]=o},e.parcelRequirec605=t);var s=t.register;s("7KTRf",function(e,o){t("lnjTs"),t("6D2jc"),t("eUTkO"),t("3T3Tr"),t("jcBBX"),t("augsA"),t("4cMYp"),t("hmMWw"),t("3d3pD"),t("3Bkhj")}),s("lnjTs",function(e,o){t("augsA")}),s("augsA",function(e,o){var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA");var a=t("keLaC");class r extends s.WebComponent{attributeChangedCallback(e,o,i){super.attributeChangedCallback(e,o,i)}handleEmailInput(e){let o=this.shadowRoot?.querySelectorAll("input"),i=o?.[0].value||"";this.Mail=i,this.validateForm()}handlePasswordInput(e){let o=this.shadowRoot?.querySelectorAll("input"),i=o?.[1].value||"";console.log(i),this.Password=i,this.validateForm()}validateForm(){console.log(this.Mail,this.Password),this.isFormValid=""!==this.Mail&&""!==this.Password,this.errorMessage=this.isFormValid?null:"Veuillez entrer à la fois un email et un mot de passe."}async sendData(){if(this.isFormValid){let e={email:this.Mail,password:this.Password};console.log(e);try{let o=await fetch(`${a.url}connexion/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});if(o.ok){let e=await o.json();console.log("Connexion réussie",e),console.log(e);let i={last_name:e.userData.nom,first_name:e.userData.prenom,email:e.userData.email,role:e.userData.role,isloged:e.userData.isloged};localStorage.setItem("userData",JSON.stringify(i)),alert("connexion réussie"),setTimeout(()=>{window.location.href="/pages/cours"},1e3),e.token?(console.log("Token JWT:",e.token),localStorage.setItem("token",e.token)):console.error("Erreur de connexion")}else console.error("Erreur lors de la connexion :",o.statusText),this.errorMessage="Échec de la connexion. Veuillez vérifier vos informations."}catch(e){console.error("Erreur lors de la requête :",e),this.errorMessage="Une erreur est survenue. Veuillez réessayer plus tard."}}else this.errorMessage="Veuillez remplir tous les champs."}handleLogin(){this.validateForm(),this.isFormValid&&this.sendData()}toggleRememberMe(){this.rememberMe=!this.rememberMe}constructor(...e){super(...e),this.email="",this.password="",this.rememberMe=!1,this.isFormValid=!1,this.errorMessage=null,this.isCustom=!1,this.Mail="",this.Password=""}}(0,i.__decorate)([(0,s.state)()],r.prototype,"email",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"password",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"rememberMe",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"isFormValid",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"errorMessage",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"isCustom",void 0),(0,i.__decorate)([(0,s.customElement)({name:"login-page",template:(0,s.html)`${e=>(0,s.html)`
      <div class="login">
        <div class="header">
          <h1>Log in to your account</h1>
        </div>
        <div class="main-body">
          <div class="input-field">
            <pf-icons-envelope></pf-icons-envelope>
            <input 
              type="email" 
              placeholder="Email" 
              @input="${e=>e.handleEmailInput()}" 
              value="${e.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${e=>e.handlePasswordInput()}" 
              value="${e.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!e.isFormValid}"
            @click="${()=>e.handleLogin()}"
          >
            Log in
          </button>
        </div>
        <div class="remember-password">
          <div class="radio">
            <input 
              type="radio" 
              @change="${()=>e.toggleRememberMe()}" 
              ?checked="${e.rememberMe}"
            >
            <label for="remember me">Remember me</label>
          </div>
          <a href="../password">Forgot password?</a>
        </div>
        <div class="footer">
          <span>Don't have an account? <a href="../inscriptions">Create an account</a></span>
        </div>
        ${e.errorMessage?(0,s.html)`<div class="error-message">${e.errorMessage}</div>`:""}
      </div>
    `}`,styles:[(0,s.css)`
      .login{
        width: 500px;
        height: 500px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 5px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-login:hover{
        background-color: #004080;
      }
      .remember-password {
        display: flex;
        gap: 50px;
      }
      .radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `],shadowOptions:{mode:"open"}})],r)}),s("6D2jc",function(e,o){t("4cMYp")}),s("4cMYp",function(e,o){var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA");var a=t("keLaC");class r extends s.WebComponent{handleDropDownValueTarif(e){let o=this.shadowRoot?.getElementById("dropdownButtonPrice"),i=this.shadowRoot?.getElementById("dropdownMenu");o.textContent=`${e.nom_plan} - ${e.prix} \u{20AC}`,this.tarif=e.nom_plan,console.log(this.tarif),"none"===i.style.display||""===i.style.display?i.style.display="block":i.style.display="none"}handleDropDownValueGenre(e){let o=this.shadowRoot?.getElementById("dropdownButtonGenre"),i=this.shadowRoot?.getElementById("dropdownMenu");o.textContent=`${e.genre}`,this.genre=e.genre,console.log(this.genre),"none"===i.style.display||""===i.style.display?i.style.display="block":i.style.display="none"}async preloadData(e){console.log(e);try{let o=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});if(!o.ok)throw Error("Erreur serveur lors de la récupération des plans tarifaires.");let i=await o.json();return console.log("Plans tarifaires reçus:",i),i.length>0?i:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}handleEmailBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[0]).value||"";o.includes("@")?(console.log("Email valide"),this.isEmailValid=!0,this.email=o,console.log(this.email)):(console.log('L\'email doit contenir le caractère "@"'),this.isEmailValid=!1)}handlePasswordBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[1]).value||"",i=this.CheckStrength(o);i?(console.log(i),this.isPasswordValid=!1):(console.log("Mot de passe valide"),this.isPasswordValid=!0,this.password=o,console.log(this.password))}CheckStrength(e){return e.length<6||e.length>20?`Le mot de passe doit comporter entre 6 et 20 caract\xe8res.`:/[!@#\$%\^\&*\)\(+=._-]+/.test(e)?/[A-Z]/.test(e)?/[0-9]/.test(e)?null:"Le mot de passe doit contenir au moins un chiffre.":"Le mot de passe doit contenir au moins une majuscule.":"Le mot de passe doit contenir au moins un caractère spécial."}handleConfirmPasswordBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[2]).value||"";console.log(this.password,o),o!==this.password?(console.log("Les mots de passe ne correspondent pas"),this.isConfirmPasswordIsValid=!1):(console.log("Les mots de passe correspondent"),this.isConfirmPasswordIsValid=!0,this.confPassword=o)}handleDateBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[3]).value||"";this.date=o}handleFirstNameBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[4]).value||"";this.firstName=o}handleLastNameBlur(){let e=this.shadowRoot?.querySelectorAll("input"),o=(e?.[5]).value||"";this.lastName=o}checkValidity(){let e={};return this.email?(e.email=this.email,this.password)?(e.password=this.password,this.date)?(e.date=this.date,this.firstName)?(e.firstName=this.firstName,this.lastName)?(e.lastName=this.lastName,this.tarif)?(e.tarif=this.tarif,this.genre)?(e.genre=this.genre,console.log("Données du formulaire valides:",e),console.log(e.genre,e.tarif),e):(console.log("Le sexe est manquant."),null):(console.log("Le choix d'abonnement manquant."),null):(console.log("Le nom de famille est manquant."),null):(console.log("Le prénom est manquant."),null):(console.log("La date est manquante."),null):(console.log("Le mot de passe est manquant."),null):(console.log("L'email est manquant."),null)}async sendData(){let e=this.checkValidity();if(!e){console.log("Données invalides, la requête ne sera pas envoyée.");return}console.log("Envoi des données:",e);try{let o=await fetch(`${a.url}inscriptions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});o.ok?(await o.text(),alert("Utilisateur enregistré avec succès !"),window.location.href="/pages/connexion"):(console.error("Erreur lors de l'enregistrement :",o.statusText),alert("Une erreur s'est produite. Veuillez réessayer."))}catch(e){console.error("Erreur lors de la requête :",e),alert("Impossible d'enregistrer la réservation.")}}constructor(...e){super(...e),this.valid=null,this.invalid=null,this.isEmailValid=null,this.isPasswordValid=null,this.isStrongPassword=null,this.isConfirmPasswordIsValid=null,this.email="",this.password="",this.confPassword="",this.date="",this.firstName="",this.lastName="",this.genre="",this.tarif=""}}(0,i.__decorate)([(0,s.state)()],r.prototype,"valid",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"invalid",void 0),(0,i.__decorate)([(0,s.attr)()],r.prototype,"isEmailValid",void 0),(0,i.__decorate)([(0,s.attr)()],r.prototype,"isPasswordValid",void 0),(0,i.__decorate)([(0,s.attr)()],r.prototype,"isStrongPassword",void 0),(0,i.__decorate)([(0,s.attr)()],r.prototype,"isConfirmPasswordIsValid",void 0),(0,i.__decorate)([(0,s.customElement)({name:"inscription-page",template:(0,s.html)`${e=>(0,s.html)`
      <div class="register">
        <div class="header">
          <h1>Create a new account</h1>
        </div>
        <div class="main-body">
          
          <div class=${["input-field",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="Email"
              @blur="${()=>e.handleEmailBlur()}" 
              required 
              value="${e.email||""}">

            <div class="${["info",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}">
              ${null===e.isEmailValid?"":e.isEmailValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>





      
          <div class=${["input-field",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>e.handlePasswordBlur()}" 
              required 
              value="${e.password||""}">

            <div class="${["info",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}">
              ${null===e.isPasswordValid?"":e.isPasswordValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse mot de passe doit contenir le caractère</span>`}
            </div>
          </div>

        
          <div class=${["input-field",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>e.handleConfirmPasswordBlur()}" 
              required 
              value="${e.confPassword||""}">

            <div class="${["info",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}">
              ${null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @blur="${()=>{e.handleDateBlur()}}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @blur="${()=>{e.handleFirstNameBlur()}}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom" 
              @blur="${()=>{e.handleLastNameBlur()}}"
              required>
          </div>

          <div class="dropdown">
            <details>
            <summary id="dropdownButtonPrice">Choisir un plan</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${(0,s.asyncAppend)(e.preloadData(`${a.url}informations/abonnement`),o=>(0,s.html)`${(0,s.repeat)(o,(0,s.html)`${o=>(0,s.html)`<div class="dropdown-item" data-plan="${o.nom_plan}" data-prix="${o.prix}" @click="${o=>e.handleDropDownValueTarif(o)}">
                      ${o.nom_plan} - ${o.prix} €
                    </div>`}`)}`)}
            </div>
          </details>
        </div>

        <div class="dropdown">
            <details>
            <summary id="dropdownButtonGenre">Choisir un genre</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${(0,s.asyncAppend)(e.preloadData(`${a.url}informations/gender`),o=>(0,s.html)`${(0,s.repeat)(o,(0,s.html)`${o=>(0,s.html)`<div class="dropdown-item" data-plan="${o.genre}" @click="${o=>e.handleDropDownValueGenre(o)}">
                      ${o.genre}
                    </div>`}`)}`)}
            </div>
          </details>
        </div>


          
          <button class="button-register"
            type="submit"
            @click="${()=>e.sendData()}">Inscription</button>
        </div>

        <div class="footer">
          <span>Already have an account? <a href="../connexion">Log in</a></span>
        </div>
      </div>
    `}`,styles:[(0,s.css)`
      .register{
        width: 500px;
        height: 800px;
        background-color: #ffffff;
        position: absolute;
        top: 10%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 3px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      /* Style quand l'email est valide */
      input[type="email"]:valid {
        background-color: #f1f8e9 !important;
      }

      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="date"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="date"]::placeholder {
        color: #a2adbe;
      }
      input[type="text"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="text"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-register {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-register:hover{
        background-color: #004080;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
      .error {
        color: red;
        font-size: 12px;
      }
      .password-strength {
        height: 8px;
        background-color: #e0e0e0;
        margin-top: 5px;
        border-radius: 4px;
      }
      .strength-bar {
        height: 100%;
        background-color: #76c7c0;
        border-radius: 4px;
        transition: width 0.3s ease-in-out;
      }
      .valide{
        color: #3e8635;
      }
      .info{
        display: none;
      }
      .info.default .valide,
      .info.default span {
        display: none; /* Rien n'est affiché par défaut */
      }

      .info.valid .valide {
        display: block; /* Affiche l'icône de validation */
      }

      .info.invalid .valide {
        display: none; /* Masque l'icône en cas d'email invalide */
      }

      .info.invalid span {
        display: block; /* Affiche le message d'erreur */
      }
      .input-field-valide{
        background-color: #f1f8e9;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-field-invalide{
        background-color: #ffebee;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-valide{
        background-color: #f1f8e9; 
      }
      .input-invalide{
        background-color: #ffebee;
      }
      /* Conteneur du dropdown */
.dropdown {
  position: relative;
    display: inline-block;
    /* width: 100%; */
    border: 1px solid #eff3f8;
    padding: 20px 10px;
    border-radius: 3px;
    background-color: #fafbfe;
}

/* Bouton du dropdown */
.dropdown-toggle {
      background-color: #fafbfe;
  color: #a2adcd;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

/* Liste cachée par défaut */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

/* Eléments du dropdown */
.dropdown-item {
  padding: 12px 16px;
  text-align: left;
  color: black;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

/* Changer la couleur au survol */
.dropdown-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Affichage du menu lorsque l'utilisateur clique sur le bouton */
.dropdown:hover .dropdown-menu {
  display: block;
}

summary#dropdownButtonPrice {
  color: #a2adcd;
}
summary#dropdownButtonGenre {
    color: #a2adcd;
}


    `],shadowOptions:{mode:"open"}})],r)}),s("eUTkO",function(e,o){t("hmMWw")}),s("hmMWw",function(e,o){var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA");var a=t("keLaC");class r extends s.WebComponent{attributeChangedCallback(e,o,i){super.attributeChangedCallback(e,o,i)}handleEmailInput(e){let o=this.shadowRoot?.querySelectorAll("input"),i=o?.[0].value||"";this.Mail=i,this.validateForm()}handlePasswordInput(e){let o=this.shadowRoot?.querySelectorAll("input"),i=o?.[1].value||"";console.log(i),this.Password=i,this.validateForm()}validateForm(){console.log(this.Mail,this.Password),this.isFormValid=""!==this.Mail&&""!==this.Password,this.errorMessage=this.isFormValid?null:"Veuillez entrer à la fois un email et un mot de passe."}async sendData(){if(this.isFormValid){let e={email:this.Mail,newpassword:this.Password};console.log(e);try{let o=await fetch(`${a.url}password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(o.ok){let e=await o.json();console.log(e),window.location.href="/pages/connexion"}else console.error("Erreur lors de la connexion :",o.statusText),this.errorMessage="Échec de la connexion. Veuillez vérifier vos informations."}catch(e){console.error("Erreur lors de la requête :",e),this.errorMessage="Une erreur est survenue. Veuillez réessayer plus tard."}}else this.errorMessage="Veuillez remplir tous les champs."}handleLogin(){this.validateForm(),this.isFormValid&&this.sendData()}toggleRememberMe(){this.rememberMe=!this.rememberMe}constructor(...e){super(...e),this.email="",this.password="",this.rememberMe=!1,this.isFormValid=!1,this.errorMessage=null,this.isCustom=!1,this.Mail="",this.Password=""}}(0,i.__decorate)([(0,s.state)()],r.prototype,"email",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"password",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"rememberMe",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"isFormValid",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"errorMessage",void 0),(0,i.__decorate)([(0,s.state)()],r.prototype,"isCustom",void 0),(0,i.__decorate)([(0,s.customElement)({name:"page-new-password",template:(0,s.html)`${e=>(0,s.html)`
      <div class="login">
        <div class="header">
          <h1>Change your password</h1>
        </div>
        <div class="main-body">
          <div class="input-field">
            <pf-icons-envelope></pf-icons-envelope>
            <input 
              type="email" 
              placeholder="Email" 
              @input="${e=>e.handleEmailInput()}" 
              value="${e.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${e=>e.handlePasswordInput()}" 
              value="${e.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!e.isFormValid}"
            @click="${()=>e.handleLogin()}"
          >
            Save changes
          </button>
        </div>
        ${e.errorMessage?(0,s.html)`<div class="error-message">${e.errorMessage}</div>`:""}
      </div>
    `}`,styles:[(0,s.css)`
      .login{
        width: 500px;
        height: 500px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 5px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-login:hover{
        background-color: #004080;
      }
      .remember-password {
        display: flex;
        gap: 50px;
      }
      .radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `],shadowOptions:{mode:"open"}})],r)}),s("3T3Tr",function(e,o){t("3d3pD")}),s("3d3pD",function(e,o){var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA");class a extends s.WebComponent{attributeChangedCallback(e,o,i){"custom"===e&&(this.isCustom="true"===i),"info"===e&&(this.isInfo="true"===i),"success"===e&&(this.isSuccess="true"===i),"warning"===e&&(this.isWarning="true"===i),"danger"===e&&(this.isDanger="true"===i),super.attributeChangedCallback(e,o,i)}constructor(...e){super(...e),this.custom=null,this.info=null,this.success=null,this.warning=null,this.danger=null,this.isCustom=!1,this.isInfo=!1,this.isSuccess=!1,this.isWarning=!1,this.isDanger=!1}}(0,i.__decorate)([(0,s.attr)()],a.prototype,"custom",void 0),(0,i.__decorate)([(0,s.attr)()],a.prototype,"info",void 0),(0,i.__decorate)([(0,s.attr)()],a.prototype,"success",void 0),(0,i.__decorate)([(0,s.attr)()],a.prototype,"warning",void 0),(0,i.__decorate)([(0,s.attr)()],a.prototype,"danger",void 0),(0,i.__decorate)([(0,s.state)()],a.prototype,"isCustom",void 0),(0,i.__decorate)([(0,s.state)()],a.prototype,"isInfo",void 0),(0,i.__decorate)([(0,s.state)()],a.prototype,"isSuccess",void 0),(0,i.__decorate)([(0,s.state)()],a.prototype,"isWarning",void 0),(0,i.__decorate)([(0,s.state)()],a.prototype,"isDanger",void 0),(0,i.__decorate)([(0,s.customElement)({name:"notification-box",template:(0,s.html)`${e=>(0,s.html)`
      <div class="${["notification",e.isCustom?"-custom":"",e.isInfo?"-info":"",e.isSuccess?"-success":"",e.isWarning?"-warning":"",e.isDanger?"-danger":""].join("")}">
        <div class="icon">
          ${e.isCustom?(0,s.html)`<pf-icons-bell></pf-icons-bell>`:""}
          ${e.isInfo?(0,s.html)`<pf-icons-info-circle></pf-icons-info-circle>`:""}
          ${e.isSuccess?(0,s.html)`<pf-icons-check-circle></pf-icons-check-circle>`:""}
          ${e.isWarning?(0,s.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>`:""}
          ${e.isDanger?(0,s.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>`:""}
        </div>
        <div class="main-body">
          <div class="title">
            ${e.isCustom?(0,s.html)`<pf-icons-bell></pf-icons-bell>`:""}
            ${e.isInfo?(0,s.html)`<h3>Information</h3>`:""}
            ${e.isSuccess?(0,s.html)`<h3>Success</h3>`:""}
            ${e.isWarning?(0,s.html)`<h3>Warning</h3>`:""}
            ${e.isDanger?(0,s.html)`<h3>Danger</h3>`:""}
          </div>
          <span class="custom-text">
            <slot></slot>
          </span>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `}`,styles:[(0,s.css)`
      .notification-success{
        width: 300px;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        color: #3e8635;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .layer-success {
        width: 5%;
        background-color: #4CAF50;
        border-radius: 3px;
      }
      .main-body{
        display: inline-flex;
        align-items: center;
        gap: 20px;
      }
      .toggle-close{
        color: #9E9E9E;
        cursor: pointer;
      }
      .icon {
        transform: translateY(2px);
      }
    `],shadowOptions:{mode:"open"}})],a)}),s("jcBBX",function(e,o){t("3Bkhj")}),s("3Bkhj",function(e,o){var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA");class a extends s.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}getRole(){let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let o=JSON.parse(e);console.log("Données utilisateur récupérées:",o);let i=o.role;console.log("Rôle de l'utilisateur:",i),"administrator"===i||"super-administrator"===i?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}logout(){localStorage.clear(),window.location.href="http://ec2-18-185-136-232.eu-central-1.compute.amazonaws.com:3000/"}constructor(...e){super(...e),this.isAdmin=null}}(0,i.__decorate)([(0,s.state)()],a.prototype,"isAdmin",void 0),(0,i.__decorate)([(0,s.customElement)({name:"navigation-panel",template:(0,s.html)`${e=>(0,s.html)`
    <div class="navigation">
      <div class="navigation-list">
        <div class="list"></div>
          <div class="item"><a href="/pages/cours">cours</a></div>
          <div class="item"><a href="/pages/informations">infos</a></div>
          <div class="item"><a href="/pages/compte">compte</a></div>
          <div class="item"><a href="/pages/profile">profile</a></div>
            ${!0===e.isAdmin?(0,s.html)`<div class="item"><a href="/pages/dashboard">dashboard</a></div>`:(0,s.html)``}
          </div>
          <div class="bottom-navigation">
            <pf-button @click="${()=>e.logout()}">Déconnexion</pf-button>
          </div>
      </div>
    </div>`}`,styles:[(0,s.css)`
    .navigation{
        color: black;
        background-color: #ffffff;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
      }
      .navigation-list{
        color: black;
        background-color: #ffffff;
        justify-content: space-between;
        flex-direction: column;
      }
      .list{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item{
        list-style: none;
        padding: 10px 10px;
        transition: 0.3s;
        cursor: pointer
      }
      .item:hover{
        background-color: lightgray
      }
      a{
        color: black;
        text-decoration: none;
      }
    `]})],a)});
//# sourceMappingURL=index.7ce64bad.js.map
