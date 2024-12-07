var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");var s=a("keLaC");class i extends n.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}checkUserConnection(){return!!localStorage.getItem("userData")||(window.location.href="/pages/connexion",!1)}getRole(){if(!this.checkUserConnection())return;let e=JSON.parse(localStorage.getItem("userData"));console.log("Données utilisateur récupérées:",e);let t=e.role;console.log("Rôle de l'utilisateur:",t),"administrator"===t||"super-administrator"===t?(this.isUser=!1,this.isAdmin=!0):(this.isUser=!0,this.isAdmin=!1),console.log("Est-ce un administrateur ? ",this.isAdmin)}async preloadData(){try{let e=localStorage.getItem("userData");if(!e)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let t=JSON.parse(e);console.log("Données utilisateur récupérées:",t);let r=await fetch(`${s.url}compte/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Erreur serveur.");let a=[await r.json()];return console.log("Données mises dans un tableau:",a,a.length),a.length>0?a:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isUser=null,this.isAdmin=null}}(0,o.__decorate)([(0,n.state)()],i.prototype,"isUser",void 0),(0,o.__decorate)([(0,n.state)()],i.prototype,"isAdmin",void 0),i=(0,o.__decorate)([(0,n.customElement)({name:"page-informations",template:(0,n.html)`${e=>(0,n.html)`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Informations</h1>
            </div>
            <div class="table-infos">
              ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`${(0,n.repeat)(t,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                          <div class="row">
                            <div class="type-de-cours">${e.formatDateFromISO(t.created_at)}</div>
                            <div class="heure-debut">${t.email}</div>
                            <div class="heure-fin">${t.first_name}</div>
                            <div class="type-de-cours">${t.gender}</div>
                            <div class="heure-debut">${t.grade}</div>
                            <div class="heure-fin">${t.last_name}</div>
                            <div class="heure-fin">${t.role}</div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`}`,styles:[(0,n.css)`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
      .title{
        color: black;
      }
    `]})],i);let l=(0,n.html)`${e=>(0,n.html)`<page-informations></page-informations>`}`;(0,n.render)(l);
//# sourceMappingURL=index.b31d09ac.js.map
