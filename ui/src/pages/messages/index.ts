import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-mails",
   template : html`${(mails: Mails) => {
      return html`
        <main-application>
            <div slot>
               <div class="mails">
                  <h1>Mails</h1>
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
export class Mails extends WebComponent{
   
}

render(html`<page-mails></page-mails>`, document.body);