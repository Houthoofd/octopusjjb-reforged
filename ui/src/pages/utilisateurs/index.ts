import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-utilisateurs",
   template : html`${(utilisateurs: Utilisateurs) => {
      return html`
        <main-application>
            <div slot>
               <div class="utilisateurs">
                  <h1>Utilisateurs</h1>
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
export class Utilisateurs extends WebComponent{
   
}

render(html`<page-utilisateurs></page-utilisateurs>`, document.body);