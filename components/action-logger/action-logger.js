class ActionLogger extends ConnectedCompoment {
  constructor() {
    super('action-logger');
  }
  onStoreChange() {
    const markup = window.Store.logEntries
      .map((entry) => (`<li>${entry}</li>`))
      .join('');
    this.log.innerHTML = markup;
  }
  connectedCallback() {
    this.log = this.shadowRoot.querySelector('.action-logger');
  }
}

customElements.define('action-logger', ActionLogger);