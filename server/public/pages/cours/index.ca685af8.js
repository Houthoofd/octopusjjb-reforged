var r=globalThis,e={},t={},a=r.parcelRequire1c26;null==a&&((a=function(r){if(r in e)return e[r].exports;if(r in t){var a=t[r];delete t[r];var i={id:r,exports:{}};return e[r]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(r,e){t[r]=e},r.parcelRequire1c26=a),a.register;var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");class n extends o.WebComponent{}n=(0,i.__decorate)([(0,o.customElement)({name:"page-cours",template:(0,o.html)`${r=>(0,o.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="cours">
                     <h1>Cours</h1>
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
     `]})],n),(0,o.render)((0,o.html)`<page-cours></page-cours>`,document.body);
//# sourceMappingURL=index.ca685af8.js.map
