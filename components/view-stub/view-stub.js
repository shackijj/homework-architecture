class ViewStub extends HTMLElement {
  constructor() {
    super();
    let importDoc = document.currentScript.ownerDocument;
    let template = importDoc.getElementById('view-stub');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('view-stub', ViewStub);