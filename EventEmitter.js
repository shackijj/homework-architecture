class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  addListener(type, callback) {
    if (this.callbacks[type]) {
      this.callbacks[type].push(callback);
    } else {
      this.callbacks[type] = [callback];
    }
  }

  emit(type) {
    const callbacks = this.callbacks[type];
    if (callbacks) {
      callbacks.forEach((cb) => cb());
    }
  }
}
