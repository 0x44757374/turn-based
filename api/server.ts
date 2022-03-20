// import {createClient} from 'redis';
import {config} from 'dotenv';
config();
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from './proto/rock_paper_scissors';
const PROTO_PATH = `${__dirname}/proto/rock_paper_scissors.proto`;
console.log(PROTO_PATH);
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const rockPaperScissors = ((grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType).rockpaperscissors;

const API_PORT = process.env.API_PORT;
const CACHE_PORT = process.env.CACHE_PORT;
const CACHE_HOST = process.env.CACHE_PORT;
console.log(`API_PORT: ${API_PORT}`)
if(API_PORT === undefined)throw new Error("API Port Undefined");
if(CACHE_PORT === undefined)throw new Error("Cache Port Undefined");
if(CACHE_HOST === undefined)throw new Error("Cache Host Undefined");

// const cache = createClient({
// 	socket:{
// 		host:process.env.CACHE_HOST ?? "localhost",
// 		port:Number.parseInt(CACHE_PORT);
// 	},
// 	password:process.env.CACHE_PASS
// });
// cache.connect().catch((e)=>{throw new Error(e)});

// const testCache = async ()=>{
// 	await cache.HSET('testKey', 'testField', 'testValue');
// 	let val = await cache.HGETALL('testKey');
// 	console.log("Testing Cache");
// 	console.table(val);
// }
// testCache();

const server = new grpc.Server();
server.bindAsync('0.0.0.0:7418', grpc.ServerCredentials.createInsecure(),()=>{
	server.start();
});
server.addService(rockPaperScissors.RockPaperScissorsGameService.service, {
	createGame: ()=>{
		console.log("Creating Game");

	},
	joinGame: ()=>{
		console.log("Joining Game");

	},
	leaveGame: ()=>{
		console.log("Leaving Game");
	},
	startGame: ()=>{
		console.log("Starting Game");

	},
	readyUp: ()=>{
		console.log("Player Ready");

	},
	endTurn: ()=>{
		console.log("End Turn");

	},
})
