(function(owner) {
  customElements.define('app-container', class extends HTMLElement {
      constructor() {
          super();
          let shadowRoot = this.attachShadow({ mode: 'open' });
          const content = owner.querySelector('#app-container').content;
          shadowRoot.appendChild(content.cloneNode(true));
      }
  });
})(document.currentScript.ownerDocument);
