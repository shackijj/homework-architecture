(function() {
  class Store {
    constructor(reducer, state) {
      this.callbacks = [];
      this.state = state;
      this.reducer = reducer;
    }
    dispatch(action) {
      this.state = this.reducer(this.state, action);
      this.notifySubscribers();
    }
  
    subscribe(callback) {
      this.callbacks.push(callback);
    }
  
    notifySubscribers() {
      this.callbacks.forEach((cb) => cb());
    }
    getState() {
      return this.state;
    }
  }
  
  class WebComponent extends HTMLElement {
    constructor(owner, templateId) {
      super();
      let template = owner.getElementById(templateId);
      let templateContent = template.content;
    
      this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }

  class ConnectedWebComponent extends WebComponent {
    constructor(store, owner, templateId) {
      super(owner, templateId);
      if (typeof this.onStoreChange !== 'function') {
        throw new Error('onStoreChange should be a function.');
      }
      store.subscribe(this.onStoreChange.bind(this));
    }
  }

  window.WCF = {
    ConnectedWebComponent,
    WebComponent,
    Store,
  };
})();
