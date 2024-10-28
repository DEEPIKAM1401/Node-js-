// const { format } = require('date-fns');
// const {v4:uuid} = require('uuid')

// console.log(format(new Date(), 'dd\tMM\tyyyy\tHH:mm:ss'));
// console.log(uuid())
// console.log(v4())

const logEvents = require('./logEvent')

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg)
});
myEmitter.emit('log', 'log event emitted');