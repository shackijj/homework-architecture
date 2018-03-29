class AppStore extends EventEmitter {
  constructor() {
    super();
    this._input = '';
    this._isLoading = false;
    this._response = '';
  }
  get input() {
    return this._input;
  }
  set input(data) {
    this._input = data;
  }
  set isLoading(value) {
    this._isLoading = Boolean(value);
  }
  get isLoading() {
    return this._isLoading;
  }
  set response(response) {
    this._response = response;
  }
  get response() {
    return this._response;
  }
}

const appStore = new AppStore();

AppDispatcher.register(function(action) {
  switch( action.type ) {
    case 'apply':
      appStore.input = action.data;
      appStore.isLoading = true;
      appStore.emit('change');
      break;
    case 'response':
      appStore.isLoading = false;
      appStore.response = action.data;
      appStore.emit('change');
  }
});

window.Store = appStore;