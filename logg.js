const EventEmitor = require("events");
const emittor = new EventEmitor();

class Log extends EventEmitor {
  log(msg) {
    console.log(msg);

    this.emit("logged", { id: 3, url: "http:// dfdf" });
  }
}

module.exports = Log;
