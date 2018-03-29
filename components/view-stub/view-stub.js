class ViewStub extends HTMLElement {
  constructor() {
    super();
    let importDoc = document.currentScript.ownerDocument;
    let template = importDoc.getElementById('view-stub');
    let templateContent = template.content;

    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));

    this.onApply = this.onApply.bind(this);
    this.updateLabel = this.updateLabel.bind(this);
  }
  onApply() {
    window.AppDispatcher.dispatch({
      type: 'apply',
      data: this.input.value
    });
  }
  updateLabel() {
    this.label.innerHTML = window.AppStore.input;
  }
  connectedCallback() {
    this.apply = this.shadowRoot.querySelector('.view-stub__apply');
    this.input = this.shadowRoot.querySelector('.view-stub__input');
    this.label = this.shadowRoot.querySelector('.view-stub__label');

    this.apply.addEventListener('click', this.onApply);
    window.AppStore.addListener('change', this.updateLabel);
  }
}

customElements.define('view-stub', ViewStub);