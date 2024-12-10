import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-evenements",
   template : html`${(evenements: Evenements) => {
      return html`
        <main-application>
            <div slot>
               <div class="evenements">
                  <h1>Evènements</h1>
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
export class Evenements extends WebComponent{
   
}

render(html`<page-evenements></page-evenements>`, document.body);