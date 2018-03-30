(function() {
  class Store {
    constructor(reducer, state) {
      this.callbacks = [];
      this.state = state;
      this.reducer = reducer;
    }
    dispatch(action) {
      this.state = this.reducer(this.state);
      this.notifySubscribers();
    }
  
    subscribe(type, callback) {
      if (this.callbacks[type]) {
        this.callbacks[type].push(callback);
      } else {
        this.callbacks[type] = [callback];
      }
    }
  
    notifySubscribers(type) {
      const callbacks = this.callbacks[type];
      if (callbacks) {
        callbacks.forEach((cb) => cb());
      }
    }
    getState() {
      return this.state;
    }
  }
  

  class ConnectedCompoment extends HTMLElement {
    constructor(store, owner, templateId) {
      super();
      let template = owner.getElementById(templateId);
      let templateContent = template.content;
    
      this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    
      if (typeof this.onStoreChange !== 'function') {
        throw new Error('onStoreChange should be a function.');
      }
      this.onStoreChange = this.onStoreChange.bind(this, window.Store);
      store.subscribe(this.onStoreChange);
    }
  }

  window.WCF = {
    createStore,
    Store,
  };
})();
