import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import { PfModalBox } from 'unofficial-pf-v5-wc';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import {url} from '../../url';

@customElement({
    name: "main-home",
    template: html`${(home: Home) => {
        const buttons = [
            {label: 'Connexion', ref: '/pages/connexion'}
        ];
        const schedule = [
            { day: 'Lundi', time: '19h30-21h15' },
            { day: 'jeudi', time: '19h30-21h15' },
            { day: 'Samedi', time: '12h00-13h30' },
            { day: 'Dimanche', time: '14h15-16h00' },
        ];
        const plans = [
            { number: 1, text: 'Plan mensuel', montant: '40 euros/mois'},
            { number: 2, text: 'Plan trimestriel', montant: '100 euros', mois: '30 euros/mois'},
            { number: 3, text: 'Plan annuel', montant: '300 euros', mois: '25 euros/mois'}
        ];

        return html`<div>
            <pf-masthead display-inline>
                <div slot="brand">
                    <div class="logo"></div>
                </div>
                <pf-action-list>
                    ${repeat(buttons, html`${(button) => {return html`<pf-action-list><pf-button><a class="link" href=${button.ref}>${button.label}</a></pf-button></pf-action-list>`}}`)}
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
                    ${repeat(
                        schedule, 
                        html`${(jour) => {
                        return html`
                            <div class="schedule-row">
                                <div class="day">${jour.day}</div>
                                <div class="time">${jour.time}</div>
                                <div class="arrow">→</div>
                            </div>
                            `}
                        }`)
                    }
                </div>
            </section>

            <section id="tarifs">
                <div class="container">
                    <div class="header">
                        <h2>Tarifs</h2>
                        <h1>Choisissez parmi trois plans adaptés à vos besoins et votre budget.</h1>
                    </div>
                    <div class="plans-container">
                        ${repeat(
                            plans,
                            html`${(plan) => {
                                return html`
                                    <div class="plan">
                                        <div class="plan-content">
                                            <span class="number">${plan.number}</span>
                                            <p>${plan.text}</p>
                                        </div>
                                        <div class="plan-montant">
                                            <p>${plan.montant}</p>
                                        </div>
                                        <div class="plan-mois">
                                            <p>${plan.mois}</p>
                                        </div>
                                </div>
                                `
                            }}`
                        )}
                    </div>
                </div>
            </section>

            <special-section></special-section>
            <main-footer></main-footer>
        </div>`
    }}`,
    styles: [ 
        css`
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
        `
    ],
    shadowOptions: { mode: 'open' }
})
export class Home extends WebComponent {}


@customElement({
    name: "special-section",
    template: html`${(section: Section) => {
        return html`
        <section id="reservation">
            <h3>Réservez maintenant</h3>
            <span>Ne manquez pas cette occasion d'essayer un cours gratuit</span>
            <pf-button @click="${() => section.displayForm()}">Cliquez-ici</pf-button>
            ${section.isVisible ? html`
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
                                ${asyncAppend(section.preloadData(), (result) => {
                                    return html`
                                    <div class="raw-infos">
                                        ${
                                            repeat(
                                                result, 
                                                html`${(cour) => {
                                                    return html`
                                                        <div class="row" @click="${(cour) => section.selectRow(cour)}">
                                                            <div class="type-de-cours">${cour.type_cours}</div>
                                                            <div class="date">${section.formatDateFromISO(cour.date_cours)}</div>
                                                            <div class="heure-debut">${cour.heure_debut}</div>
                                                            <div class="heure-fin">${cour.heure_fin}</div>
                                                        </div>`;
                                                }}`
                                            )
                                        }
                                    </div>
                                    `;
                                })}
                            </div>
                        </slot>
                        <slot name="extra-slot">
                             <div class="selection">
                                ${repeat(
                                        section.currentSelection,
                                        html`${(cour) =>{
                                            console.log(cour)
                                            return html`
                                                <div class="selection">
                                                    <div class="type-de-cours">${cour.type_cours}</div>
                                                    <div class="date">${section.formatDateFromISO(cour.date_cours)}</div>
                                                    <div class="heure-debut">${cour.heure_debut}</div>
                                                    <div class="heure-fin">${cour.heure_fin}</div>
                                                    <div class="icon" @click="${(cour) => section.deleteRow(cour)}"><pf-icons-trash-alt></pf-icons-trash-alt></div>
                                                </div>
                                            `
                                        }}`
                                    )
                                }
                             </div>
                        </slot>
                    </pf-panel>
                    <pf-button @click="${() => section.send()}">Réservez</pf-button>
                </form>
            ` : ''}
        </section>
        `
    }}`,
    styles : [
        css`
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
        `
    ]
})


