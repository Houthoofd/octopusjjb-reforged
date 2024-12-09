var t=globalThis,i={},r={},e=t.parcelRequire1c26;null==e&&((e=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return i[t]=a,e.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,i){r[t]=i},t.parcelRequire1c26=e),e.register;var a=e("7WQrb"),n=e("5D1XK");e("RKbfs"),e("3I5Zu"),e("dLLJA"),e("7KTRf");class o extends n.WebComponent{}o=(0,a.__decorate)([(0,n.customElement)({name:"page-notifications",template:(0,n.html)`${t=>(0,n.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="notifications">
                     <h1>Notifications</h1>
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
     `]})],o),(0,n.render)((0,n.html)`<page-notifications></page-notifications>`,document.body);
//# sourceMappingURL=index.aeb1ebe6.js.map
