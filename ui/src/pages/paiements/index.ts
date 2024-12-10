import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-paiements",
   template : html`${(paiements: Paiements) => {
      return html`
        <main-application>
            <div slot>
               <div class="paiements">
                  <h1>Paiements</h1>
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
export class Paiements extends WebComponent{
   
}

render(html`<page-paiements></page-paiements>`, document.body);