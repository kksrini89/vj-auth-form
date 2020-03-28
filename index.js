import { LoginComponent } from './Components/Login.js';
import { RegisterComponent } from './Components/Register.js';

const tmpl = document.createElement('template');
tmpl.innerHTML = /*html*/`
<div class="container">
  <ion-tabs>
    <ion-tab tab="Login">
      <vj-login></vj-login>
    </ion-tab>
    <ion-tab tab="Register">
      <vj-register></vj-register>
    </ion-tab>
    <ion-tab-bar slot="top">
      <ion-tab-button tab="Login"></ion-tab-button>
      <ion-tab-button tab="Register"></ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</div>
`;

class AuthFormComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [''];
  }

  connectedCallback() {}

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}
}

customElements.define('vj-auth-form', AuthFormComponent);
