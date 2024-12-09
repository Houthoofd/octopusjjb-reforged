var e=globalThis,t={},n={},a=e.parcelRequire1c26;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire1c26=a),a.register;var o=a("7WQrb"),r=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");class i extends r.WebComponent{connectedCallback(){super.connectedCallback(),console.log("VerticalNavBar connecté"),this.open=this.isOpen?"true":"false",document.addEventListener("close-navbars",this.handleCloseContent.bind(this))}handleCloseContent(e){console.log("L'événement close-navbars a été détecté.",e),(this.shadowRoot?.querySelectorAll(".right-content")?.[0]).classList.toggle("close"),this.open="false"}attributeChangedCallback(e,t,n){"isopen"===e&&(console.log(`Attribut isOpen modifi\xe9 de ${t} \xe0 ${n}`),this.open=n?"true":"false",this.renderNavBar())}renderNavBar(){console.log("Rendu de la barre de navigation avec open =",this.open)}constructor(...e){super(...e),this.open=null,this.isOpen=!0}}(0,o.__decorate)([(0,r.state)()],i.prototype,"open",void 0),(0,o.__decorate)([(0,r.attr)()],i.prototype,"isOpen",void 0),i=(0,o.__decorate)([(0,r.customElement)({name:"main-application",template:(0,r.html)`${e=>(0,r.html)`
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
//# sourceMappingURL=index.e2d4df47.js.map
