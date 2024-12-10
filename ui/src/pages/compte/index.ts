import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';
@customElement({
   name: "page-compte",
   template : html`${(compte: Compte) => {
      return html`
        <main-application>
            <div slot>
               <div class="compte">
                  <h1>Compte</h1>
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
export class Compte extends WebComponent{
   
}

render(html`<page-compte></page-compte>`, document.body);