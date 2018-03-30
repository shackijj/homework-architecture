(function(owner) {
  class ActionLogger extends WCF.ConnectedWebComponent {
    constructor() {
      super(window.APP_STORE, owner, 'action-logger');
      this.log = this.shadowRoot.querySelector('.action-logger');
    }
    onStoreChange() {
      const { logEntries } = window.APP_STORE.getState();
      const markup = logEntries
        .map((entry) => (`<li>${entry.date} - ${entry.message}</li>`))
        .join('');
      this.log.innerHTML = markup;
    }
  }

  customElements.define('action-logger', ActionLogger);
})(document.currentScript.ownerDocument);