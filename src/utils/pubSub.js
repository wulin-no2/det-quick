class PubSub {
    constructor() {
      this.subscribers = {};
    }
  
    // 订阅事件
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
    }
  
    // 取消订阅
    unsubscribe(event, callback) {
      if (this.subscribers[event]) {
        this.subscribers[event] = this.subscribers[event].filter((cb) => cb !== callback);
      }
    }
  
    // 发布事件
    publish(event, data) {
      if (this.subscribers[event]) {
        this.subscribers[event].forEach((callback) => callback(data));
      }
    }
  }
  
  export const pubSub = new PubSub();
  