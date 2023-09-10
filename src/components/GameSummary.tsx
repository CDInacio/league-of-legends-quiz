import { Question, Summary } from "../@types/Question";

interface GameSummaryProps {
  questions: Question[];
  gameSummary: Summary[];
  getNumOfCorrectAnswers: () => number;
}

export default function GameSummary({
  questions,
  gameSummary,
  getNumOfCorrectAnswers,
}: GameSummaryProps) {
  return (
    <>
      <p>
        Vpcê acertou {getNumOfCorrectAnswers()} de um total de{" "}
        {questions.length} questões
      </p>
      {gameSummary.map((data: Summary, i: number) => (
        <div key={i} className="flex flex-col items-center">
          <p>{data.question}</p>
          <p>Resposta coreta{data.correctAnswer.answer}</p>
          <p>Resposta do jogador{data.chosenAnswer.answer}</p>
        </div>
      ))}
    </>
  );
}
