import { LoginComponent } from './Components/Login.js';
import { RegisterComponent } from './Components/Register.js';

const tmpl = document.createElement('template');
tmpl.innerHTML = `<div>
<vj-login></vj-login>
<vj-register></vj-register>
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
