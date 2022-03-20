// Original file: proto/rock_paper_scissors.proto

import type { Choice as _rockpaperscissors_Choice } from '../rockpaperscissors/Choice';

export interface RockPaperScissorsTurnRequest {
  'gameId'?: (string);
  'playerId'?: (string);
  'choice'?: (_rockpaperscissors_Choice | keyof typeof _rockpaperscissors_Choice);
}

export interface RockPaperScissorsTurnRequest__Output {
  'gameId': (string);
  'playerId': (string);
  'choice': (keyof typeof _rockpaperscissors_Choice);
}
