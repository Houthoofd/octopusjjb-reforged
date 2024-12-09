var r=globalThis,a={},e={},t=r.parcelRequire1c26;null==t&&((t=function(r){if(r in a)return a[r].exports;if(r in e){var t=e[r];delete e[r];var i={id:r,exports:{}};return a[r]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(r,a){e[r]=a},r.parcelRequire1c26=t),t.register;var i=t("7WQrb"),o=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA"),t("7KTRf");class n extends o.WebComponent{}n=(0,i.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${r=>(0,o.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="dashboard">
                     <h1>Dashboard</h1>
                  </div>
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
      }
     `]})],n),(0,o.render)((0,o.html)`<page-dashboard></page-dashboard>`,document.body);
//# sourceMappingURL=index.e2e2f9d1.js.map
