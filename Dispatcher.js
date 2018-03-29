class Dispatcher extends EventEmitter {
  register(callback) {
    this.addListener('dispatch', callback);
  }
  dispatch(action) {
    const callbacks = this.callbacks['dispatch'];
    if (callbacks) {
      callbacks.forEach((cb) => cb(action));
    }
  }
}

window.AppDispatcher = new Dispatcher();