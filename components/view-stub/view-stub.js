class ViewStub extends HTMLElement {
  constructor() {
    super();
    let importDoc = document.currentScript.ownerDocument;
    let template = importDoc.getElementById('view-stub');
    let templateContent = template.content;

    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));

    this.onStoreChange = this.onStoreChange.bind(this);
    
    this.onApply = this.onApply.bind(this);
    window.Store.addListener('change', this.onStoreChange);
  }
  onApply() {
    window.Actions.apply(this.input.value);
  }
  onStoreChange() {
    if (window.Store.response) {
      this.label.innerHTML = `Сервер принял данные ${window.Store.response}`;
    }
    if (window.Store.isLoading) {
      this.apply.classList.add('view-stub__apply_loading')
      this.apply.innerHTML = "Отправка данных";
    } else {
      this.apply.classList.remove('view-stub__apply_loading')
      this.apply.innerHTML = "Отправить на сервер";
    }
  }
  connectedCallback() {
    this.apply = this.shadowRoot.querySelector('.view-stub__apply');
    this.input = this.shadowRoot.querySelector('.view-stub__input');
    this.label = this.shadowRoot.querySelector('.view-stub__label');

    this.apply.addEventListener('click', this.onApply);
  }
}

customElements.define('view-stub', ViewStub);