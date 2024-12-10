import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-notifications",
   template : html`${(notifications: Notifications) => {
      return html`
        <main-application>
            <div slot>
               <div class="notifications">
                  <h1>Notifications</h1>
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
export class Notifications extends WebComponent{
   
}

render(html`<page-notifications></page-notifications>`, document.body);