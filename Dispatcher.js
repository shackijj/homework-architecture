class Dispatcher {
  constructor() {
    this.callbacks = [];
  }
  register(callback) {
    this.callbacks.push(callback);
  }
  dispatch(action) {
    this.callbacks.forEach((cb) => cb(action));
  }
}

window.AppDispatcher = new Dispatcher();