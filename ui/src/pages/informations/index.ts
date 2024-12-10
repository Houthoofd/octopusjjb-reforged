import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-informations",
   template : html`${(informations: Informations) => {
      return html`
        <main-application>
            <div slot>
               <div class="informations">
                  <h1>Informations</h1>
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
export class Informations extends WebComponent{
   
}

render(html`<page-informations></page-informations>`, document.body);