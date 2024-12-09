import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
  name: "page-profil",
  template : html`${(profil: Profil) => {
     return html`
       <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
               <div class="profil">
                <h1>Profil</h1>
               </div>
            </div>
        </div>
     `
  }}`,
  styles: [
     css`
     #application{
         min-height: 100vh;
         background-color: var(--base-clr);
         color: var(--text-clr);
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      .header{

      }
      .right-content{
         display: grid;
         grid-template-columns: 250px 1fr;
      }
     `
  ]
})
export class Profil extends WebComponent{

}

render(html`<page-profil></page-profil>`, document.body);