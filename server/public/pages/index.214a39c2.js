var e=globalThis,t={},i={},a=e.parcelRequire1c26;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequire1c26=a);var o=a.register;o("jcBBX",function(e,t){a("l8jY8"),a("fw7Hj"),a("jAkOT"),a("4jZW0"),a("hypTO"),a("2ByoK")}),o("l8jY8",function(e,t){a("hypTO")}),o("hypTO",function(e,t){var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA");class s extends o.WebComponent{connectedCallback(){super.connectedCallback(),this.addClickListeners(),this.restoreActiveState(),console.log("vertical navbar connecté"),this.onMounting(),document.addEventListener("close-navbars",this.handleCloseNavbars.bind(this)),document.addEventListener("open-navbars",this.handleOpenNavbars.bind(this)),document.addEventListener("dark-mode",this.handleMode.bind(this)),document.addEventListener("light-mode",this.handleMode.bind(this))}onMounting(){let e=JSON.parse(localStorage.getItem("navigation"))||{};console.log("vertical navbar"+e.horizontal_vertical_open),void 0!==e.horizontal_vertical_open?!1===e.horizontal_vertical_open?this.Minimize():!0===e.horizontal_vertical_open&&this.Expand():console.log("Aucun état horizontal/vertical trouvé, utilisation de l'état par défaut."),void 0!==e.dark_mode?!1===e.dark_mode?this.lightMode():!0===e.dark_mode&&this.darkMode():console.log("Aucun état de mode sombre trouvé, utilisation de l'état par défaut.")}addClickListeners(){this.shadowRoot.querySelectorAll("li").forEach(e=>{e.addEventListener("click",this.handleItemClick.bind(this))})}handleItemClick(e){let t=JSON.parse(localStorage.getItem("navigation"))||{},i=e.currentTarget;this.shadowRoot.querySelectorAll("li").forEach(e=>{e.classList.remove("active")}),i.classList.add("active");let a=i.getAttribute("data-page");a&&(t.activePage=a,localStorage.setItem("navigation",JSON.stringify(t)))}restoreActiveState(){let e=JSON.parse(localStorage.getItem("navigation"))||{};if(e.activePage){let t=this.shadowRoot.querySelector(`li[data-page="${e.activePage}"]`);t&&t.classList.add("active")}}handleMode(e){let t=JSON.parse(localStorage.getItem("navigation"))||{};!0===e.detail.dark_mode&&!1===this.isDark?(this.isDark=!0,this.darkMode(),t.dark_mode=this.isDark,localStorage.setItem("navigation",JSON.stringify(t))):!1===e.detail.dark_mode&&!0===this.isDark&&(this.isDark=!1,this.lightMode(),t.dark_mode=this.isDark,localStorage.setItem("navigation",JSON.stringify(t)))}darkMode(){let e=this.shadowRoot?.querySelector("#sidebar"),t=this.shadowRoot?.querySelectorAll("a"),i=this.shadowRoot?.querySelectorAll("svg");e&&e.classList.remove("light"),t.forEach(e=>{e.classList.remove("light"),e.parentElement&&e.parentElement.classList.remove("light")}),i.forEach(e=>e.classList.remove("light"))}lightMode(){let e=this.shadowRoot?.querySelector("#sidebar"),t=this.shadowRoot?.querySelectorAll("a"),i=this.shadowRoot?.querySelectorAll("svg");e&&e.classList.toggle("light"),t.forEach(e=>{e.classList.toggle("light"),e.parentElement&&e.parentElement.classList.toggle("light")}),i.forEach(e=>e.classList.toggle("light"))}handleCloseNavbars(e){let t=JSON.parse(localStorage.getItem("navigation"))||{};!0===this.isOpen&&(this.isOpen=!1,this.open="false"),!1===e.detail.horizontalstate&&!1===this.isOpen&&(t.horizontal_vertical_open=this.isOpen,localStorage.setItem("navigation",JSON.stringify(t)),this.Minimize())}handleOpenNavbars(e){let t=JSON.parse(localStorage.getItem("navigation"))||{};!1===this.isOpen&&(this.isOpen=!0,this.open="true"),!0===e.detail.horizontalstate&&!0===this.isOpen&&(t.horizontal_vertical_open=this.isOpen,localStorage.setItem("navigation",JSON.stringify(t)),this.Expand())}Minimize(){let e=this.shadowRoot?.querySelectorAll("#sidebar")[0];(this.shadowRoot?.querySelectorAll("a")).forEach(e=>{e.classList.toggle("close"),e.parentElement.classList.toggle("close")}),e.classList.toggle("close")}Expand(){let e=this.shadowRoot?.querySelectorAll("#sidebar")[0];(this.shadowRoot?.querySelectorAll("a")).forEach(e=>{e.classList.remove("close"),e.parentElement.classList.remove("close")}),e.classList.remove("close")}attributeChangedCallback(e,t,i){"isopen"===e&&(this.open=i),super.attributeChangedCallback(e,t,i)}switchMode(){let e=this.shadowRoot?.querySelectorAll("#sidebar")[0];(this.shadowRoot?.querySelectorAll("a")).forEach(e=>{e.classList.remove("close"),e.parentElement.classList.remove("close")}),e.classList.remove("close")}constructor(...e){super(...e),this.isOpen=!0,this.isDark=!0,this.open=null,this.dark=null}}(0,i.__decorate)([(0,o.state)()],s.prototype,"isOpen",void 0),(0,i.__decorate)([(0,o.state)()],s.prototype,"isDark",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"open",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"dark",void 0),(0,i.__decorate)([(0,o.customElement)({name:"vertical-navbar",template:(0,o.html)`${e=>(0,o.html)`
        <nav id="sidebar">
         <ul id="top-sidebar">
            <li data-page="accueil">
               <a href="/pages/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                  <span>Accueil</span>
               </a>
            </li>
            <li data-page="cours">
               <a href="/pages/cours">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                  <span>Cours</span>
               </a>
            </li>
            <li data-page="dashboard">
               <a href="/pages/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                  <span>Dashboard</span>
               </a>
            </li>
            <li data-page="profil">
               <a href="/pages/profil">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                  <span>Profil</span>
               </a>
            </li>
            <li data-page="administration">
               <a href="/pages/profil">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
                  <span>Administration</span>
               </a>
            </li>
            <li data-page="paiements">
               <a href="/pages/paiements">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <span>Paiements</span>
               </a>
            </li>
            <li data-page="utilisateurs">
               <a href="/pages/utilisateurs">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                  <span>Utilisateurs</span>
               </a>
            </li>
            <li data-page="store">
               <a href="/pages/store">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>
                  <span>Magasin</span>
               </a>
            </li>
            <li data-page="evenements">
               <a href="/pages/evenements">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                  <span>Evènements</span>
               </a>
            </li>
            <li data-page="chat">
               <a href="/pages/chat">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                  <span>Messages</span>
               </a>
            </li>
         </ul>
        </nav>
      `}`,styles:[(0,o.css)`
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
      }
      #sidebar.light{
         background-color: #ffffff;
         border-right: 1px solid #e6e6ef;
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
            fill: #ffffff;
         }
      }
      #sidebar ul li.active.light{
         background-color: #5e63ff;
         border-radius: 10px;
         color: #ffffff;

         svg{
            fill: #ffffff
         }
      }
      #sidebar ul li.active.light{
         background-color: #5e63ff;
         border-radius: 10px;
         color: #ffffff;

         svg{
            fill: #ffffff
         }
      }
      #sidebar ul li.active.light a{
         color: #ffffff;
      }
      li.active {
         background-color: #5e63ff;
         border-radius: 10px;
         color: #ffffff;

         svg{
            fill: #ffffff
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
         width: 165px;
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
      #right-sidebar ul li.light a svg.light {
         fill: #82828f;
      }
      #right-sidebar ul li.light{
         color: #82828f;

         svg{
            fill: #82828f;
         }
      }
      #right-sidebar > ul > li.light > a{
         color: #82828f;

      }
      #right-sidebar > ul > li.light {
         color: #82828f;
      }
      #sidebar ul li.light a {
         color: #82828f;

         > svg{
            fill: #82828f;
         }
      }
      `]})],s)}),o("fw7Hj",function(e,t){a("2ByoK")}),o("2ByoK",function(e,t){var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA");class s extends o.WebComponent{connectedCallback(){super.connectedCallback(),console.log("horizontal navbar connecté"),this.onMounting()}onMounting(){let e=JSON.parse(localStorage.getItem("navigation"))||{};console.log("horizontal navbar"+e.horizontal_vertical_open),void 0!==e.horizontal_vertical_open?!1===e.horizontal_vertical_open?this.Minimize():!0===e.horizontal_vertical_open&&this.Expand():console.log("Aucun état horizontal/vertical trouvé, utilisation de l'état par défaut."),void 0!==e.dark_mode?!1===e.dark_mode?this.lightMode():!0===e.dark_mode&&this.darkMode():console.log("Aucun état de mode sombre trouvé, utilisation de l'état par défaut.")}toggleButton(){let e=JSON.parse(localStorage.getItem("navigation"))||{};null===this.open&&(this.isOpen=!0===e.horizontal_vertical_open,this.open=this.isOpen?"true":"false"),this.isOpen=!this.isOpen,this.open=this.isOpen?"true":"false",e.horizontal_vertical_open=this.isOpen,this.isOpen?(console.log("Ouverture de la navigation"),this.openEmitSignal(this.isOpen)):(console.log("Fermeture de la navigation"),this.closeEmitSignal(this.isOpen)),localStorage.setItem("navigation",JSON.stringify(e))}switchMode(){console.log(this.isDark),!0===this.isDark?(this.isDark=!1,this.emitCustomEvent("light-mode",{message:"light mode",dark_mode:this.isDark}),this.lightMode()):(this.isDark=!0,this.emitCustomEvent("dark-mode",{message:"dark mode",dark_mode:this.isDark}),this.darkMode())}emitCustomEvent(e,t={}){let i=new CustomEvent(e,{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(i)}lightMode(){let e=this.shadowRoot?.querySelector("#sidebar"),t=this.shadowRoot?.querySelectorAll("a"),i=this.shadowRoot?.querySelectorAll("svg"),a=this.shadowRoot?.querySelectorAll("#switch-mode")[0],o=this.shadowRoot?.querySelectorAll(".header-sidebar")[0];e&&e.classList.toggle("light"),t.forEach(e=>{e.classList.toggle("light"),e.parentElement&&e.parentElement.classList.toggle("light")}),i.forEach(e=>e.classList.toggle("light")),o.classList.toggle("light"),a.classList.toggle("light")}darkMode(){let e=this.shadowRoot?.querySelector("#sidebar"),t=this.shadowRoot?.querySelectorAll("a"),i=this.shadowRoot?.querySelectorAll("svg"),a=this.shadowRoot?.querySelectorAll("#switch-mode")[0],o=this.shadowRoot?.querySelectorAll(".header-sidebar")[0];e&&e.classList.remove("light"),t.forEach(e=>{e.classList.remove("light"),e.parentElement&&e.parentElement.classList.remove("light")}),i.forEach(e=>e.classList.remove("light")),o.classList.remove("light"),a.classList.remove("light")}closeEmitSignal(e){let t=new CustomEvent("close-navbars",{bubbles:!0,composed:!0,detail:{message:"Close all external navbars",horizontalstate:this.isOpen}});this.Minimize(),this.dispatchEvent(t)}openEmitSignal(e){let t=new CustomEvent("open-navbars",{bubbles:!0,composed:!0,detail:{message:"Open all external navbars",horizontalstate:this.isOpen}});this.Expand(),this.dispatchEvent(t)}Minimize(){let e=this.shadowRoot?.querySelectorAll(".toggle-btn")[0],t=this.shadowRoot?.querySelectorAll("#sidebar")[0];e.classList.toggle("close"),t.classList.toggle("close")}Expand(){let e=this.shadowRoot?.querySelectorAll(".toggle-btn")[0],t=this.shadowRoot?.querySelectorAll("#sidebar")[0];e.classList.remove("close"),t.classList.remove("close")}attributeChangedCallback(e,t,i){"isopen"===e&&(this.open=i),"isdark"===e&&(this.dark=i),super.attributeChangedCallback(e,t,i)}constructor(...e){super(...e),this.isOpen=!0,this.isDark=!0,this.open=null,this.dark=null}}(0,i.__decorate)([(0,o.state)()],s.prototype,"isOpen",void 0),(0,i.__decorate)([(0,o.state)()],s.prototype,"isDark",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"open",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"dark",void 0),(0,i.__decorate)([(0,o.customElement)({name:"horizontal-navbar",template:(0,o.html)`${e=>(0,o.html)`
        <nav id="sidebar">
         <ul class="header-sidebar">
            <li>
               <a class="member-info-initial" href="/pages/profil">HB</a>
               <button class="toggle-btn" @click="${()=>e.toggleButton()}">
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
            <li>
               <a>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
               </a>
            </li>
            <li id="switch-mode" @click="${()=>e.switchMode()}">
               <div class="moon-sun">
                  <div class="moon-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                  </div>
                  <div class="sun-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                  </div>
               </div>
            </li>
         </ul>
        </nav>
      `}`,styles:[(0,o.css)`
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
      #sidebar.light{
         background-color: #ffffff;
         border-bottom: 1px solid #e6e6ef;
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
      .header-sidebar.light {
         background-color: #ffffff;
         border-right: 1px solid;
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
      #right-sidebar li a svg.light {
         fill: #82828f;
      }
      #right-sidebar li a.light {
         color: #82828f;
      }
      #switch-mode.light {
         background-color: #5e63ff;

         svg{
            fill: #e6e6ef;
         }
      }
      .header-sidebar.light {
         background-color: #ffffff
      }
      `]})],s)}),o("jAkOT",function(e,t){a("4jZW0")}),o("4jZW0",function(e,t){var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("jcBBX");class s extends o.WebComponent{connectedCallback(){super.connectedCallback(),console.log("main-application connecté"),this.onMounting(),document.addEventListener("close-navbars",this.handleRemoveExpanseContent.bind(this)),document.addEventListener("open-navbars",this.handleExpanseContent.bind(this)),document.addEventListener("dark-mode",this.handleMode.bind(this)),document.addEventListener("light-mode",this.handleMode.bind(this))}onMounting(){let e=JSON.parse(localStorage.getItem("navigation"))||{};void 0!==e.horizontal_vertical_open?!1===e.horizontal_vertical_open?this.Expand():!0===e.horizontal_vertical_open&&this.Minimize():console.log("Aucun état horizontal/vertical trouvé, utilisation de l'état par défaut."),void 0!==e.dark_mode?!1===e.dark_mode?this.lightMode():!0===e.dark_mode&&this.darkMode():console.log("Aucun état de mode sombre trouvé, utilisation de l'état par défaut.")}handleMode(e){let t=JSON.parse(localStorage.getItem("navigation"))||{};console.log(this.isDark,e.detail.dark_mode),!0===e.detail.dark_mode?(console.log("if"),this.isDark=e.detail.dark_mode,t.dark_mode=this.isDark,localStorage.setItem("navigation",JSON.stringify(t)),this.darkMode()):(console.log("else"),this.isDark=e.detail.dark_mode,t.dark_mode=this.isDark,localStorage.setItem("navigation",JSON.stringify(t)),this.lightMode())}darkMode(){(this.shadowRoot?.querySelectorAll(".right-content")[0]).classList.remove("light")}lightMode(){(this.shadowRoot?.querySelectorAll(".right-content")[0]).classList.toggle("light")}handleRemoveExpanseContent(e){e.detail?.horizontalstate===!1&&(this.isExpanse=!1,this.expanse="false",this.Expand())}handleExpanseContent(e){e.detail?.horizontalstate===!0&&(this.isExpanse=!0,this.expanse="true",this.Minimize())}Expand(){(this.shadowRoot?.querySelectorAll(".right-content")[0]).classList.toggle("expand")}Minimize(){(this.shadowRoot?.querySelectorAll(".right-content")[0]).classList.remove("expand")}attributeChangedCallback(e,t,i){"expanse"===e&&(this.expanse=i),"dark"===e&&(this.dark=i),super.attributeChangedCallback(e,t,i)}constructor(...e){super(...e),this.isExpanse=!0,this.isDark=!0,this.expanse=null,this.dark=null}}(0,i.__decorate)([(0,o.state)()],s.prototype,"isExpanse",void 0),(0,i.__decorate)([(0,o.state)()],s.prototype,"isDark",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"expanse",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"dark",void 0),(0,i.__decorate)([(0,o.customElement)({name:"main-application",template:(0,o.html)`${e=>(0,o.html)`
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
      `}`,styles:[(0,o.css)`
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
      `]})],s)}),o("d6Ajt",function(e,t){a("2r23q")}),o("2r23q",function(e,t){var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA");class s extends o.WebComponent{goToStep(e){1===this.currentStep?(this.nom=this.getValueById("nom"),this.prenom=this.getValueById("prenom"),this.date_de_naissance=this.getValueById("date-de-naissance"),this.email=this.getValueById("email"),this.genre=this.getValueById("genre"),this.plan_tarifaire=this.getValueById("tarifs")):2===this.currentStep&&(this.nom_utilisateur=this.getValueById("username"),this.password=this.getValueById("password")),e>=1&&e<=3&&(this.currentStep=e)}getValueById(e){let t=this.shadowRoot.getElementById(e);return console.log(t),t?t.value:""}submitForm(){let e=this.shadowRoot?.querySelectorAll("button")[1];if(e){let t=e.innerText;e.classList.add("loading"),e.innerText="",e.disabled=!0,setTimeout(()=>{e.classList.remove("loading"),e.innerText="Inscription réussie !",e.disabled=!1,setTimeout(()=>{e.innerText=t},3e3)},2e3)}else console.error("Le bouton de soumission n'a pas été trouvé")}constructor(...e){super(...e),this.currentStep=1,this.step=null,this.nom="",this.prenom="",this.date_de_naissance="",this.email="",this.genre="",this.plan_tarifaire="",this.nom_utilisateur="",this.password=""}}(0,i.__decorate)([(0,o.state)()],s.prototype,"currentStep",void 0),(0,i.__decorate)([(0,o.attr)()],s.prototype,"step",void 0),(0,i.__decorate)([(0,o.customElement)({name:"page-inscription",template:(0,o.html)`${e=>(0,o.html)`
      <div id="inscription">
        <!-- Indicateurs d'étapes avec connexion verticale -->
        <div class="step-indicators">
          <div class="step-container">
            <div class="step-indicator ${e.currentStep>=1?"active":""}"></div>
            <span class="step-name ${e.currentStep>=1?"active":""}">Informations personnelles</span>
          </div>
          <div class="step-line ${e.currentStep>=2?"active":""}"></div>
          <div class="step-container">
            <div class="step-indicator ${e.currentStep>=2?"active":""}"></div>
            <span class="step-name ${e.currentStep>=2?"active":""}">Détails de connexion</span>
          </div>
          <div class="step-line ${e.currentStep>=3?"active":""}"></div>
          <div class="step-container">
            <div class="step-indicator ${e.currentStep>=3?"active":""}"></div>
            <span class="step-name ${e.currentStep>=3?"active":""}">Confirmation</span>
          </div>
        </div>
        <div class="inscription-form">
          <div class="step">
            ${1===e.currentStep?(0,o.html)`
                  <h2>Informations personnelles</h2>
                  <div class="row">
                    <div class="input-field">
                      <label for="nom">Nom</label>
                      <input type="text" id="nom" name="nom" value="${e.nom}"/>
                    </div>
                    <div class="input-field">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" value="${e.email}"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field">
                      <label for="prenom">Prénom</label>
                      <input type="text" id="prenom" name="prenom" value="${e.prenom}"/>
                    </div>
                    <div class="input-field">
                      <label for="date-de-naissance">Date de naissance</label>
                      <input type="date" id="date-de-naissance" name="date-de-naissance" value="${e.date_de_naissance}"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="dropdown">
                      <label for="genre">Genre</label>
                      <select id="genre" name="cars" value="${e.genre}">
                        <option value=""></option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                      </select>
                    </div>
                    <div class="dropdown">
                      <label for="tarifs">Plan tarifaire</label>
                      <select id="tarifs" name="cars" value="${e.plan_tarifaire}">
                        <option value=""></option>
                        <option value="mensuel">Mensuel : 30 euros</option>
                        <option value="trimestriel">Trimestriel : 100 euros</option>
                        <option value="annuel">Annuel : 250 euros</option>
                      </select>
                    </div>
                  </div>
                `:""}
            ${2===e.currentStep?(0,o.html)`
                  <h2>Détails de connexion</h2>
                  <div class="row">
                    <div class="input-field">
                      <label for="username">Nom d'utilisateur</label>
                      <input type="text" id="username" name="username" value="${e.nom_utilisateur}"/>
                    </div>
                    <div class="input-field">
                      <label for="password">Mot de passe</label>
                      <input type="password" id="password" name="password" value="${e.password}"/>
                    </div>
                  </div>
                `:""}
            ${3===e.currentStep?(0,o.html)`
                  <h2>Confirmation</h2>
                  <p>Vérifiez les informations que vous avez fournies avant de soumettre.</p>
                  <ul>
                    <li>Nom : ${e.nom}</li>
                    <li>Prénom : ${e.prenom}</li>
                    <li>E-mail : ${e.email}</li>
                    <li>Date de naissance : ${e.date_de_naissance}</li>
                    <li>Genre : ${e.genre}</li>
                    <li>Plan tarifaire : ${e.plan_tarifaire}</li>
                    <li>Nom d'utilisateur : ${e.nom_utilisateur}</li>
                    <li>Mot de passe : ${e.password}</li>
                  </ul>
                `:""}
          </div>

          <div class="navigation">
            <button
              @click="${()=>e.goToStep(e.currentStep-1)}"
              ?disabled="${1===e.currentStep}"
            >
              Précédent
            </button>
            ${3===e.currentStep?(0,o.html)`<button @click="${()=>e.submitForm()}">Soumettre</button>`:(0,o.html)`
                  <button
                    @click="${()=>e.goToStep(e.currentStep+1)}"
                    ?disabled="${3===e.currentStep}"
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
    `}`,styles:[(0,o.css)`
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
      }
      .row {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: space-between;
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
      button.loading {
  position: relative;
  color: transparent; /* Masquer le texte du bouton */
}

button.loading::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #FFF;
  animation: spin 1s linear infinite;
}

/* Animation pour faire tourner le loader */
@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

      /* Styles pour les indicateurs d'étapes et lignes connectées */
      .step-indicators {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        margin-left: 15px;
        margin-top: 28px;
        margin-bottom: 15px;
      }

      .step-container {
        display: flex;
        align-items: center;
      }

      .step-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 10px;
      }

      .step-indicator.active {
        background-color: #ffff;
        border: 1px solid #005eff;
      }

      .step-name {
        font-size: 14px;
        color: #b1b3bc;
      }
      .step-name.active{
        color: #005eff;
      }

      .step-line {
        width: 2px;
        height: 110px; /* Ajustez la hauteur des lignes */
        background-color: #d3ddeb;
        margin-left: 5px; /* Aligner avec les cercles */
      }

      .step-line.active {
        background-color: #005eff;
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
        display: flex;
        flex-direction: column;
      }
      select {
        padding: 9px 10px;
        width: 30ch;
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
      .divider-text {
        color: #b1b3bc;
      }
    `]})],s)});
//# sourceMappingURL=index.214a39c2.js.map