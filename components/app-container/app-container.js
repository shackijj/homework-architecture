(function(owner) {
  class AppContainer extends WCF.WebComponent {
    constructor() {
      super(owner, 'app-container');
    }
  }
  customElements.define('app-container', AppContainer);
})(document.currentScript.ownerDocument);
