var r=globalThis,e={},a={},t=r.parcelRequire1c26;null==t&&((t=function(r){if(r in e)return e[r].exports;if(r in a){var t=a[r];delete a[r];var i={id:r,exports:{}};return e[r]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(r,e){a[r]=e},r.parcelRequire1c26=t),t.register;var i=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA"),t("7KTRf");class o extends n.WebComponent{}o=(0,i.__decorate)([(0,n.customElement)({name:"page-informations",template:(0,n.html)`${r=>(0,n.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="informations">
                     <h1>Informations</h1>
                  </div>
               </div>
            </div>
        </div>
     `}`,styles:[(0,n.css)`
     #application{
         min-height: 100vh;
         background-color: var(--base-clr);
         color: var(--text-clr);
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      .header{

      }
      .right-content{
         display: grid;
         grid-template-columns: 250px 1fr;
      }
     `]})],o),(0,n.render)((0,n.html)`<page-informations></page-informations>`,document.body);
//# sourceMappingURL=index.1b7ac834.js.map
