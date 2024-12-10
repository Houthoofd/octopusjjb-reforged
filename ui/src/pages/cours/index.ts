import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-cours",
   template : html`${(cours: Cours) => {
      return html`
        <main-application>
            <div slot>
               <div class="cours">
                  <h1>Cours</h1>
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
export class Cours extends WebComponent{
   
}

render(html`<page-cours></page-cours>`, document.body);