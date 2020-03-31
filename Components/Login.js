const tmpl = document.createElement('template');
tmpl.innerHTML =`
  <style></style>
  <div class="login">
    <ion-card>      
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input class="email-input" type="email" clear-input value=""></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input class="password-input" type="password" clear-input value=""></ion-input>
        </ion-item>
        <br />
        <ion-button class="login-cta" expand="block">Login</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
`;

export class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return [''];
  }
  
  connectedCallback() {
    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));

    // Element references
    this.$emailInput = this._shadowRoot.querySelector('.email-input');
    this.$passwordInput = this._shadowRoot.querySelector('.password-input');
    this.$loginCTA = this._shadowRoot.querySelector('.login-cta');
    this.$loginCTA.addEventListener('click', this.onLogin.bind(this));
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() { }
  
  // Methods
  onLogin() { 
    console.log({ email: this.$emailInput.value, password: this.$passwordInput.value });
    
    this.dispatchEvent(new CustomEvent('onLogin', { detail: { email: this.$emailInput, password: this.$passwordInput } }));
  }
}

customElements.define('vj-login', LoginComponent);
