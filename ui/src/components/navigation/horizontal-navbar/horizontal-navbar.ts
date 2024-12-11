import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
   name: "horizontal-navbar",
   template : html`${(horizontalNavBar: HorizontalNavBar) => {
      return html`
        <nav id="sidebar">
         <ul class="header-sidebar">
            <li>
               <a class="member-info-initial" href="/pages/profil">HB</a>
               <button class="toggle-btn" @click="${() => horizontalNavBar.toggleButton()}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
               </button>
            </li>
         </ul>
         <ul id="right-sidebar">
            <li>
               <div class="member-infos">
                  <span class="member-info-nom"><a href="/pages/profil">Houthoofd Benoit</a></span>
               </div>
            </li>
            <li>
               <a href="/pages/messages">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
               </a>
            </li>
            <li>
               <a href="/pages/notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
               </a>
            </li>
         </ul>
        </nav>
      `
   }}`,
   styles: [
      css`
      #sidebar{
         box-sizing: border-box;
         background-color: #11121a;
         display: grid;
         grid-template-columns: 250px 1fr;
         align-items: center;
         height: 10vh;
         border-bottom: 1px solid #42434a;
         transition: all 0.3s ease;
      }
      #sidebar.close{
         grid-template-columns: 84px 1fr;
      }
      .header-sidebar{
         padding: 0;
         border-right: 1px solid #42434a;
         justify-content: space-between;
         align-items: center;
         display: flex;
         background-color: #222533;
      }
      .header-sidebar li{
         list-style: none;
         width: 100%;
         padding: 0;
         margin: 0;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      #sidebar ul{
         list-style: none;
         height: 100%;
         padding: 0;
         margin: 0;
      }
      #sidebar ul li.active a{
         color: #5e63ff;

         svg{
            fill: #5e63ff;
         }
      }
      #sidebar a{
         padding: .85rem;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 1em;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      .toggle-btn{
         width: 35px;
         height: 35px;
         border-radius: 50%;
         border: none;
         background-color: #5e63ff;
         transform: translateX(18px) translateY(0px);
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
            transform: translateX(0px) translateY(2px);
         }
      }
      .toggle-btn.close{
         width: 23px;
         height: 23px;
         transform: translateX(12px) translateY(0px);

         svg{
            width: 15px;
            height: 15px;
            transform: translateX(-1px) translateY(2px);
         }
      }
      #right-sidebar{
         display: flex;
         align-items: center;
         justify-content: flex-end;
      }
      .member-info-initial{
         background-color: #5e63ff;
         border-radius: 10px;
         /* margin-left: 20px; */
         transform: translateX(19px);
      }
      `
   ]
})
export class HorizontalNavBar extends WebComponent{
   @state() isOpen: boolean = true;

   @attr() open: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();

      console.log('horizontal navbar connecté');

      this.onMounting();
   }

   onMounting() {
      const navbarState = JSON.parse(localStorage.getItem('navigation'));
      
      if(navbarState.horizontal_vertical_state === false){
         this.Minimize();
      }else if(navbarState.horizontal_vertical_state === true){
         this.Expand();
      }
   }

   toggleButton() {
      const navbarState = JSON.parse(localStorage.getItem('navigation'));
      console.log("toggle initial", this.open, navbarState?.horizontal_vertical_state, this.isOpen);
  
      // Cas où open est null et isOpen est true (Initialisation avec état synchronisé)
      if (this.open === null && this.isOpen === true) {
          console.log("Synchronisation initiale : open est null et isOpen est true");
          this.open = 'true';  // Synchronisation de l'état 'open'
          this.isOpen = true;  // Assurez-vous que isOpen est aussi 'true'
          this.openEmitSignal(this.isOpen);  // Emission du signal pour signaler l'ouverture
          return;
      }
  
      // Cas où open est null et isOpen est false (Initialisation avec état synchronisé)
      if (this.open === null && this.isOpen === false) {
          console.log("Synchronisation initiale : open est null et isOpen est false");
          this.open = 'false';  // Synchronisation de l'état 'open'
          this.isOpen = false;  // Assurez-vous que isOpen est aussi 'false'
          this.closeEmitSignal(this.isOpen);  // Emission du signal pour signaler la fermeture
          return;
      }
  
      // Cas où open est 'true' et isOpen est true (Fermeture de la navigation)
      if (this.open === 'true' && this.isOpen === true) {
          console.log("Fermeture de la navigation");
          this.isOpen = false;
          this.open = 'false';
          this.closeEmitSignal(this.isOpen);  // Fermeture de la navigation
          return;
      }
  
      // Cas où open est 'false' et isOpen est false (Ouverture de la navigation)
      if (this.open === 'false' && this.isOpen === false) {
          console.log("Ouverture de la navigation");
          this.isOpen = true;
          this.open = 'true';
          this.openEmitSignal(this.isOpen);  // Ouverture de la navigation
          return;
      }
  
      // Cas par défaut : quand open et isOpen ne sont ni 'true' ni 'false', basculer l'état
      console.log("Basculer l'état : toggle");
      this.isOpen = !this.isOpen;  // Inverser l'état de isOpen
      this.open = this.isOpen ? 'true' : 'false';  // Synchroniser open avec isOpen
  
      // Après le basculement, envoyer le signal approprié
      if (this.isOpen) {
          console.log("Ouverture de la navigation après basculement");
          this.openEmitSignal(this.isOpen);
      } else {
          console.log("Fermeture de la navigation après basculement");
          this.closeEmitSignal(this.isOpen);
      }
  }
  
   
   
   
   
   
   
   
   

   closeEmitSignal(state: boolean) {
   
      // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
      const event = new CustomEvent('close-navbars', {
         bubbles: true, // Permet à l'événement de remonter dans le DOM
         composed: true,
         detail: { message: 'Close all external navbars', horizontalstate: this.isOpen}
      });
      this.Minimize();
      console.log(event);
      // Dispatch l'événement depuis le composant
      this.dispatchEvent(event);
   }
   
   openEmitSignal(state: boolean){
   
      // Émettre un événement personnalisé pour notifier qu'il faut manipuler les navbars à l'extérieur
      const event = new CustomEvent('open-navbars', {
         bubbles: true, // Permet à l'événement de remonter dans le DOM
         composed: true,
         detail: { message: 'Open all external navbars', horizontalstate: this.isOpen }
      });
      this.Expand();
      console.log(event)
      // Dispatch l'événement depuis le composant
      this.dispatchEvent(event);
   }
   Minimize() {
      const btn = this.shadowRoot?.querySelectorAll('.toggle-btn')[0];
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0];

      btn.classList.toggle('close');
      sidebar.classList.toggle('close');
   }
   
   Expand(){
      const btn = this.shadowRoot?.querySelectorAll('.toggle-btn')[0];
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0];
      
      btn.classList.remove('close');
      sidebar.classList.remove('close');
   }
   attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
      
      if (name === 'isopen') {
         // Assigner directement la valeur de newValue à this.open
         this.open = newValue as any;
      }
   
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}

