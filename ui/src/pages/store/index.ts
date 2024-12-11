import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-magasin",
   template : html`${(magasin: Magasin) => {
      return html`
        <main-application>
            <div slot>
               <div class="magasin">
                  <h1>Magasin</h1>
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
export class Magasin extends WebComponent{
   
}

render(html`<page-magasin></page-magasin>`, document.body);