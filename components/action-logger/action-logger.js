class ActionLogger extends HTMLElement {
  constructor() {
    super();
    let importDoc = document.currentScript.ownerDocument;
    let template = importDoc.getElementById('action-logger');
    let templateContent = template.content;

    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));

    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    const markup = window.Store.logEntries
      .map((entry) => (`<li>${entry}</li>`))
      .join('');
    this.log.innerHTML = markup;
  }
  connectedCallback() {
    window.Store.addListener('change', this.onStoreChange);
    this.log = this.shadowRoot.querySelector('.action-logger');
  }
}

customElements.define('action-logger', ActionLogger);