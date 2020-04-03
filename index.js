import { LoginComponent } from './Components/Login.js';
import { RegisterComponent } from './Components/Register.js';

const tmpl = document.createElement('template');
tmpl.innerHTML = /*html*/ `
<style>
  .container {
    max-width: 25%;
  }
</style>

  <ion-tabs class="container">
    <ion-tab tab="Login">
      <vj-login id="loginComp"></vj-login>
    </ion-tab>
    <ion-tab tab="Register">
      <vj-register id="registerComp"></vj-register>
    </ion-tab>
    <ion-tab-bar slot="top">
      <ion-tab-button tab="Login">Login</ion-tab-button>
      <ion-tab-button tab="Register">Register</ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
`;

class AuthFormComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return [''];
  }
  
  connectedCallback() {
    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
    
    // element references
    this.$loginComp = this._shadowRoot.querySelector('#loginComp');
    this.$registerComp = this._shadowRoot.querySelector('#registerComp');

    this.$loginComp.addEventListener('onLogin', this.onLoginClicked.bind(this));
    this.$registerComp.addEventListener('onRegister', this.onRegisterClicked.bind(this));
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() { }
  
  // Event Handlers
  onLoginClicked(e) {
    try {
      this.dispatchEvent(new CustomEvent('onLogin', { detail: e.detail }));
    } catch (error) {
      throw error;
    }
  }

  onRegisterClicked(e) {
    try {
      this.dispatchEvent(new CustomEvent('onRegister', { detail: e.detail }));
    } catch (error) {
      throw error;
    }
  }
}

customElements.define('vj-auth-form', AuthFormComponent);
