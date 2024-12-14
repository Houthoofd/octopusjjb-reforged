import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
   name: "vertical-navbar",
   template : html`${(verticalNavBar: VerticalNavBar) => {
      return html`
        <nav id="sidebar">
         <ul id="top-sidebar">
            <li>
               <a href="/pages/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                  <span>Accueil</span>
               </a>
            </li>
            <li>
               <button class="dropdown-btn" @click="${() => verticalNavBar.show(0)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Cours</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Cours</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un professeur</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Supprimer un cours</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <a href="/pages/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                  <span>Dashboard</span>
               </a>
            </li>
            <li>
               <button class="dropdown-btn" @click="${() => verticalNavBar.show(1)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Administration</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/compte">
                           <span>Compte</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Utilisateurs</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/informations">
                           <span>Informations</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/profil">
                           <span>Profil</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/paiements">
                           <span>Paiements</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <button class="dropdown-btn" @click="${() => verticalNavBar.show(2)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Magasin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Articles</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un article</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Supprimer un article</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <button class="dropdown-btn" @click="${() => verticalNavBar.show(3)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Evènements</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
               </button>
               <ul class="sub-menu">
                  <div>
                     <li>
                        <a href="/pages/utilisateurs">
                           <span>Evènements</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>Ajouter un évènement</span>
                        </a>
                     </li>
                     <li>
                        <a href="/pages/compte">
                           <span>supprimer un évènement</span>
                        </a>
                     </li>
                  </div>
               </ul>
            </li>
            <li>
               <a href="/pages/chat">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                  <span>Messages</span>
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
         height: 100%;
         width: 250px;
         padding: 5px 1em;
         background-color: #11121a;
         border-right: 1px solid #42434a;
         display: flex;
         flex-direction: column;
         justify-content: center;
         transition: all 0.3s ease;

         overflow: hidden;
         text-wrap: nowrap;
      }
      #sidebar.close{
         width: 84px;
      }
      .header{
         border: 1px solid #42434a;
      }
      #sidebar ul{
         list-style:none;
         padding: 0 ;
         transition: all 0.3s ease;
         display: flex;
         flex-direction: column;
      }
      #sidebar ul.close {
         overflow: hidden;
      }     
      #sidebar a.close{
         width: 150px;
         overflow: hidden;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      #sidebar a, #sidebar .dropdown-btn, #sidebar span{
         padding: 10px 10px;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 10px;

         svg{
            fill: #e6e6ef;
         }
      }
      .dropdown-btn{
         width: 100%;
         text-align: left;
         background: none;
         border: none;
         font-family: Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         cursor: pointer;
      }
      button.dropdown-btn > svg {
         transition: 200ms ease;
      }
      button.dropdown-btn > svg.rotate {
         rotate: 180deg;
      }
      button.dropdown-btn.close {

      }
      #sidebar ul li.close {
         width: 227px;
      }  
      .dropdown-btn > span{
         font-size: 16px;
      }
      #sidebar a span, #sidebar .dropdown-btn span{
         flex-grow: 1;
      }
      #sidebar a:hover, #sidebar .dropdown-btn:hover{
         background-color: #222533;
      }
      #sidebar .sub-menu{
         display: grid;
         grid-template-rows: 0fr;
         transition: 300ms ease-in-out;

         > div{
            overflow: hidden;
         }
      }
      #sidebar .sub-menu a{
         padding-left: 3em;
      }
      #sidebar .sub-menu.show{
         grid-template-rows: 1fr;
      }
      `
   ]
})
export class VerticalNavBar extends WebComponent {
   @state() isOpen: boolean = true;

   @attr() open: "true" | "false" | null = null;

   connectedCallback() {
      super.connectedCallback();

      console.log('vertical navbar connecté');

      this.onMounting()
      

      // Écoute l'événement 'close-navbars' sur le document
      document.addEventListener('close-navbars', this.handleCloseNavbars.bind(this));

      document.addEventListener('open-navbars', this.handleOpenNavbars.bind(this));
   }
   onMounting() {
      const navbarState = JSON.parse(localStorage.getItem('navigation'));
      
      if(navbarState.horizontal_vertical_state === false){
         this.Minimize();
      }else if(navbarState.horizontal_vertical_state === true){
         this.Expand();
      }
   }
   
   handleCloseNavbars(event: CustomEvent) {
      
      // Fermer la navigation si elle est ouverte
      if (this.isOpen === true) {
         this.isOpen = false;
         this.open = "false";
      }
      
      // Sauvegarder l'état de la navigation seulement si la barre horizontale est active et la verticale ouverte
      if ((event.detail.horizontalstate === false) && (this.isOpen === false)) {
         const navigation = {
            horizontal_vertical_state: this.isOpen
         };
         this.Minimize();
         localStorage.setItem('navigation', JSON.stringify(navigation));
      }
   }
   
   handleOpenNavbars(event: CustomEvent) {
   
      if (this.isOpen === false) {
         this.isOpen = true;
         this.open = "true";
      }
      
      // Sauvegarder l'état de la navigation seulement si la barre horizontale est active et la verticale ouverte
      if ((event.detail.horizontalstate === true) && (this.isOpen === true)) {
         const navigation = {
            horizontal_vertical_state: this.isOpen
         };
         this.Expand();
         localStorage.setItem('navigation', JSON.stringify(navigation));
      }
   }
   Minimize() {
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0];
      const links = this.shadowRoot?.querySelectorAll('a');
      const ul = this.shadowRoot?.querySelectorAll('ul')[0];
      const dropdown = this.shadowRoot?.querySelectorAll('.dropdown-btn')[0];
   
      links.forEach((link) => {
         link.classList.toggle('close');
         link.parentElement.classList.toggle('close');
      });
      dropdown.parentElement.classList.toggle('close');
      sidebar.classList.toggle('close');
      ul.classList.toggle('close');
   }
   
   Expand(){
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0];
      const links = this.shadowRoot?.querySelectorAll('a');
      const ul = this.shadowRoot?.querySelectorAll('ul')[0];
      const dropdown = this.shadowRoot?.querySelectorAll('.dropdown-btn')[0];
   
      links.forEach((link) => {
         link.classList.remove('close')
         link.parentElement.classList.remove('close');
      });
      dropdown.parentElement.classList.toggle('close');
      sidebar.classList.remove('close');
      ul.classList.remove('close');
   }
   attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
      
      if (name === 'isopen') {
         // Assigner directement la valeur de newValue à this.open
         this.open = newValue as any;
      }
   
      super.attributeChangedCallback(name, oldValue, newValue);
   }
   show(index?: number) {
      const subMenus = this.shadowRoot?.querySelectorAll('.sub-menu');
      if (subMenus) {
          const targetIndex = (index !== undefined) ? index : 0;
          if (subMenus[targetIndex]) {
              const svg = subMenus[targetIndex].parentElement.children[0].children[2].classList.toggle('rotate');
              subMenus[targetIndex].classList.toggle('show');
          } else {
              console.error("Sous-menu introuvable à l'index", targetIndex);
          }
      }
  }
  
}

