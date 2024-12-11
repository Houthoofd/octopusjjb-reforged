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
            <li class="active">
               <a href="/pages/cours">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                  <span>Cours</span>
               </a>
            </li>
            <li>
               <a href="/pages/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                  <span>Dashboard</span>
               </a>
            </li>
            <li>
               <a href="/pages/informations">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <span>Informations</span>
               </a>
            </li>
            <li>
               <a href="/pages/compte">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Compte</span>
               </a>
            </li>
            <li>
               <a href="/pages/profil">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                  <span>Profil</span>
               </a>
            </li>
            <li>
               <a href="/pages/paiements">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <span>Paiements</span>
               </a>
            </li>
            <li>
               <a href="/pages/utilisateurs">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                  <span>Utilisateurs</span>
               </a>
            </li>
            <li>
               <a href="/pages/evenements">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                  <span>Evènements</span>
               </a>
            </li>
         </ul>

         <ul id="bottom-sidebar">
            <li>
               <a>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                  <span>Déconnexion</span>
               </a>
            </li>
            <li id="switch-mode">
               <div class="moon-sun">
                  <div class="moon-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                  </div>
                  <div class="sun-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                  </div>
               </div>
               <span class="switch-mode-text">Dark Mode</span>
               <div class="switch-mode-toggle">
                  <span class="switch-mode-toogle-btn"></span>
               </div>
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
         justify-content: space-between;
         transition: all 0.3s ease;
      }
      #sidebar.close{
         width: 84px;
      }
      .header{
         border: 1px solid #42434a;
      }
      #sidebar ul{
         list-style: none;
         padding: 0;
         transition: all 0.3s ease;
         display: flex;
         flex-direction: column;
         gap: 10px;
      }
      #sidebar ul{
         overflow: hidden;
      }
      #sidebar ul li.active.close a{
         background-color: #5e63ff

         svg{
            fill: #e6e6ef;
         }
      }
      li.active.close {
         background-color: #5e63ff;
         border-radius: 10px;

         svg{
            fill: #e6e6ef;
         }
      }
      #sidebar a{
         padding: .85rem;
         text-decoration: none;
         color: #e6e6ef;
         display: flex;
         align-items: center;
         gap: 1em;

         svg{
            fill: #e6e6ef;
         }
      }
      #sidebar a:hover{
         color: #5e63ff;

         svg{
            fill: #5e63ff;
         }
      }
      #sidebar a.close{
         width: 150px;
         overflow: hidden;
         transition: all 0.3s ease;

         svg{
            fill: #e6e6ef;
         }
      }
      #sidebar ul li.close:hover{
         background-color: #222533;
         border-radius: 10px;

         svg{
            fill: #5e63ff;
         }
      }
      #switch-mode{
         background-color: #222533;
         display: flex;
         padding: 10px 10px;
         justify-content: space-between;
         align-items: center;
         border-radius: 10px;
         transition: all 0.3s ease;
      }
      #switch-mode.close{
         width: 130px;
      }
      .moon-sun{
         display: grid;
         align-items: center;
         transform: translateX(2px) translateY(3px);
         transition: all 0.3s ease;

         .moon-icon, .sun-icon {
            grid-column: 1;
            grid-row: 1;

            svg{
               fill: #e6e6ef;
            }
         }
      }
      .moon-sun.close{
         width: 150px;
      }
      .sun-icon{
         opacity: 0;
      }
      .switch-mode-toggle{
         width: 50px;
         height: 35px;
         display: flex;
         align-items: center;
         justify-content: center
      }
      .switch-mode-text{
         display: flex;
      }
      .switch-mode-toogle-btn{
         height: 22px;
         width: 44px;
         background-color: #DDD;
         border-radius: 25px;
         display: flex;
         justify-content: flex-start;
         cursor: pointer;
      }
      .switch-mode-toogle-btn::before{
         content: '';
         height: 15px;
         width: 15px;
         border-radius: 50%;
         cursor: pointer;
         background-color: #fff;
         transform: translateX(3px) translateY(3px);
         cursor: pointer;
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
      const switchMode = this.shadowRoot?.querySelectorAll('#switch-mode')[0];
      const moonsun = this.shadowRoot?.querySelectorAll('.moon-sun')[0];
   
      links.forEach((link) => {
         link.classList.toggle('close');
         link.parentElement.classList.toggle('close');
      });
      switchMode.classList.toggle('close');
      sidebar.classList.toggle('close');
      moonsun.classList.toggle('close');
   }
   
   Expand(){
      const sidebar = this.shadowRoot?.querySelectorAll('#sidebar')[0];
      const links = this.shadowRoot?.querySelectorAll('a');
      const switchMode = this.shadowRoot?.querySelectorAll('#switch-mode')[0];
      const moonsun = this.shadowRoot?.querySelectorAll('.moon-sun')[0];
   
      links.forEach((link) => {
         link.classList.remove('close')
         link.parentElement.classList.remove('close');
      });
      switchMode.classList.remove('close');
      sidebar.classList.remove('close');
      moonsun.classList.remove('close');
   }
   attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
      
      if (name === 'isopen') {
         // Assigner directement la valeur de newValue à this.open
         this.open = newValue as any;
      }
   
      super.attributeChangedCallback(name, oldValue, newValue);
   }
}

