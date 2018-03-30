(function (owner) {
  class ActionLogger extends window.WCF.ConnectedWebComponent {
    constructor () {
      super(owner, 'action-logger', window.APP_STORE);
      this.log = this.shadowRoot.querySelector('.action-logger');
    }
    onStoreChange () {
      const { logEntries } = window.APP_STORE.getState();
      const markup = logEntries
        .map((entry) => (`<li>${entry.date} - ${entry.message}</li>`))
        .join('');
      this.log.innerHTML = markup;
    }
  }

  customElements.define('action-logger', ActionLogger);
})(document.currentScript.ownerDocument);
