// Original file: proto/lobby.proto

import type { User as _User, User__Output as _User__Output } from './User';

export interface Lobby {
  'key'?: (string);
  'name'?: (string);
  'owner'?: (_User | null);
  'members'?: (_User)[];
}

export interface Lobby__Output {
  'key': (string);
  'name': (string);
  'owner': (_User__Output | null);
  'members': (_User__Output)[];
}
: Subtype;
};

export interface ProtoGrpcType {
  CreateLobbyRequest: MessageTypeDefinition
  CreateUserRequest: MessageTypeDefinition
  JoinLobbyRequest: MessageTypeDefinition
  Lobby: MessageTypeDefinition
  LobbyService: SubtypeConstructor<typeof grpc.Client, _LobbyServiceClient> & { service: _LobbyServiceDefinition }
  User: MessageTypeDefinition
}

