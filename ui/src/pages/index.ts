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
            <div class="left-menu">
               <vertical-navbar></vertical-navbar>
            </div>
            <div class="right-content">
               <horizontal-navbar></horizontal-navbar>
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
         grid-template-columns: auto 1fr;
      }
      #left-menu{
         width: 100%;
         height: 100%;
      }
      #right-menu{
         display: grid;
         grid-template-rows: 10vh 1fr;
      }
      `
   ]
})
export class Main extends WebComponent{

}

render(html`<main-application></main-application>`, document.body);