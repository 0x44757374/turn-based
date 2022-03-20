// Original file: proto/rock_paper_scissors.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { RockPaperScissorsCreateGameRequest as _rockpaperscissors_RockPaperScissorsCreateGameRequest, RockPaperScissorsCreateGameRequest__Output as _rockpaperscissors_RockPaperScissorsCreateGameRequest__Output } from '../rockpaperscissors/RockPaperScissorsCreateGameRequest';
import type { RockPaperScissorsGame as _rockpaperscissors_RockPaperScissorsGame, RockPaperScissorsGame__Output as _rockpaperscissors_RockPaperScissorsGame__Output } from '../rockpaperscissors/RockPaperScissorsGame';
import type { RockPaperScissorsJoinGameRequest as _rockpaperscissors_RockPaperScissorsJoinGameRequest, RockPaperScissorsJoinGameRequest__Output as _rockpaperscissors_RockPaperScissorsJoinGameRequest__Output } from '../rockpaperscissors/RockPaperScissorsJoinGameRequest';
import type { RockPaperScissorsPlayerStatus as _rockpaperscissors_RockPaperScissorsPlayerStatus, RockPaperScissorsPlayerStatus__Output as _rockpaperscissors_RockPaperScissorsPlayerStatus__Output } from '../rockpaperscissors/RockPaperScissorsPlayerStatus';
import type { RockPaperScissorsRequest as _rockpaperscissors_RockPaperScissorsRequest, RockPaperScissorsRequest__Output as _rockpaperscissors_RockPaperScissorsRequest__Output } from '../rockpaperscissors/RockPaperScissorsRequest';
import type { RockPaperScissorsTurnRequest as _rockpaperscissors_RockPaperScissorsTurnRequest, RockPaperScissorsTurnRequest__Output as _rockpaperscissors_RockPaperScissorsTurnRequest__Output } from '../rockpaperscissors/RockPaperScissorsTurnRequest';

export interface RockPaperScissorsGameServiceClient extends grpc.Client {
  CreateGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  createGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  createGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  createGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  createGame(argument: _rockpaperscissors_RockPaperScissorsCreateGameRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  
  EndTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  EndTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  EndTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  EndTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  endTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  endTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  endTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  endTurn(argument: _rockpaperscissors_RockPaperScissorsTurnRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  
  JoinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _rockpaperscissors_RockPaperScissorsJoinGameRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  
  LeaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  LeaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  LeaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  LeaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  leaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  leaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  leaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  leaveGame(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  
  ReadyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  ReadyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  ReadyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  ReadyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  readyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  readyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  readyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  readyUp(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsPlayerStatus__Output>): grpc.ClientUnaryCall;
  
  StartGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  startGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  startGame(argument: _rockpaperscissors_RockPaperScissorsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  startGame(argument: _rockpaperscissors_RockPaperScissorsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  startGame(argument: _rockpaperscissors_RockPaperScissorsRequest, callback: grpc.requestCallback<_rockpaperscissors_RockPaperScissorsGame__Output>): grpc.ClientUnaryCall;
  
}

export interface RockPaperScissorsGameServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateGame: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsCreateGameRequest__Output, _rockpaperscissors_RockPaperScissorsGame>;
  
  EndTurn: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsTurnRequest__Output, _rockpaperscissors_RockPaperScissorsPlayerStatus>;
  
  JoinGame: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsJoinGameRequest__Output, _rockpaperscissors_RockPaperScissorsGame>;
  
  LeaveGame: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsGame>;
  
  ReadyUp: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsPlayerStatus>;
  
  StartGame: grpc.handleUnaryCall<_rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsGame>;
  
}

export interface RockPaperScissorsGameServiceDefinition extends grpc.ServiceDefinition {
  CreateGame: MethodDefinition<_rockpaperscissors_RockPaperScissorsCreateGameRequest, _rockpaperscissors_RockPaperScissorsGame, _rockpaperscissors_RockPaperScissorsCreateGameRequest__Output, _rockpaperscissors_RockPaperScissorsGame__Output>
  EndTurn: MethodDefinition<_rockpaperscissors_RockPaperScissorsTurnRequest, _rockpaperscissors_RockPaperScissorsPlayerStatus, _rockpaperscissors_RockPaperScissorsTurnRequest__Output, _rockpaperscissors_RockPaperScissorsPlayerStatus__Output>
  JoinGame: MethodDefinition<_rockpaperscissors_RockPaperScissorsJoinGameRequest, _rockpaperscissors_RockPaperScissorsGame, _rockpaperscissors_RockPaperScissorsJoinGameRequest__Output, _rockpaperscissors_RockPaperScissorsGame__Output>
  LeaveGame: MethodDefinition<_rockpaperscissors_RockPaperScissorsRequest, _rockpaperscissors_RockPaperScissorsGame, _rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsGame__Output>
  ReadyUp: MethodDefinition<_rockpaperscissors_RockPaperScissorsRequest, _rockpaperscissors_RockPaperScissorsPlayerStatus, _rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsPlayerStatus__Output>
  StartGame: MethodDefinition<_rockpaperscissors_RockPaperScissorsRequest, _rockpaperscissors_RockPaperScissorsGame, _rockpaperscissors_RockPaperScissorsRequest__Output, _rockpaperscissors_RockPaperScissorsGame__Output>
}
