var e=globalThis,r={},t={},a=e.parcelRequire1c26;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,a.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequire1c26=a),a.register;var i=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");class l extends n.WebComponent{}l=(0,i.__decorate)([(0,n.customElement)({name:"main-application",template:(0,n.html)`${e=>(0,n.html)`
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
      `]})],l),document.addEventListener("close-navbars",e=>{let r=document.querySelectorAll("nav");console.log(r),r.forEach(e=>{console.log("Fermeture des sidebars externes",e)})}),(0,n.render)((0,n.html)`<main-application></main-application>`,document.body);
//# sourceMappingURL=index.0e8eadf5.js.map
