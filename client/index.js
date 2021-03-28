import SocketClient  from './src/socket.js';
import Event from 'events';
import CliConfig from './src/cliConfig.js';
import TerminalController from "./src/terminalController.js";

const [nodePath, filePath, ...commands] = process.argv;

const config = CliConfig.parseArgs(commands);

const componentEmitter = new Event(); 

const socketCLient = new SocketClient(config);

await socketCLient.initialize()

const controller = new TerminalController();
await controller.initializeTable(componentEmitter);
