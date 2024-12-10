import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-dashboard",
   template : html`${(dashboard: Dashboard) => {
      return html`
        <main-application>
            <div slot>
               <div class="dashboard">
                  <h1>Dashboard</h1>
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
export class Dashboard extends WebComponent{
   
}

render(html`<page-dashboard></page-dashboard>`, document.body);