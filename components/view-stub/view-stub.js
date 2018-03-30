(function(owner) {
  class ViewStub extends WCF.ConnectedCompoment {
    constructor() {
      super(owner, 'view-stub');
      this.apply = this.shadowRoot.querySelector('.view-stub__apply');
      this.input = this.shadowRoot.querySelector('.view-stub__input');
      this.label = this.shadowRoot.querySelector('.view-stub__label');
      this.onApply = this.onApply.bind(this);
      this.apply.addEventListener('click', this.onApply);
    }
    onApply() {
      window.Actions.apply(this.input.value);
    }
    onStoreChange(store) {
      if (store.response) {
        this.label.innerHTML = `Сервер принял данные ${store.response}`;
      }
      if (store.isLoading) {
        this.apply.classList.add('view-stub__apply_loading')
        this.apply.innerHTML = "Отправка данных";
      } else {
        this.apply.classList.remove('view-stub__apply_loading')
        this.apply.innerHTML = "Отправить на сервер";
      }
    }
  }

  customElements.define('view-stub', ViewStub);
})(document.currentScript.ownerDocument);