import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-profil",
   template : html`${(profil: Profil) => {
      return html`
        <main-application>
            <div slot>
               <div class="profil">
                  <h1>Profil</h1>
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
export class Profil extends WebComponent{
   
}

render(html`<page-profil></page-profil>`, document.body);