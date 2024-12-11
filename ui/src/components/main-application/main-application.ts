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
      `
   ]
})
export class MainApplication extends WebComponent {
   @state() isExpanse: boolean = true;

   @attr() expanse: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();
      console.log('main-application connecté');

      this.onMounting();

      // Écoute l'événement 'close-navbars' et 'open-navbars' sur le document
      document.addEventListener('close-navbars', this.handleRemoveExpanseContent.bind(this));
      document.addEventListener('open-navbars', this.handleExpanseContent.bind(this));
   }

   onMounting() {
      const navbarState = JSON.parse(localStorage.getItem('navigation'));
      
      if(navbarState.horizontal_vertical_state === false){
         this.Expand();
      }else if(navbarState.horizontal_vertical_state === true){
         this.Minimize();
      }
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
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}

