// Original file: proto/lobby.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateLobbyRequest as _CreateLobbyRequest, CreateLobbyRequest__Output as _CreateLobbyRequest__Output } from './CreateLobbyRequest';
import type { CreateUserRequest as _CreateUserRequest, CreateUserRequest__Output as _CreateUserRequest__Output } from './CreateUserRequest';
import type { JoinLobbyRequest as _JoinLobbyRequest, JoinLobbyRequest__Output as _JoinLobbyRequest__Output } from './JoinLobbyRequest';
import type { Lobby as _Lobby, Lobby__Output as _Lobby__Output } from './Lobby';
import type { User as _User, User__Output as _User__Output } from './User';

export interface LobbyServiceClient extends grpc.Client {
  CreateLobby(argument: _CreateLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  CreateLobby(argument: _CreateLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  CreateLobby(argument: _CreateLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  CreateLobby(argument: _CreateLobbyRequest, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  createLobby(argument: _CreateLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  createLobby(argument: _CreateLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  createLobby(argument: _CreateLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  createLobby(argument: _CreateLobbyRequest, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
  JoinLobby(argument: _JoinLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  JoinLobby(argument: _JoinLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  JoinLobby(argument: _JoinLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  JoinLobby(argument: _JoinLobbyRequest, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  joinLobby(argument: _JoinLobbyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  joinLobby(argument: _JoinLobbyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  joinLobby(argument: _JoinLobbyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  joinLobby(argument: _JoinLobbyRequest, callback: grpc.requestCallback<_Lobby__Output>): grpc.ClientUnaryCall;
  
}

export interface LobbyServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateLobby: grpc.handleUnaryCall<_CreateLobbyRequest__Output, _Lobby>;
  
  CreateUser: grpc.handleUnaryCall<_CreateUserRequest__Output, _User>;
  
  JoinLobby: grpc.handleUnaryCall<_JoinLobbyRequest__Output, _Lobby>;
  
}

export interface LobbyServiceDefinition extends grpc.ServiceDefinition {
  CreateLobby: MethodDefinition<_CreateLobbyRequest, _Lobby, _CreateLobbyRequest__Output, _Lobby__Output>
  CreateUser: MethodDefinition<_CreateUserRequest, _User, _CreateUserRequest__Output, _User__Output>
  JoinLobby: MethodDefinition<_JoinLobbyRequest, _Lobby, _JoinLobbyRequest__Output, _Lobby__Output>
}
