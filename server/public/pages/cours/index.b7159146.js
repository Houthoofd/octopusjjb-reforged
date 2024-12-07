var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var o=a("7WQrb"),i=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");var n=a("keLaC");class s extends i.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}checkUserConnection(){return!!localStorage.getItem("userData")||(window.location.href="/pages/connexion",!1)}getRole(){if(!this.checkUserConnection())return;let e=JSON.parse(localStorage.getItem("userData"));console.log("Données utilisateur récupérées:",e);let t=e.role;console.log("Rôle de l'utilisateur:",t),"administrator"===t||"super-administrator"===t?this.isAdmin=!0:this.isAdmin=!1,console.log("Est-ce un administrateur ? ",this.isAdmin)}async register(e){try{let t=localStorage.getItem("userData");if(!t)throw Error("Utilisateur non connecté. Aucune donnée dans localStorage.");let r=JSON.parse(t);console.log("Données utilisateur récupérées:",r);let a={user:r,cours:e};console.log(a);let o=await fetch(`${n.url}cours/inscription/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!o.ok)throw Error("Erreur serveur.");let i=await o.json();console.log(i),i?(i.success_message&&alert(i.success_message+"au cour du "+this.formatDateFromISO(e.date_cours)),i.info_message&&alert(i.info_message)):console.log("Réponse vide ou mal formatée."),409===o.status&&alert(i.info_message)}catch(e){return console.error("Erreur lors de la requête fetch:",e),alert("vous êtes déjà inscrit à ce cour"),[]}}async preloadData(){try{let e=await fetch(`${n.url}cours/`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return t.cours.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadParticipants(e){console.log(e);try{let t=await fetch(`${n.url}cours/participant/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({cour_id:e})});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return r.participants&&r.participants.length>0?r.participants:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayParticipants(e){console.log("Cours ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-cours-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let r=t.querySelector(".new-participants");if(r&&r.children.length>0){console.log("Participants déjà chargés. Aucun rechargement nécessaire.");return}r||((r=document.createElement("div")).classList.add("new-participants"),t.appendChild(r));try{let t=await this.loadParticipants(e.id);r.innerHTML="",0===Object.keys(t).length?r.textContent="Aucun participant trouvé.":Object.values(t).forEach(t=>{let a=document.createElement("div");a.classList.add("pill");let o=document.createElement("div");o.classList.add("first-name"),o.textContent=t.first_name;let i=document.createElement("div");i.classList.add("last-name"),i.textContent=t.last_name;let s=document.createElement("div");s.classList.add("icon-cross");let l=document.createElement("div");l.classList.add("icon"),l.innerHTML="<pf-icons-times></pf-icons-times>",s.appendChild(l),s.addEventListener("click",async()=>{try{let r=await fetch(`${n.url}cours/participant/cancel/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courId:e.id,participantId:t.participant_id})});if(!r.ok)throw Error("Erreur serveur : impossible de supprimer le participant.");let a=await r.json();a.message?(console.log("Participant supprimé avec succès."),s.parentElement.classList.toggle("invalide")):console.error("Erreur lors de la suppression du participant :",a.message)}catch(e){console.error("Erreur lors de la requête fetch :",e)}});let c=document.createElement("div");c.classList.add("icon-validate");let d=document.createElement("div");d.classList.add("icon"),d.innerHTML="<pf-icons-check></pf-icons-check>",c.appendChild(d),c.addEventListener("click",async()=>{console.log(e.id,t.participant_id);try{let r=await fetch(`${n.url}cours/participant/validation/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({courId:e.id,participantId:t.participant_id})});if(!r.ok)throw Error("Erreur serveur : impossible de valider le participant.");let a=await r.json();a.message?(console.log("Participant validé avec succès."),s.parentElement.classList.toggle("valide")):console.error("Erreur lors de la suppression du participant :",a.message)}catch(e){console.error("Erreur lors de la requête fetch :",e)}}),a.appendChild(o),a.appendChild(i),a.appendChild(s),a.appendChild(c),r.appendChild(a)})}catch(e){console.error("Erreur lors du chargement des participants:",e),r.textContent="Erreur lors du chargement des participants."}console.log("Participants ajoutés dans la div:",r)}else console.error('Aucun élément "panel-row" trouvé pour ce cours.')}formatDateFromISO(e){let t=new Date(e),r=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${a}-${o}`}convertToISODate(e){let[t,r,a]=e.split("-");return new Date(`${t}-${r}-${a}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.data=[],this.isAdmin=null}}(0,o.__decorate)([(0,i.state)()],s.prototype,"isAdmin",void 0),s=(0,o.__decorate)([(0,i.customElement)({name:"page-cours",template:(0,i.html)`${e=>(0,i.html)`
        <pf-page
          masterhead-no-icon
          masterhead-no-branding
          drawer-inline
          drawer-expanded
          drawer-static
          drawer-panel-left
        >
          <div slot="drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Cours</h1>
            </div>
            <div class="table-infos">
              ${(0,i.asyncAppend)(e.preloadData(),t=>(0,i.html)`
                    ${(0,i.repeat)(t.cours,(0,i.html)`${t=>(console.log(t),(0,i.html)`
                          <div class="panel-row" data-cours-id="${t.id}">
                            <div class="row">
                              <div class="type-de-cours">${t.type_cours}</div>
                              <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                              <div class="heure-debut">${t.heure_debut}</div>
                              <div class="heure-fin">${t.heure_fin}</div>
                              <pf-button @click="${()=>e.register(t)}">Réservez</pf-button>
                              ${!0===e.isAdmin?(0,i.html)`<div @click="${t=>e.displayParticipants(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>`:(0,i.html)``}
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,i.css)`
        .title{
          color: black;
        }
        .table-infos {
          color: black;
          display: flex;
          gap: 20px;
          flex-direction: column;
        }
        .navigation {
          color: black;
        }
        .row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 10px;
          background-color: #9e9e9e26;
        }
        .icon-down{
          cursor: pointer;
          background-color: #9E9E9E;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .icon{
          transform: translate(4px, 4px);
        }
        .participants{
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }
        .pill{
          display: flex;
          justify-content: space-between;
          background-color: #9e9e9e0f;
          width: 200px;
          padding: 10px 10px;
          border-radius: 10px;
        }
        .pill.valide{
          background-color: green;
        }
        .pill.invalide{
          background-color: red;
        }
        .pill > .icon-cross{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-validate{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-cross > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
        }
        .pill > .icon-validate > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
        }
        .panel-row .new-participants {
          display: none; /* Cacher la div par défaut */
        }

        .panel-row.active .new-participants {
          display: block; /* Afficher la div quand panel-row est active */
        }
      `]})],s);let l=(0,i.html)`${e=>(0,i.html)`<page-cours></page-cours>`}`;(0,i.render)(l);
//# sourceMappingURL=index.b7159146.js.map
