// Original file: proto/rock_paper_scissors.proto

import type { RockPaperScissorsRoundResult as _rockpaperscissors_RockPaperScissorsRoundResult, RockPaperScissorsRoundResult__Output as _rockpaperscissors_RockPaperScissorsRoundResult__Output } from '../rockpaperscissors/RockPaperScissorsRoundResult';

export interface RockPaperScissorsScore {
  'player'?: (number);
  'opponent'?: (number);
  'rounds'?: (_rockpaperscissors_RockPaperScissorsRoundResult)[];
}

export interface RockPaperScissorsScore__Output {
  'player': (number);
  'opponent': (number);
  'rounds': (_rockpaperscissors_RockPaperScissorsRoundResult__Output)[];
}
