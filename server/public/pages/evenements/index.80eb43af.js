var e=globalThis,r={},t={},n=e.parcelRequire1c26;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire1c26=n),n.register;var a=n("7WQrb"),i=n("5D1XK");n("RKbfs"),n("3I5Zu"),n("dLLJA"),n("7KTRf");class l extends i.WebComponent{}l=(0,a.__decorate)([(0,i.customElement)({name:"page-evenements",template:(0,i.html)`${e=>(0,i.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="evenements">
                     <h1>Evènements</h1>
                  </div>
               </div>
            </div>
        </div>
     `}`,styles:[(0,i.css)`
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
     `]})],l),(0,i.render)((0,i.html)`<page-evenements></page-evenements>`,document.body);
//# sourceMappingURL=index.80eb43af.js.map