export class Section extends WebComponent {
    utilisateur: Array<{ nom: string; email: string; cours: Array<any> }> = [];
    @state() currentSelection: Array<{ date_cours : string, heure_debut: string, heure_fin : string, type_cours: string}> = [];

    @attr visible: "true" | "false" | null = null;
    @state() isVisible: boolean = false;
    
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        if (name === "visible") {
            this.isVisible = newValue === "true";
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    displayForm() {
        this.isVisible = !this.isVisible;
        this.visible = this.isVisible ? "true" : "false";
    }
    
    

    async send() {
        const inputs = this.shadowRoot?.querySelectorAll('input');
        const nameValue = inputs?.[0].value || '';
        const emailValue = inputs?.[1].value || '';
    
        if (!nameValue || !emailValue) {
            alert("Vous devez remplir les champs");
            return;
        } 
        if (this.currentSelection.length === 0) {
            alert("Veuillez sélectionner au moins un cours d'essai.");
            return;
        }
    
        this.utilisateur.push({ nom: nameValue, email: emailValue, cours: this.currentSelection });
    
        console.log("Utilisateur et cours sélectionnés :", this.utilisateur);
    
        const isEligible = await this.verification(nameValue, emailValue);
        console.log(isEligible)
    
        if (isEligible === true) {
            try {
                const response = await fetch(`${url}reservations/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.utilisateur),
                });
    
                if (response.ok) {
                    const result = await response.json();
                    console.log("Utilisateur enregistré avec succès !", result);
    
                    if (result.role) { 
                        const userInfos = this.utilisateur.map(user => ({
                            nom: user.nom,
                            email: user.email,
                            cours: user.cours 
                        }));
                    
                       
                        const dataToStore = {
                            users: userInfos,
                            role: result.role
                        };
                    
    
                        localStorage.setItem('userStatus', JSON.stringify(dataToStore));
                    }
                    this.currentSelection = [];
                    this.utilisateur = [];
                } else {
                    console.error("Erreur lors de l'enregistrement :", response.statusText);
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                }
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
                alert("Impossible d'enregistrer la réservation.");
            }
        } else {
            alert("Vous avez déjà réservé un cours d'essai.");
        }
    }
    

    selectRow(cour: any) {
        if (this.currentSelection.length >= 1) {
            alert("Vous ne pouvez sélectionner qu'un seul cours d'essai");
            return;
        }
        this.currentSelection = [...this.currentSelection, cour]; 
        console.log('Cours sélectionné:', cour);
    }

    deleteRow(cour: any) {
        const courDate = cour.date_cours;
    
        this.currentSelection = this.currentSelection.filter(selectedCour => selectedCour.date_cours !== courDate);
    
        console.log('Liste de sélection mise à jour après suppression:', this.currentSelection);
    }

    async verification(nameValue: string, emailValue: string): Promise<boolean> {
        const usersInformations = { nom: nameValue, email: emailValue };

    
        try {
            const response = await fetch(`${url}reservations/verification/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usersInformations),
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log(result.canRegister)
                if (result.canRegister === true) {
                    return true; 
                } else {
                    alert("Vous avez déjà réservé un cours d'essai.");
                    return false; 
                }
            } else {
                console.error("Erreur lors de la vérification :", response.statusText);
                alert("Une erreur s'est produite lors de la vérification. Veuillez réessayer.");
                return false;
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
            alert("Impossible de vérifier la réservation.");
            return false; 
        }
    }
    
    

    async preloadData(): Promise<any[]> {
        try {
            const response = await fetch(`${url}cours/`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            
            if (!response.ok) {
                const errorText = await response.text(); // Récupère le texte d'erreur pour plus de détails
                throw new Error(`Erreur serveur: ${response.status} - ${errorText}`);
            }
    
            const data = await response.json();
            console.log('Données récupérées:', data);
    
            // Vérifie si 'cours' est présent et si sa longueur est > 0
            if (data && data.cours && Array.isArray(data.cours) && data.cours.length > 0) {
                return data.cours;
            } else {
                console.warn('Aucun cours trouvé.');
                return []; // Retourne un tableau vide si aucune donnée
            }
    
        } catch (error) {
            console.error('Erreur lors de la requête fetch:', error);
            return []; // Retourne un tableau vide en cas d'erreur
        }
    }
    

    formatDateFromISO(isoDateString: string): string {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    convertToISODate(dateString: string): string {
        const [year, month, day] = dateString.split('-');
        return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
    }
}







@customElement({
    name: "main-footer",
    template: html`${(footer: Footer) => {
        return html`
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
        </footer>`
    }}`,
    styles : [
        css`
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
        `
    ]
})
export class Footer extends WebComponent{

}



// function displaySelection(){
//     const storedSelection = localStorage.getItem('selectionArray');
//     const form = document.querySelectorAll('form')[0];
//     console.log(storedSelection);
// }


// function displayForm() {
//     const form = document.querySelectorAll('form')[0];
//     const storedSelection = localStorage.getItem('selectionArray');
//     form.classList.toggle('active');
//     console.log(storedSelection)
// }

// function displayClasses(){
//     const modal = document.querySelectorAll('pf-modal')[0];
//     modal.classList.toggle('active');
// }

// function confirm(){
    
// }


// let selectionArray = JSON.parse(localStorage.getItem('selectionArray') || '[]');

// function selectRow(cour) {
//     const selectionElement = document.querySelector('.selection') as HTMLElement;


//     if (selectionArray.length > 0) {
//         alert('Veuillez d\'abord supprimer la sélection actuelle avant d\'en ajouter une nouvelle.');
//         return;
//     }

//     const selectionTemplate = html`
//         <div class="type-de-cours">${cour.type_cours}</div>
//         <div class="date">${formatDateFromISO(cour.date_cours)}</div>
//         <div class="heure-debut">${cour.heure_debut}</div>
//         <div class="heure-fin">${cour.heure_fin}</div>
//         <div class="delete" @click=${() => deleteSelection(cour)}><pf-icons-trash-alt></pf-icons-trash-alt></div>
//     `;

//     if (selectionElement) {
    
//         selectionArray.push({
//             cour: cour.type_cours,
//             date: formatDateFromISO(cour.date_cours),
//             heure_debut: cour.heure_debut,
//             heure_fin: cour.heure_fin
//         });

//         localStorage.setItem('selectionArray', JSON.stringify(selectionArray));

//         console.log(selectionArray);
//         render(selectionTemplate, selectionElement);
//     } else {
//         console.error('Élément .selection introuvable');
//     }

//     displayExistingSelection();
// }

// function displayExistingSelection() {
//     const selectionElement = document.querySelector('.selection') as HTMLElement;

//     selectionArray.forEach(cour => {
//         const selectionTemplate = html`
//             <div class="type-de-cours">${cour.cour}</div>
//             <div class="date">${cour.date}</div>
//             <div class="heure-debut">${cour.heure_debut}</div>
//             <div class="heure-fin">${cour.heure_fin}</div>
//             <div class="delete" @click=${() => deleteSelection(cour)}><pf-icons-trash-alt></pf-icons-trash-alt></div>
//         `;

//         render(selectionTemplate, selectionElement);
//     });
// }

// function deleteSelection(cour) {
//     selectionArray = selectionArray.filter(
//         (item) => item.cour !== cour.type_cours || item.date !== formatDateFromISO(cour.date_cours)
//     );

//     localStorage.setItem('selectionArray', JSON.stringify(selectionArray));

//     console.log(selectionArray);

//     const selectionElement = document.querySelector('.selection');
//     if (selectionElement) {
//         selectionElement.innerHTML = '';
//     }
// }






render(html`<main-home></main-home>`, document.body);