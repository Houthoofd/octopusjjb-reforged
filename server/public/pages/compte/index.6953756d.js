var e=globalThis,r={},t={},a=e.parcelRequire1c26;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequire1c26=a),a.register;var i=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");class n extends o.WebComponent{}n=(0,i.__decorate)([(0,o.customElement)({name:"page-compte",template:(0,o.html)`${e=>(0,o.html)`
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
     `]})],n),(0,o.render)((0,o.html)`<page-compte></page-compte>`,document.body);
//# sourceMappingURL=index.6953756d.js.map
