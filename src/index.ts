
import Server from './server';
import dotenv from 'dotenv'
dotenv.config()
// console.log('Variables de entrono')
// console.log(process.env)
const server = new Server();

server.listen();

