const tmpl = document.createElement('template');
tmpl.innerHTML =`
  <style></style>
  <div class="login">
  LOGIN</div>
`;

export class LoginComponent extends HTMLElement {
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

customElements.define('vj-login', LoginComponent);
