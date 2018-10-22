// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.eventList = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if(!this.eventList[eventName])
      this.eventList[eventName] = new Array();

    this.eventList[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.eventList[eventName])
      for(let cb of this.eventList[eventName]){
        cb();
      }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.eventList[eventName];
  }
}

module.exports = Events;
