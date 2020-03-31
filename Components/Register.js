const tmpl = document.createElement('template');

tmpl.innerHTML =`
  <style></style>
  <div class="register">
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
        <ion-item>
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input class="confirm-password-input" type="password" clear-input value=""></ion-input>
        </ion-item>
        <br />
        <ion-button class="register-cta" expand="block" >Register</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
`;

export class RegisterComponent extends HTMLElement {
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
    this.$confirmPasswordInput = this._shadowRoot.querySelector('.confirm-password-input');
    this.$registerCTA = this._shadowRoot.querySelector('.register-cta');
    this.$registerCTA.addEventListener('click', this.onRegister.bind(this));
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() { }
  
  // Methods
  onRegister() { 
    console.log({
      email: this.$emailInput.value,
      password: this.$passwordInput.value,
      confirmPassword: this.$confirmPasswordInput.value
    });
    
    this.dispatchEvent(new CustomEvent('onRegister', {
      detail: {
        email: this.$emailInput, password: this.$passwordInput,
        confirmPassword: this.$confirmPasswordInput.value  }
    }));
  }
}

customElements.define('vj-register', RegisterComponent);
