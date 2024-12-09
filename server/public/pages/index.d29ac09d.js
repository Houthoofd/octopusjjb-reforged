var r=globalThis,a={},e={},i=r.parcelRequire1c26;null==i&&((i=function(r){if(r in a)return a[r].exports;if(r in e){var i=e[r];delete e[r];var t={id:r,exports:{}};return a[r]=t,i.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(r,a){e[r]=a},r.parcelRequire1c26=i),i.register;var t=i("7WQrb"),n=i("5D1XK");i("RKbfs"),i("3I5Zu"),i("dLLJA"),i("7KTRf");class l extends n.WebComponent{}l=(0,t.__decorate)([(0,n.customElement)({name:"main-application",template:(0,n.html)`${r=>(0,n.html)`
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
      `}`,styles:[(0,n.css)`
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
      }
      `]})],l),(0,n.render)((0,n.html)`<main-application></main-application>`,document.body);
//# sourceMappingURL=index.d29ac09d.js.map
