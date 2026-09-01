const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

myEmitter.emit('greet', 'Ayush');
myEmitter.emit('farewell', 'Ayush');
