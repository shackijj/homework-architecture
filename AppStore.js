class AppStore extends EventEmitter {
  constructor() {
    super();
    this._input = '';
  }
  get input() {
    return this._input;
  }
  set input(data) {
    this._input = data;
  }
}

const appStore = new AppStore();

AppDispatcher.register(function(action) {
  switch( action.type ) {
    case 'apply':
      appStore.input = action.data;
      appStore.emit('change');
      break;
  }
  return true;
});

window.AppStore = appStore;