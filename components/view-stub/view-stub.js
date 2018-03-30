(function (owner) {
  class ViewStub extends window.WCF.ConnectedWebComponent {
    constructor () {
      super(owner, 'view-stub', window.APP_STORE);

      this.apply = this.shadowRoot.querySelector('.view-stub__apply');
      this.input = this.shadowRoot.querySelector('.view-stub__input');
      this.label = this.shadowRoot.querySelector('.view-stub__label');
      this.onApply = this.onApply.bind(this);
      this.apply.addEventListener('click', this.onApply);
    }
    onApply () {
      const {isLoading} = window.APP_STORE.getState();
      if (!isLoading) {
        window.APP_ACTIONS.log('Presener получил сообщение от View');
        window.APP_ACTIONS.apply(this.input.value);
      }
    }
    onStoreChange () {
      const {response, isLoading} = window.APP_STORE.getState();
      if (response) {
        this.label.innerHTML = `Сервер принял данные ${response}`;
      }
      if (isLoading) {
        this.apply.classList.add('view-stub__apply_loading');
        this.apply.innerHTML = 'Отправка данных';
      } else {
        this.apply.classList.remove('view-stub__apply_loading');
        this.apply.innerHTML = 'Отправить на сервер';
      }
    }
  }

  customElements.define('view-stub', ViewStub);
})(document.currentScript.ownerDocument);
