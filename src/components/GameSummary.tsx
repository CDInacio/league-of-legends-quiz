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
        Você acertou {getNumOfCorrectAnswers()} de um total de{" "}
        {questions.length} questões!
      </p>
      <div className=" px-[20px]">
        {gameSummary.map((data: Summary, i: number) => (
          <div key={i} className="flex my-[20px] text-sm md:text-base">
            <span
              className={`h-[40px] w-[40px] ${
                data.chosenAnswer.isCorrect ? "bg-green-500" : "bg-red-500"
              } rounded-full flex font-bold items-center justify-center`}
            >
              {i + 1}
            </span>
            <div className="ml-[10px]">
              <h4 className="w-[250px] sm:w-[400px] lg:w-[500px] xl:w-[650px]">
                {data.question}
              </h4>
              <h6 className="opacity-50">{data.correctAnswer.answer}</h6>
              <h6>{data.chosenAnswer.answer}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
