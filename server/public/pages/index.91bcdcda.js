var e=globalThis,t={},n={},o=e.parcelRequire1c26;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire1c26=o),o.register;var a=o("7WQrb"),r=o("5D1XK");o("RKbfs"),o("3I5Zu"),o("dLLJA"),o("7KTRf");class i extends r.WebComponent{connectedCallback(){super.connectedCallback(),console.log("Main component connecté"),document.addEventListener("close-navbars",this.handleCloseContent.bind(this))}handleCloseContent(e){console.log("L'événement close-navbars a été détecté.",e.target);let t=this.shadowRoot?.querySelectorAll(".right-content")[0];console.log(this),t&&t.classList.toggle("close"),this.open="false"}attributeChangedCallback(e,t,n){"isopen"===e&&(console.log(`Attribut isOpen modifi\xe9 de ${t} \xe0 ${n}`),this.open=n?"true":"false",this.renderNavBar())}renderNavBar(){console.log("Rendu de la barre de navigation avec open =",this.open)}constructor(...e){super(...e),this.open=null,this.isOpen=!0}}(0,a.__decorate)([(0,r.state)()],i.prototype,"open",void 0),(0,a.__decorate)([(0,r.attr)()],i.prototype,"isOpen",void 0),i=(0,a.__decorate)([(0,r.customElement)({name:"main-application",template:(0,r.html)`${e=>(0,r.html)`
        <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="accueil">
                     <h1>Accueil</h1>
                  </div>
               </div>
            </div>
        </div>
      `}`,styles:[(0,r.css)`
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
      `]})],i),(0,r.render)((0,r.html)`<main-application></main-application>`,document.body);
//# sourceMappingURL=index.91bcdcda.js.map
