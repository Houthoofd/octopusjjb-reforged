var e=globalThis,t={},i={},o=e.parcelRequire1c26;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequire1c26=o),o.register;var r=o("7WQrb"),n=o("5D1XK");o("RKbfs"),o("3I5Zu"),o("dLLJA");const s="http://ec2-18-185-136-232.eu-central-1.compute.amazonaws.com:3000/";class a extends n.WebComponent{}a=(0,r.__decorate)([(0,n.customElement)({name:"main-home",template:(0,n.html)`${e=>(0,n.html)`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${(0,n.repeat)([{label:"Connexion",ref:"/pages/connexion"}],(0,n.html)`${e=>(0,n.html)`<pf-action-list><pf-button><a class="link" href=${e.ref}>${e.label}</a></pf-button></pf-action-list>`}`)}
                </pf-action-list>
            </pf-masthead>

            <section>
                <h1>Plongez dans l'univers implacable du jiu jitsu Brésilien</h1>
            </section>

            <section>
                <h1>Entraînez-vous avec les meilleurs</h1>
                <span>Notre équipe d'enseignants d'élite vous offre une expérience d'apprentissage intense et sans compromis</span>
            </section>

            <section id="schedule">
                <h1>Grille horaires</h1>
                <div class="schedule-container">
                    ${(0,n.repeat)([{day:"Lundi",time:"19h30-21h15"},{day:"jeudi",time:"19h30-21h15"},{day:"Samedi",time:"12h00-13h30"},{day:"Dimanche",time:"14h15-16h00"}],(0,n.html)`${e=>(0,n.html)`
                            <div class="schedule-row">
                                <div class="day">${e.day}</div>
                                <div class="time">${e.time}</div>
                                <div class="arrow">→</div>
                            </div>
                            `}`)}
                </div>
            </section>

            <section id="tarifs">
                <div class="container">
                    <div class="header">
                        <h2>Tarifs</h2>
                        <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                    </div>
                    <div class="plans-container">
                        ${(0,n.repeat)([{number:1,text:"Plan mensuel",montant:"40 euros/mois"},{number:2,text:"Plan trimestriel",montant:"100 euros",mois:"30 euros/mois"},{number:3,text:"Plan annuel",montant:"300 euros",mois:"25 euros/mois"}],(0,n.html)`${e=>(0,n.html)`
                                    <div class="plan">
                                        <div class="plan-content">
                                            <span class="number">${e.number}</span>
                                            <p>${e.text}</p>
                                        </div>
                                        <div class="plan-montant">
                                            <p>${e.montant}</p>
                                        </div>
                                        <div class="plan-mois">
                                            <p>${e.mois}</p>
                                        </div>
                                </div>
                                `}`)}
                    </div>
                </div>
            </section>

            <special-section></special-section>
            <main-footer></main-footer>
        </div>`}`,styles:[(0,n.css)`
        section{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            margin: 50px auto;
            padding: 10px;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        section > h1{
            font-size: 36px;
            color: #ffffff;
        }
        section > h3{
            font-size: 24px;
            color: #ffffff;
        }
        .schedule-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #004080;
            padding: 10px;
        }
        .schedule-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #004080;
            padding: 15px 0;
        }
        .schedule-row:last-child {
            border-bottom: none;
        }

        .day, .time, .arrow {
            font-size: 18px;
        }

        .arrow {
            font-size: 24px;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 50px auto;
            text-align: center;
        }

        .header h1 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .header h2 {
            font-size: 36px;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .plans-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 30px;
        }
        .plan {
            background-color: #003366;
            border-radius: 15px;
            padding: 20px;
            width: 300px;
            margin: 10px;
            text-align: center;
        }

        .plan-content .number {
            font-size: 48px;
            font-weight: bold;
            color: #66ccff;
        }

        .plan-content p {
            font-size: 16px;
            margin: 15px 0;
        }

        .plan-image img {
            width: 80px;
            height: auto;
            margin-top: 10px;
        }

        .logo{
            background-image: url(/images/logo3.png);
            background-size: contain;
            aspect-ratio: 1/1;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center;
            margin: 10px 20px;
        }
        .link{
            text-decoration: none;
        }
        `],shadowOptions:{mode:"open"}})],a);class l extends n.WebComponent{attributeChangedCallback(e,t,i){"visible"===e&&(this.isVisible="true"===i),super.attributeChangedCallback(e,t,i)}displayForm(){this.isVisible=!this.isVisible,this.visible=this.isVisible?"true":"false"}async send(){let e=this.shadowRoot?.querySelectorAll("input"),t=e?.[0].value||"",i=e?.[1].value||"";if(!t||!i){alert("Vous devez remplir les champs");return}if(0===this.currentSelection.length){alert("Veuillez sélectionner au moins un cours d'essai.");return}this.utilisateur.push({nom:t,email:i,cours:this.currentSelection}),console.log("Utilisateur et cours sélectionnés :",this.utilisateur);let o=await this.verification(t,i);if(console.log(o),!0===o)try{let e=await fetch(`${s}reservations/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.utilisateur)});if(e.ok){let t=await e.json();if(console.log("Utilisateur enregistré avec succès !",t),t.role){let e={users:this.utilisateur.map(e=>({nom:e.nom,email:e.email,cours:e.cours})),role:t.role};localStorage.setItem("userStatus",JSON.stringify(e))}this.currentSelection=[],this.utilisateur=[]}else console.error("Erreur lors de l'enregistrement :",e.statusText),alert("Une erreur s'est produite. Veuillez réessayer.")}catch(e){console.error("Erreur lors de la requête :",e),alert("Impossible d'enregistrer la réservation.")}else alert("Vous avez déjà réservé un cours d'essai.")}selectRow(e){if(this.currentSelection.length>=1){alert("Vous ne pouvez sélectionner qu'un seul cours d'essai");return}this.currentSelection=[...this.currentSelection,e],console.log("Cours sélectionné:",e)}deleteRow(e){let t=e.date_cours;this.currentSelection=this.currentSelection.filter(e=>e.date_cours!==t),console.log("Liste de sélection mise à jour après suppression:",this.currentSelection)}async verification(e,t){try{let i=await fetch(`${s}reservations/verification/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:e,email:t})});if(!i.ok)return console.error("Erreur lors de la vérification :",i.statusText),alert("Une erreur s'est produite lors de la vérification. Veuillez réessayer."),!1;{let e=await i.json();if(console.log(e.canRegister),!0===e.canRegister)return!0;return alert("Vous avez déjà réservé un cours d'essai."),!1}}catch(e){return console.error("Erreur lors de la requête :",e),alert("Impossible de vérifier la réservation."),!1}}async preloadData(){try{let e=await fetch(`${s}cours/`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok){let t=await e.text();throw Error(`Erreur serveur: ${e.status} - ${t}`)}let t=await e.json();if(console.log("Données récupérées:",t),t&&t.cours&&Array.isArray(t.cours)&&t.cours.length>0)return t.cours;return console.warn("Aucun cours trouvé."),[]}catch(e){return console.error("Erreur lors de la requête fetch:",e),[]}}formatDateFromISO(e){let t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${i}-${o}-${r}`}convertToISODate(e){let[t,i,o]=e.split("-");return new Date(`${t}-${i}-${o}T00:00:00Z`).toISOString()}constructor(...e){super(...e),this.utilisateur=[],this.currentSelection=[],this.visible=null,this.isVisible=!1}}(0,r.__decorate)([(0,n.state)()],l.prototype,"currentSelection",void 0),(0,r.__decorate)([n.attr],l.prototype,"visible",void 0),(0,r.__decorate)([(0,n.state)()],l.prototype,"isVisible",void 0),l=(0,r.__decorate)([(0,n.customElement)({name:"special-section",template:(0,n.html)`${e=>(0,n.html)`
        <section id="reservation">
            <h3>Réservez maintenant</h3>
            <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
            <pf-button @click="${()=>e.displayForm()}">Cliquez-ici</pf-button>
            ${e.isVisible?(0,n.html)`
                <form>
                    <div>
                        <input type='text' placeholder="Nom">
                    </div>
                    <div>
                        <input type='email' placeholder="E-mail">
                    </div>
                    <pf-panel scrollable class="result-box">
                        <slot name="header">
                            <h3>Ma réservation</h3>
                        </slot>
                        <slot>
                            <div class="table-infos">
                                ${(0,n.asyncAppend)(e.preloadData(),t=>(0,n.html)`
                                    <div class="raw-infos">
                                        ${(0,n.repeat)(t,(0,n.html)`${t=>(0,n.html)`
                                                        <div class="row" @click="${t=>e.selectRow(t)}">
                                                            <div class="type-de-cours">${t.type_cours}</div>
                                                            <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                                                            <div class="heure-debut">${t.heure_debut}</div>
                                                            <div class="heure-fin">${t.heure_fin}</div>
                                                        </div>`}`)}
                                    </div>
                                    `)}
                            </div>
                        </slot>
                        <slot name="extra-slot">
                             <div class="selection">
                                ${(0,n.repeat)(e.currentSelection,(0,n.html)`${t=>(console.log(t),(0,n.html)`
                                                <div class="selection">
                                                    <div class="type-de-cours">${t.type_cours}</div>
                                                    <div class="date">${e.formatDateFromISO(t.date_cours)}</div>
                                                    <div class="heure-debut">${t.heure_debut}</div>
                                                    <div class="heure-fin">${t.heure_fin}</div>
                                                    <div class="icon" @click="${t=>e.deleteRow(t)}"><pf-icons-trash-alt></pf-icons-trash-alt></div>
                                                </div>
                                            `)}`)}
                             </div>
                        </slot>
                    </pf-panel>
                    <pf-button @click="${()=>e.send()}">Réservez</pf-button>
                </form>
            `:""}
        </section>
        `}`,styles:[(0,n.css)`
        section#reservation {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
        }
        section#reservation > h3{
            font-size: 36px;
        }
        section#reservation > form {
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        section#reservation > form.active {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }
        .table-infos {
            display: grid;
            align-items: center;
            width: 100%;
        }
        section#réservation > form > .table-infos .raw-infos {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding: 10px 10px;
        }
        section#réservation > form > .table-infos .raw-infos {
            justify-content: space-between;
            align-items: center;
            display: flex;
            padding: 10px 10px;
            cursor: pointer;
        }
        section#réservation > form > .table-infos .raw-infos:nth-child(odd) {
            background-color: #9e9e9e59;
        }

        section#réservation > form > .table-infos .raw-infos:nth-child(even) {
            background-color: #9e9e9e17;
        }
        .type-de-cours-infos {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 10px 10px;
            width: 12ch;
        }
        .heure-fin-infos {
            padding: 10px 10px;
            width: 12ch;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .heure-debut-infos {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 10px 10px;
            width: 12ch;
        }
        .date-infos {
            display: flex;
            align-items: center;
            align-items: center;
            justify-content: center;
            padding: 10px 10px;
        }
        .down-arrow {
            cursor: pointer;
            background-color: #0350f4b0;
            justify-content: center;
            padding: 10px 10px;
            border-radius: 3px;
        }
        button.inscription {
            padding: 10px 10px;
            border: none;
            border-radius: 3px;
            background-color: #5b32a3b8;
            color: #ffff;
            cursor: pointer;
        }
        .raw-infos {
            cursor: pointer;
            justify-content: space-between;
            display: flex;
            flex-direction: column-reverse;
        }
        .row:nth-child(even){
             background-color:#004080;
        }
        .row:nth-child(odd){
            background-color:#0958a7;
        }
        .course-container {
            color: black;
        }

        .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 10px;
            gap: 10px;
            text-align: center;
        }

        pf-modal.result-box {
            display: none;
        }
        pf-modal.result-box.active {
            display: block;
        }       
        .selection {
            color: #3e8635;
            display: flex;
            justify-content: space-around;
            padding: 10px 10px;
            background-color: #f3faf2;
            margin-top: 10px;
        }
        input[type="text"]{
        border: none;
        background-color: #fafbfe;
        width: 47ch;
        padding: 20px 10px;
        border-radius: 3px;
      }
      input[type="text"]::placeholder {
        color: #a2adbe;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 47ch;
        padding: 20px 10px;
        border-radius: 3px;
      }

      input[type="email"]::placeholder {
        color: #a2adbe;
      }
        `]})],l);class c extends n.WebComponent{}c=(0,r.__decorate)([(0,n.customElement)({name:"main-footer",template:(0,n.html)`${e=>(0,n.html)`
            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>Emplacement</h3>
                        <ul>
                            <li><a href="#">Nous trouver</a></li>
                            <li><a href="#">Plan d'accès</a></li>
                            <li><a href="#">Transports</a></li>
                        </ul>
                </div>
                <div class="footer-column">
                        <h3>Cours</h3>
                        <ul>
                            <li><a href="#">Horaires</a></li>
                            <li><a href="#">Prix</a></li>
                            <li><a href="#">Instructeurs</a></li>
                        </ul>
                </div>
                <div class="footer-column">
                        <h3>Extras</h3>
                        <ul>
                            <li><a href="#">Galerie photo</a></li>
                            <li><a href="#">Événements</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Tous les droits sont réservés</p>
                <div class="footer-icons">
                    <a href="https://www.instagram.com/octopusteambjj_belgium_braine/"><pf-icons-instagram></pf-icons-instagram></a>
                </div>
            </div>
        </footer>`}`,styles:[(0,n.css)`
        footer {
            background-color: #002244;
            color: white;
            padding: 20px;
            font-family: 'Arial', sans-serif;
        }

        .footer-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .footer-column {
            width: 30%;
        }

        .footer-column h3 {
            margin-bottom: 15px;
            font-size: 18px;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
        }

        .footer-column ul li {
            margin-bottom: 10px;
        }

        .footer-column ul li a {
            color: white;
            text-decoration: none;
        }

        .footer-column ul li a:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bottom p {
            margin: 0;
        }

        .footer-icons {
            display: flex;
        }

        .footer-icons a {
            margin-left: 15px;
        }

        .footer-icons img {
            width: 24px;
            height: 24px;
        }
        `]})],c),(0,n.render)((0,n.html)`<main-home></main-home>`,document.body);
//# sourceMappingURL=index.2e78411c.js.map
