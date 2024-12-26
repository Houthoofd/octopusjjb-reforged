import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
   name: "modal-popup",
   template : html`${(popup: Popup) => {
      return html`
        <div class="pop-up">
          <slot name="icon">
            <div class="panel">
              <!-- Utilisez une classe dynamique basée sur success, fail et info -->
              <div class=${[
                  "icon-close",
                  popup.success ? '-success' : '',
                  popup.fail ? '-fail' : '',
                  popup.info ? '-info' : ''
                ].join('')} @click="${(popup) => popup.closePopup(popup)}">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M256-200L200-256l224-224L200-704l56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                  </svg>
              </div>
            </div>
          </slot>

          ${popup.success ? html`<div class="content">
            <div class="icon">
              <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px" baseProfile="basic"><linearGradient id="ONeHyQPNLkwGmj04dE6Soa" x1="16" x2="16" y1="2.888" y2="29.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#36eb69"/><stop offset="1" stop-color="#1bbd49"/></linearGradient><circle cx="16" cy="16" r="13" fill="#15c182"/><linearGradient id="ONeHyQPNLkwGmj04dE6Sob" x1="16" x2="16" y1="3" y2="29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".02"/><stop offset="1" stop-opacity=".15"/></linearGradient><path fill="#15c182" d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"/><g opacity=".2"><linearGradient id="ONeHyQPNLkwGmj04dE6Soc" x1="16.502" x2="16.502" y1="11.26" y2="20.743" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".1"/><stop offset="1" stop-opacity=".7"/></linearGradient><path fill="#15c182" d="M21.929,11.26 c-0.35,0-0.679,0.136-0.927,0.384L15,17.646l-2.998-2.998c-0.248-0.248-0.577-0.384-0.927-0.384c-0.35,0-0.679,0.136-0.927,0.384 c-0.248,0.248-0.384,0.577-0.384,0.927c0,0.35,0.136,0.679,0.384,0.927l3.809,3.809c0.279,0.279,0.649,0.432,1.043,0.432 c0.394,0,0.764-0.153,1.043-0.432l6.813-6.813c0.248-0.248,0.384-0.577,0.384-0.927c0-0.35-0.136-0.679-0.384-0.927 C22.608,11.396,22.279,11.26,21.929,11.26L21.929,11.26z"/></g><path fill="#fff" d="M10.325,14.825L10.325,14.825c0.414-0.414,1.086-0.414,1.5,0L15,18l6.179-6.179	c0.414-0.414,1.086-0.414,1.5,0l0,0c0.414,0.414,0.414,1.086,0,1.5l-6.813,6.813c-0.478,0.478-1.254,0.478-1.732,0l-3.809-3.809	C9.911,15.911,9.911,15.239,10.325,14.825z"/></svg>
              </slot>
            </div>
            <div class="message">
              <slot name="message">
                <span class="main-text">Félicitation !</span>
                <span class="sub-text">vous pouvez désormais vous connecter</span>
              </slot>
            </div>
            <div class="navigation">
              <slot name="navigation">
                <button>Se connecter</button>
              </slot>
            </div>
          </div>` : ''}
          ${popup.info ? html`<div class="content">
            <div class="icon info">
              <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              </slot>
            </div>
            <div class="message info">
              <slot name="message">
                <span class="main-text">Info !</span>
                <span class="sub-text">Il y'a eu un soucis, mais rien de grave</span>
              </slot>
            </div>
            <div class="navigation info">
              <slot name="navigation">
                <button>Fermer</button>
              </slot>
            </div>
          </div>` : ''}
          ${popup.fail ? html`<div class="content">
            <div class="icon fail">
              <slot name="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </slot>
            </div>
            <div class="message fail">
              <slot name="message">
                <span class="main-text">Erreur !</span>
                <span class="sub-text">Quelque chose s'est mal passée</span>
              </slot>
            </div>
            <div class="navigation fail" @click="${(popup) => popup.closePopup(popup)}">
              <slot name="navigation">
                <button>Fermer</button>
              </slot>
            </div>
          </div>` : ''}
        </div>
      `
   }}`,
   styles: [
      css`
      .pop-up{
        position: absolute;
        width: auto;
        height: auto;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
        top: 30%;
        left: 30%;
        z-index: 3;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        background-color: #ffff;
      }
      .pop-up.invisible{
        display: none;
      }
      /* span.title {
        background-color: #15c18263;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      } */
      .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        margin-left: 15px;
        gap: 30px;
      }
      .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      span.sub-text {
        font-size: 13px;
        color: #b1b3be;
      }
      span.main-text {
        font-size: 25px;
      }
      .content .navigation{
        display: flex; 
        flex-direction: column;
        gap: 10px;
        margin-bottom: 15px;
      }
      .navigation button{
        border: none;
        background-color: #f7f5f6;
        width: 250px;
        padding: 15px 10px;
        border-radius: 10px;
        box-shadow: 0px 8px 5px -5px rgba(0, 0, 0, 0.2);
        font-family: Poppins, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: black;
        cursor: pointer;
      }
      .navigation button:first-child{
        background-color: #007b5e;
        color: #ffff;
      }
      .navigation.succes button:first-child{
        background-color: #007b5e;
        color: #ffff;
      }
      .navigation.info button:first-child {
        background-color: #ff9900;
        color: #ffff;
      }
      .navigation.fail button:first-child{
        background-color: #ef5c5c;
      }
      .pop-up .content .icon svg {
        fill: #15c182;
      }
      .icon {
        background-color: #15c1821a;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
        border-radius: 50%;
        box-shadow: 0px 8px 5px -5px rgb(231 249 242);
      }
      .icon.info {
        background-color: #ff990038;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
        border-radius: 50%;
        box-shadow: 0px 8px 5px -5px rgb(231 249 242);
      }
      .pop-up .content .icon.info svg {
        fill: #ff9900;
      }
      .icon.fail {
        background-color: #ef5c5c3b;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
        border-radius: 50%;
        box-shadow: 0px 8px 5px -5px rgb(231 249 242);
      }
      .pop-up .content .icon.fail svg {
        fill: #ef5c5c;
      }
      .panel {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 10px;
        margin-right: 10px;
      }
      .icon-close-success {
        display: flex;
        justify-content: end;
        align-items: center;
        cursor: pointer;
        background-color: #e7f9f2;
        padding: 10px 10px;
        border-radius: 50%;

        svg{
          fill: black;
          height: 15px;
          width: 15px;
        }
      }
      .icon-close-info {
        display: flex;
        justify-content: end;
        align-items: center;
        cursor: pointer;
        background-color: #ffe9c7;;
        padding: 10px 10px;
        border-radius: 50%;

        svg{
          fill: black;
          height: 15px;
          width: 15px;
        }
      }
      .icon-close-fail {
        display: flex;
        justify-content: end;
        align-items: center;
        cursor: pointer;
        background-color: #ef5c5c3b;
        padding: 10px 10px;
        border-radius: 50%;

        svg{
          fill: black;
          height: 15px;
          width: 15px;
        }
      }
    `
  ]
})
export class Popup extends WebComponent {

  @state() isSucces: boolean = false;
  @state() isInfo: boolean = false;
  @state() isFail: boolean = false;


  @attr({ mode: 'boolean' }) success: boolean = false;
  @attr({ mode: 'boolean' }) info: boolean = false;
  @attr({ mode: 'boolean' }) fail: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    const isTrue = newValue !== null && newValue !== 'false';

    switch (name) {
      case 'success':
        this.isSucces = isTrue;
        break;
      case 'info':
        this.isInfo = isTrue;
        break;
      case 'fail':
        this.isFail = isTrue;
        break;
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }

  closePopup(popup){
    const modal = this.shadowRoot?.querySelector('.pop-up');
    modal.classList.toggle('invisible');
  }
}




