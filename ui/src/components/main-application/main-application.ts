import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../navigation';

@customElement({
   name: "main-application",
   template : html`${(main: MainApplication) => {
      return html`
        <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <slot></slot>
               </div>
            </div>
        </div>
      `
   }}`,
   styles: [
      css`
      #application{
         min-height: 100vh;
         background-color: var(--base-clr);
         color: var(--text-clr);
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      .content{
         margin-left: 10px;
         margin-top: 10px;
      }
      .right-content{
         display: grid;
         grid-template-columns: 250px 1fr;
         transition: all 0.3s ease;
      }
      .right-content.expand{
         grid-template-columns: 84px 1fr;
      }
      .right-content.expand.light {
         background-color: #ffffff;
      }
      .right-content.light {
         background-color: #ffffff;
      }
      `
   ]
})
export class MainApplication extends WebComponent {
   @state() isExpanse: boolean = true;
   @state() isDark: boolean = true;


   @attr() expanse: "true" | "false" | null = null;
   @attr() dark: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();
      console.log('main-application connecté');

      this.onMounting();

      // Écoute l'événement 'close-navbars' et 'open-navbars' sur le document
      document.addEventListener('close-navbars', this.handleRemoveExpanseContent.bind(this));
      document.addEventListener('open-navbars', this.handleExpanseContent.bind(this));
      document.addEventListener('dark-mode', this.handleMode.bind(this));
      document.addEventListener('light-mode', this.handleMode.bind(this));
   }

   onMounting() {
      const navigation = JSON.parse(localStorage.getItem('navigation')) || {};
      
      // Gestion de l'état horizontal_vertical_state
      if (typeof navigation.horizontal_vertical_open !== 'undefined') {
          if (navigation.horizontal_vertical_open === false) {
              this.Expand();
          } else if (navigation.horizontal_vertical_open === true) {
              this.Minimize();
          }
      } else {
          console.log("Aucun état horizontal/vertical trouvé, utilisation de l'état par défaut.");
      }
  
      // Gestion du mode sombre
      if (typeof navigation.dark_mode !== 'undefined') {
          if (navigation.dark_mode === false) {
              this.lightMode();
          } else if (navigation.dark_mode === true) {
              this.darkMode();
          }
      } else {
          console.log("Aucun état de mode sombre trouvé, utilisation de l'état par défaut.");
      }
  }
  
  

   handleMode(event: CustomEvent) {
      // Récupérer l'état actuel du localStorage
      const navigation = JSON.parse(localStorage.getItem('navigation')) || {};
      console.log(this.isDark, event.detail.dark_mode)

      if (event.detail.dark_mode === true) {
         console.log("if")
         this.isDark = event.detail.dark_mode;
         navigation.dark_mode = this.isDark;
         localStorage.setItem('navigation', JSON.stringify(navigation));
         this.darkMode();
      }else{
         console.log("else")
         this.isDark = event.detail.dark_mode;
         navigation.dark_mode = this.isDark;
         localStorage.setItem('navigation', JSON.stringify(navigation));
         this.lightMode();
      }
   }


   darkMode(){
      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];

      rightContent.classList.remove('light');
   }
   lightMode(){

      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];

      rightContent.classList.toggle('light');
   }

   handleRemoveExpanseContent(event: CustomEvent) {

      if(event.detail?.horizontalstate === false){
         this.isExpanse = false;
         this.expanse = "false";
         this.Expand();
      }
   }

   handleExpanseContent(event: CustomEvent) {

      if(event.detail?.horizontalstate === true){
         this.isExpanse = true;
         this.expanse = "true";
         this.Minimize();
      }
   }

   Expand() {
      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];

      rightContent.classList.toggle('expand');
   }

   Minimize() {
      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];

      rightContent.classList.remove('expand');
   }

   attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
      if (name === 'expanse') {
         this.expanse = newValue as any;
      }
      if (name === 'dark') {
         this.dark = newValue as any;
      }
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}

