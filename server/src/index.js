import Event from 'events';
import { constants } from './constants.js';
import Controller from './controller.js';
import SocketServer from "./socket.js";


const port = process.env.PORT | 9898;

const socket = new SocketServer({port});
const eventEmitter = new Event(); 

const server = await socket.initialize(eventEmitter);

console.log('socket server is running at', server.address().port);

const controller = new Controller({socket}) 

eventEmitter.on(    
    constants.event.NEW_USER_CONNECTED,
    controller.onNewConnection.bind(controller)    
)