import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RockPaperScissorsGameServiceClient as _rockpaperscissors_RockPaperScissorsGameServiceClient, RockPaperScissorsGameServiceDefinition as _rockpaperscissors_RockPaperScissorsGameServiceDefinition } from './rockpaperscissors/RockPaperScissorsGameService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rockpaperscissors: {
    Choice: EnumTypeDefinition
    GameStatus: EnumTypeDefinition
    RockPaperScissorsCreateGameRequest: MessageTypeDefinition
    RockPaperScissorsGame: MessageTypeDefinition
    RockPaperScissorsGameService: SubtypeConstructor<typeof grpc.Client, _rockpaperscissors_RockPaperScissorsGameServiceClient> & { service: _rockpaperscissors_RockPaperScissorsGameServiceDefinition }
    RockPaperScissorsGameState: MessageTypeDefinition
    RockPaperScissorsJoinGameRequest: MessageTypeDefinition
    RockPaperScissorsPlayer: MessageTypeDefinition
    RockPaperScissorsPlayerStatus: MessageTypeDefinition
    RockPaperScissorsRequest: MessageTypeDefinition
    RockPaperScissorsRoundResult: MessageTypeDefinition
    RockPaperScissorsScore: MessageTypeDefinition
    RockPaperScissorsTurnRequest: MessageTypeDefinition
  }
}

