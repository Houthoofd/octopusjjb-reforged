import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../components';

@customElement({
   name: "page-accueil",
   template : html`${(accueil: Accueil) => {
      return html`
        <main-application>
            <div slot>
               <div class="accueil">
                  <h1>Accueil</h1>
               </div>
            </div>
        </main-application>
      `
   }}`,
   styles: [
      css`
      
      `
   ]
})
export class Accueil extends WebComponent{
   
}


render(html`<page-accueil></page-accueil>`, document.body);