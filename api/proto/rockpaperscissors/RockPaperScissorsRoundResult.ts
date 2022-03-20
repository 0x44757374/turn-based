// Original file: proto/rock_paper_scissors.proto

import type { Choice as _rockpaperscissors_Choice } from '../rockpaperscissors/Choice';

export interface RockPaperScissorsRoundResult {
  'round'?: (number);
  'winner'?: (boolean);
  'playerChoice'?: (_rockpaperscissors_Choice | keyof typeof _rockpaperscissors_Choice);
  'opponentChoice'?: (_rockpaperscissors_Choice | keyof typeof _rockpaperscissors_Choice);
}

export interface RockPaperScissorsRoundResult__Output {
  'round': (number);
  'winner': (boolean);
  'playerChoice': (keyof typeof _rockpaperscissors_Choice);
  'opponentChoice': (keyof typeof _rockpaperscissors_Choice);
}
