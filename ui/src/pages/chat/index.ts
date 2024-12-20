import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
   name: "page-chat",
   template : html`${(chat: Chat) => {
      return html`
        <main-application>
            <div slot>
               <div class="messages">
                  <h1>Messages</h1>
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
export class Chat extends WebComponent{
   
}

render(html`<page-chat></page-chat>`, document.body);