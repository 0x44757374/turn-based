import WebSocket from 'ws';
import {config} from 'dotenv';
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from '../proto/rock_paper_scissors';

config();

const API_PORT = process.env.API_PORT;
const PROTO_PATH = path.resolve(__dirname, '../proto/rock_paper_scissors.proto');
if(API_PORT === undefined)throw new Error("API PORT Undefined");
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const rockPaperScissors = ((grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType).rockpaperscissors;
const client = new rockPaperScissors.RockPaperScissorsGameService(`localhost:${API_PORT}`, grpc.credentials.createInsecure());





client.createGame({bestOf:3},()=>{});