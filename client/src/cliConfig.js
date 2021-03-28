export default class CliConfig{

    constructor({username, hostUri, room}){
        this.username = username;
        this.room = room;
        
        const {hostname, port, protocol} = new URL(hostUri);

        this.hostname = hostname;
        this.port = port;
        this.protocol = protocol.replace(/\W/,'')
    }
    static parseArgs(commands){
        const cmd = new Map();
        for (const key in commands){
            
            const command = commands[key];
            const index = parseInt(key);
            const  prefix = '--';
            
            if (!command.includes(prefix))  continue;

            cmd.set(command.replace(prefix, ''),
            commands[index+1]);   
        }

        return new CliConfig(Object.fromEntries(cmd));
    }
}