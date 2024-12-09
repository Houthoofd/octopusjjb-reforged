import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
  name: "page-compte",
  template : html`${(compte: Compte) => {
     return html`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="compte">
                     <h1>Compte</h1>
                  </div>
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
      .right-content.close{
         grid-template-columns: 84px 1fr;
      }
     `
  ]
})
export class Compte extends WebComponent{
   @state() open: "true" | "false" | null = null;
   @attr() isOpen: boolean = true;

   connectedCallback() {
      super.connectedCallback();
      console.log('Main component connecté');
   
      // Écoute l'événement 'close-navbars' au niveau du document
      document.addEventListener('close-navbars', this.handleCloseContent.bind(this));
   }
   
   handleCloseContent(event) {
      console.log('L\'événement close-navbars a été détecté.', event.target);
      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];
      console.log(this)
   
      if (rightContent) {
         rightContent.classList.toggle('close');
      }
   
      // Logic pour fermer la sidebar
      this.open = "false"; // Ferme la sidebar en changeant l'état
   }

   attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'isopen') {
         console.log(`Attribut isOpen modifié de ${oldValue} à ${newValue}`);
         this.open = newValue ? "true" : "false";
         this.renderNavBar();
      }
   }

   renderNavBar() {
      console.log('Rendu de la barre de navigation avec open =', this.open);
   }
}

render(html`<page-compte></page-compte>`, document.body);