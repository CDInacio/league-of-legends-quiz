export interface Game {
  id: string;
  name: string;
  image: string;
}

export interface GameData {
  score: number;
  hits: number,
  currentRound: number;
  gameName: string
}
