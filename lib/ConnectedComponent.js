class ConnectedCompoment extends HTMLElement {
  constructor(templateId) {
    super();
    let importDoc = document.currentScript.ownerDocument;
    let template = importDoc.getElementById(templateId);
    let templateContent = template.content;
  
    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  
    if (typeof this.onStoreChange !== 'function') {
      throw new Error('onStoreChange should be a function.');
    }
    this.onStoreChange = this.onStoreChange.bind(this);
    window.Store.addListener('change', this.onStoreChange);
  }
}