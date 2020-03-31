const tmpl = document.createElement('template');

tmpl.innerHTML =`
  <style></style>
  <div class="register">
    <ion-card>      
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" clear-input value=""></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" clear-input value=""></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input type="password" clear-input value=""></ion-input>
        </ion-item>
        <br />
        <ion-button expand="block" >Register</ion-button>
      </ion-card-content>
    </ion-card>
  </div>
`;

export class RegisterComponent extends HTMLElement {
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

customElements.define('vj-register', RegisterComponent);
