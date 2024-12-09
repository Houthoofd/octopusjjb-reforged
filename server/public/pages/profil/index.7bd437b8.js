var r=globalThis,e={},t={},i=r.parcelRequire1c26;null==i&&((i=function(r){if(r in e)return e[r].exports;if(r in t){var i=t[r];delete t[r];var a={id:r,exports:{}};return e[r]=a,i.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(r,e){t[r]=e},r.parcelRequire1c26=i),i.register;var a=i("7WQrb"),l=i("5D1XK");i("RKbfs"),i("3I5Zu"),i("dLLJA"),i("7KTRf");class o extends l.WebComponent{}o=(0,a.__decorate)([(0,l.customElement)({name:"page-profil",template:(0,l.html)`${r=>(0,l.html)`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="content">
                  <div class="profil">
                     <h1>Profil</h1>
                  </div>
               </div>
            </div>
        </div>
     `}`,styles:[(0,l.css)`
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
     `]})],o),(0,l.render)((0,l.html)`<page-profil></page-profil>`,document.body);
//# sourceMappingURL=index.7bd437b8.js.map
