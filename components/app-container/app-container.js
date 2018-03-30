(function (owner) {
  class AppContainer extends window.WCF.WebComponent {
    constructor () {
      super(owner, 'app-container');
    }
  }
  customElements.define('app-container', AppContainer);
})(document.currentScript.ownerDocument);
