(function(owner) {
  class ActionLogger extends WCF.ConnectedCompoment {
    constructor() {
      super(owner, 'action-logger');
      this.log = this.shadowRoot.querySelector('.action-logger');
    }
    onStoreChange({logEntries}) {
      const markup = store.logEntries
        .map((entry) => (`<li>${entry}</li>`))
        .join('');
      this.log.innerHTML = markup;
    }
  }

  customElements.define('action-logger', ActionLogger);
})(document.currentScript.ownerDocument);