var e=globalThis,t={},o={},n=e.parcelRequire1c26;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire1c26=n),n.register;var r=n("7WQrb"),a=n("5D1XK");n("RKbfs"),n("3I5Zu"),n("dLLJA"),n("7KTRf");class l extends a.WebComponent{connectedCallback(){super.connectedCallback(),console.log("Main component connecté"),document.addEventListener("close-navbars",this.handleCloseContent.bind(this))}handleCloseContent(e){console.log("L'événement close-navbars a été détecté.",e.target);let t=this.shadowRoot?.querySelectorAll(".right-content")[0];console.log(this),t&&t.classList.toggle("close"),this.open="false"}attributeChangedCallback(e,t,o){"isopen"===e&&(console.log(`Attribut isOpen modifi\xe9 de ${t} \xe0 ${o}`),this.open=o?"true":"false",this.renderNavBar())}renderNavBar(){console.log("Rendu de la barre de navigation avec open =",this.open)}constructor(...e){super(...e),this.open=null,this.isOpen=!0}}(0,r.__decorate)([(0,a.state)()],l.prototype,"open",void 0),(0,r.__decorate)([(0,a.attr)()],l.prototype,"isOpen",void 0),l=(0,r.__decorate)([(0,a.customElement)({name:"page-compte",template:(0,a.html)`${e=>(0,a.html)`
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
     `}`,styles:[(0,a.css)`
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
     `]})],l),(0,a.render)((0,a.html)`<page-compte></page-compte>`,document.body);
//# sourceMappingURL=index.a81fffb1.js.map
