export interface Answer {
  id: string;
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  game: string;
  question: string;
  answers: Answer[];
}

export interface Summary {
  chosenAnswer: Answer;
  correctAnswer: Answer;
  question: string;
  questionId: string;
}
