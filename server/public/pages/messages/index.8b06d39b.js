var e=globalThis,r={},a={},t=e.parcelRequire1c26;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){a[e]=r},e.parcelRequire1c26=t),t.register;var i=t("7WQrb"),s=t("5D1XK");t("RKbfs"),t("3I5Zu"),t("dLLJA"),t("7KTRf");class n extends s.WebComponent{}n=(0,i.__decorate)([(0,s.customElement)({name:"page-message",template:(0,s.html)`${e=>(0,s.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="messages">
                     <h1>Messages</h1>
                  </div>
               </div>
            </div>
        </div>
     `}`,styles:[(0,s.css)`
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
     `]})],n),(0,s.render)((0,s.html)`<page-message></page-message>`,document.body);
//# sourceMappingURL=index.8b06d39b.js.map
