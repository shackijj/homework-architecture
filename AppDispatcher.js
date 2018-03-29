class Dispatcher {
  constructor() {
    this.callbacks = {};
  }

  register(type, callback) {
    if (this.callbacks[type]) {
      this.callbacks[type].push(callback);
    } else {
      this.callbacks = [callback];
    }
  }

  dispatch(action) {
    const actionCallbacks = this.callbacks[action.type];
    actionCallbacks.forEach((cb) => cb(action));
  }
}

export const AppDispatcher = new Dispatcher();