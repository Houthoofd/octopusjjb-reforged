import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components/pages';

@customElement({
   name: "page-inscription",
   template : html`${(inscription: Inscription) => {
      return html`
        <page-inscription></page-inscription>
      `
   }}`,
   styles: [
      css`
      
      `
   ]
})
export class Inscription extends WebComponent{
   
}

render(html`<page-inscription></page-inscription>`, document.body);