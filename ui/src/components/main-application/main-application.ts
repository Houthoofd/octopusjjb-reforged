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
      .right-content.close{
         grid-template-columns: 84px 1fr;
      }
      `
   ]
})
export class MainApplication extends WebComponent{
   @state() isExpanse: boolean = true;

   @attr() expanse: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();
      console.log('VerticalNavBar connecté');

      const navbarState = JSON.parse(localStorage.getItem('navigation'));
      console.log(navbarState)
      if (navbarState && navbarState.navbarIsOpen === "true") {
         this.handleExpanseContent();
      } else {
         this.handleRemoveExpanseContent();
      }

      // Écoute l'événement 'close-navbars' sur le document
      document.addEventListener('close-navbars', this.handleRemoveExpanseContent.bind(this));

      document.addEventListener('open-navbars', this.handleExpanseContent.bind(this));
   }

   handleRemoveExpanseContent(event?: Event) {

      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];
      console.log(rightContent)

      rightContent.classList.toggle('close');

      // Logique pour fermer la sidebar
      this.expanse = "false";
      this.isExpanse = false;

   }

   handleExpanseContent(event?: Event){
      const rightContent = this.shadowRoot?.querySelectorAll('.right-content')[0];
      console.log(rightContent)

      rightContent.classList.remove('close');

      // Logique pour fermer la sidebar
      this.expanse = "true";
      this.isExpanse = true;
   }

   attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'isopen') {
         console.log(`Attribut isOpen modifié de ${oldValue} à ${newValue}`);
         this.isExpanse = newValue === "true" ? true : false;
      }
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}
