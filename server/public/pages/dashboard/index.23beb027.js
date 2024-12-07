var e=globalThis,t={},r={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirec605=a),a.register;var n=a("7WQrb"),o=a("5D1XK");a("RKbfs"),a("3I5Zu"),a("dLLJA"),a("7KTRf");var l=a("keLaC");class i extends o.WebComponent{connectedCallback(){super.connectedCallback(),this.getRole()}checkUserConnection(){return!!localStorage.getItem("userData")||(window.location.href="/pages/connexion",!1)}getRole(){if(!this.checkUserConnection())return;let e=JSON.parse(localStorage.getItem("userData"));console.log("Données utilisateur récupérées:",e);let t=e.role;console.log("Rôle de l'utilisateur:",t),"super-administrator"===t?this.isSuperAdmin=!0:this.isSuperAdmin=!1,console.log("Est-ce un administrateur ? ",this.isSuperAdmin)}async preloadData(){try{let e=await fetch(`${l.url}users`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw Error("Erreur serveur.");let t=await e.json();return console.log(t),t.length>0?t:[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async loadInfosUser(e){console.log(e);try{let t=await fetch(`${l.url}users/infos/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e}),credentials:"include"});if(!t.ok)throw Error("Erreur serveur.");let r=await t.json();return console.log(r),r}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}async displayMoreInfos(e){console.log("User ID:",e.id);let t=this.shadowRoot?.querySelector(`.panel-row[data-user-id="${e.id}"]`);if(console.log(t),t){if(t.classList.contains("active")){t.classList.remove("active"),console.log("Panel désactivé.");return}t.classList.add("active"),console.log("Panel activé:",t);let r=t.querySelector(".new-participants");if(r||((r=document.createElement("div")).classList.add("new-participants"),t.appendChild(r)),r.children.length>0){console.log("Informations déjà chargées. Aucun rechargement nécessaire.");return}try{let t=await this.loadInfosUser(e.id);if(console.log(t),r.innerHTML="",0===Object.keys(t).length)r.textContent="Aucune information trouvée.";else{let a=document.createElement("form");a.classList.add("user-info-form");let n=(e,t,r,a="text",n=!1)=>{let o=document.createElement("div");o.classList.add("form-group");let l=document.createElement("label");l.textContent=e;let i=document.createElement("input");return i.type=a,i.name=t,i.value=r||"",i.disabled=n,i.classList.add("form-control"),o.appendChild(l),o.appendChild(i),o},o=(e,t,r,a,n=!1)=>{let o=document.createElement("div");o.classList.add("form-group");let l=document.createElement("label");l.textContent=e;let i=document.createElement("select");i.name=t,i.disabled=n,i.classList.add("form-control");let s=document.createElement("option");return s.value="",s.textContent=a,i.appendChild(s),r.forEach(e=>{let t=document.createElement("option");t.value=e.value,t.textContent=e.text,e.value===a&&(t.selected=!0),i.appendChild(t)}),o.appendChild(l),o.appendChild(i),o};a.appendChild(n("Prénom","first_name",t.first_name,"text",!0)),a.appendChild(n("Nom","last_name",t.last_name,"text",!0)),a.appendChild(n("Email","email",t.email,"email",!0)),a.appendChild(o("Choisisez votre rôle","role",[{value:"user",text:"user"},{value:"administrator",text:"administrator"},{value:"super-administrator",text:"super-administrator"}],t.role,!0)),a.appendChild(o("Choisisez votre genre","genre",[{value:"1",text:"Masculin"},{value:"2",text:"Féminin"}],t.gender,!0)),a.appendChild(n("Date de naissance","date_of_birth",this.formatDate(t.date_of_birth,"YYYY-MM-DD"),"date",!0)),a.appendChild(o("Choisisez votre grade","grade",[{value:"1",text:"ceinture blanche"},{value:"2",text:"ceinture blanche une barette"},{value:"3",text:"ceinture blanche deux barettes"},{value:"4",text:"ceinture blanche trois barettes"},{value:"5",text:"ceinture blanche quatre barettes"},{value:"6",text:"ceinture bleue"},{value:"7",text:"ceinture bleue une barette"},{value:"8",text:"ceinture bleue deux barettes"},{value:"9",text:"ceinture bleue trois barettes"},{value:"10",text:"ceinture bleue quatre barettes"},{value:"11",text:"ceinture violette"},{value:"12",text:"ceinture violette une barette"},{value:"13",text:"ceinture violette deux barettes"},{value:"14",text:"ceinture violette trois barettes"},{value:"15",text:"ceinture violette quatre barettes"},{value:"16",text:"ceinture marron"},{value:"17",text:"ceinture marron une barette"},{value:"18",text:"ceinture marron deux barettes"},{value:"19",text:"ceinture marron trois barettes"},{value:"20",text:"ceinture marron quatre barettes"},{value:"21",text:"ceinture noire"},{value:"22",text:"ceinture noire une barette"},{value:"23",text:"ceinture noire deux barettes"},{value:"24",text:"ceinture noire trois barettes"},{value:"25",text:"ceinture noire quatre barettes"},{value:"26",text:"ceinture noire cinq barettes (ceinture noire avec bande rouge)"},{value:"27",text:"ceinture noire six barettes (ceinture noire avec bande rouge)"},{value:"28",text:"ceinture noire sept barettes (ceinture rouge et noire)"},{value:"29",text:"ceinture noire huit barettes (ceinture rouge et noire)"},{value:"30",text:"ceinture noire neuf barettes (ceinture rouge)"},{value:"31",text:"ceinture noire dix barettes (ceinture rouge)"}],t.grade,!0)),a.appendChild(o("Choisisez votre abonnement","abonnement",[{value:"1",text:"paiement mensuel - 25€"},{value:"2",text:"paiement- trimestriel - 100€"},{value:"3",text:"paiement annuel - 300€"}],t.abonnement,!0));let i=document.createElement("button");i.type="button",i.textContent="Modifier les informations",i.classList.add("edit-btn");let s=document.createElement("button");s.type="button",s.textContent="Présences",s.classList.add("more-infos-btn");let c=document.createElement("button");c.type="button",c.textContent="Sauvegarder",c.classList.add("save-btn"),c.style.display="none",a.appendChild(i),a.appendChild(c),r.appendChild(a),r.appendChild(s);let u=e=>{a.querySelectorAll("input").forEach(t=>{t.disabled=!e}),a.querySelectorAll("select").forEach(t=>{t.disabled=!e})};i.addEventListener("click",()=>{u(!0),c.style.display="block",i.style.display="none"}),s.addEventListener("click",()=>{console.log("more infos");let e={email:t.email,prenom:t.first_name,nom:t.last_name};console.log(e);let r=new URLSearchParams(e).toString();if(console.log("queryString"+r),window.location.href=`${l.url}pages/profile?${r}`,e.email&&e.prenom&&e.nom)fetch(`${l.url}pages/profile?${r}`).then(e=>e.json()).then(e=>{console.log("Statistiques de l'utilisateur:",e),window.location.href=`${l.url}pages/profile?${r}`}).catch(e=>console.error("Erreur:",e));else{let e=localStorage.getItem("email"),t=localStorage.getItem("firstName"),r=localStorage.getItem("lastName");console.log("fetch via body"),fetch(`${l.url}pages/profile`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,firstName:t,lastName:r})}).then(e=>e.json()).then(e=>{console.log("Statistiques de l'admin:",e)}).catch(e=>console.error("Erreur:",e))}}),c.addEventListener("click",async()=>{let t={};a.querySelectorAll("input").forEach(e=>{t[e.name]=e.value}),a.querySelectorAll("select").forEach(e=>{t[e.name]=e.value}),console.log(t);try{let r=await fetch(`${l.url}users/infos/update`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.id,data:t})});if(!r.ok)throw Error("Erreur serveur.");let a=await r.json();return console.log(a),a}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}try{console.log("Informations mises à jour avec succès:",t),u(!1),c.style.display="none",i.style.display="block"}catch(e){console.error("Erreur lors de la mise à jour des informations:",e)}})}}catch(e){console.error("Erreur lors du chargement des informations :",e),r.textContent="Erreur lors du chargement des informations."}console.log("Informations ajoutées dans la div:",r)}else console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.')}formatDate(e,t="YYYY-MM-DD"){let r=new Date(e),a=r.getFullYear(),n=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return"YYYY-MM"===t?`${a}-${n}`:`${a}-${n}-${o}`}deleteUser(e){window.confirm("Êtes-vous sûr de vouloir supprimer"+e.first_name+" "+e.last_name)?(console.log("Suppression de l'utilisateur avec ID:",e.first_name+" "+e.last_name),fetch(`${l.url}users/delete/${e.id}`,{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.success?console.log("Utilisateur supprimé avec succès"):console.error("Erreur lors de la suppression de l'utilisateur")}).catch(e=>console.error("Erreur lors de la requête de suppression:",e))):console.log("Suppression annulée")}constructor(...e){super(...e),this.isSuperAdmin=null}}(0,n.__decorate)([(0,o.state)()],i.prototype,"isSuperAdmin",void 0),i=(0,n.__decorate)([(0,o.customElement)({name:"page-dashboard",template:(0,o.html)`${e=>(0,o.html)`
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
              <h1 class="title">Dashboard</h1>
            </div>
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${(0,o.asyncAppend)(e.preloadData(),t=>(0,o.html)`
                    ${(0,o.repeat)(t,(0,o.html)`${t=>(console.log(t),(0,o.html)`
                          <div class="panel-row" data-user-id="${t.id}">
                            <div class="row">
                              <div class="type-de-cours">${t.last_name}</div>
                              <div class="heure-debut">${t.first_name}</div>
                              <div class="heure-fin">${t.gender}</div>
                              <div class="heure-fin">${t.grade}</div>
                              <div @click="${t=>e.displayMoreInfos(t)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                              ${!0===e.isSuperAdmin?(0,o.html)`<div @click="${t=>e.deleteUser(t)}" class='icon-delete'><div class='icon'><pf-icons-trash-alt></pf-icons-trash-alt></div></div>`:(0,o.html)``}
                            </div>
                          </div>`)}`)}`)}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`}`,styles:[(0,o.css)`
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
        .panel-row .new-participants {
          display: none; /* Cacher la div par défaut */
        }

        .panel-row.active .new-participants {
          display: block; /* Afficher la div quand panel-row est active */
        }
      `]})],i);let s=(0,o.html)`${e=>(0,o.html)`<page-dashboard></page-dashboard>`}`;(0,o.render)(s);
//# sourceMappingURL=index.23beb027.js.map
