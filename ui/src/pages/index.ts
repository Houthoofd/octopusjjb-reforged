import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../components';

@customElement({
   name: "main-application",
   template : html`${(main: Main) => {
      return html`
        <div id="application">
            <div class="header">
               <horizontal-navbar></horizontal-navbar>
            </div>
            <div class="right-content">
               <vertical-navbar></vertical-navbar>
            </div>
        </div>
      `
   }}`,
   styles: [
      css`
      #application{
         min-height: 100vh;
         background-color: var(--base-clr);
         color: var(--text-clr);
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      .header{
         
      }
      .right-content{
         display: grid;
         grid-template-columns: 250px 1fr;
      }
      `
   ]
})
export class Main extends WebComponent{

}

render(html`<main-application></main-application>`, document.body);