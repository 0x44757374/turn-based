// Original file: proto/rock_paper_scissors.proto

import type { GameStatus as _rockpaperscissors_GameStatus } from '../rockpaperscissors/GameStatus';
import type { RockPaperScissorsPlayer as _rockpaperscissors_RockPaperScissorsPlayer, RockPaperScissorsPlayer__Output as _rockpaperscissors_RockPaperScissorsPlayer__Output } from '../rockpaperscissors/RockPaperScissorsPlayer';

export interface RockPaperScissorsGame {
  'gameId'?: (string);
  'playerId'?: (string);
  'bestOf'?: (number);
  'status'?: (_rockpaperscissors_GameStatus | keyof typeof _rockpaperscissors_GameStatus);
  'player'?: (_rockpaperscissors_RockPaperScissorsPlayer | null);
  'opponent'?: (_rockpaperscissors_RockPaperScissorsPlayer | null);
}

export interface RockPaperScissorsGame__Output {
  'gameId': (string);
  'playerId': (string);
  'bestOf': (number);
  'status': (keyof typeof _rockpaperscissors_GameStatus);
  'player': (_rockpaperscissors_RockPaperScissorsPlayer__Output | null);
  'opponent': (_rockpaperscissors_RockPaperScissorsPlayer__Output | null);
}
