import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) throw new Error('no root provided for DomListener');

    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name}`
        );
      }
      this[method] = this[method].bind(this);
      // === AddEventListener
      this.$root.on(listener, this[method]);
    });
  }
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      // === RemoveEventListener
      this.$root.off(listener, this[method]);
    });
  }
}

const getMethodName = (eventName) => 'on' + capitalize(eventName);
