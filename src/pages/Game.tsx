import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Answer, Summary } from "../@types/Question";
import Container from "../components/Container";
import GameSummary from "../components/GameSummary";
import { questions as q } from "../data/questions";
import UseScore from "../hooks/useScore";

export default function GamePage() {
  const navigate = useNavigate();
  const { game } = useParams();

  const [questionId, setQuestionId] = useState<number>(0);
  const [gameSummary, setGameSummary] = useState<any>([]);

  const { chosenAnswers, handleChosenAnswers, reset } = UseScore();

  let questions = q.filter((question) => question.game === game);

  const handleChosenAnswer = (answer: Answer) => {
    setQuestionId((prev) => prev + 1);
    handleChosenAnswers(answer);
  };

  useEffect(() => {
    let summary: Summary[] = [];

    if (chosenAnswers.length === questions.length) {
      for (var i = 0; i < questions.length; i++) {
        let correnctAnswer;
        correnctAnswer = questions[i].answers.filter(
          (answer) => answer.isCorrect
        );

        summary.push({
          question: questions[i].question,
          questionId: questions[i].id,
          correctAnswer: correnctAnswer[0],
          chosenAnswer: chosenAnswers[i],
        });
      }
    }
    setGameSummary(summary);
  }, [chosenAnswers]);

  const getNumOfCorrectAnswers = () => {
    let num = 0;
    chosenAnswers.filter((aswer) => aswer.isCorrect && num++);
    return num;
  };

  const handleGoBack = () => {
    reset();
    navigate("/");
  };

  return (
    <Container>
      <span
        onClick={handleGoBack}
        className="absolute left-[30px] top-[10px] md:top-[50px] sm:left-[60px] md:left-[100px] xl:left-[400px]  cursor-pointer"
      >
        <IoArrowBack size={30} />
      </span>
      {chosenAnswers.length !== questions.length ? (
        <>
          <div className="w-[300px] sm:w-[350px] lg:w-[500px] mb-[50px] bg-gray-200 rounded-lg  overflow-hidden">
            <div
              className="h-2 bg-blue-500 transition-all"
              style={{ width: `${questionId * 10}%` }}
            ></div>
          </div>
          <p className="text-lg  text-center font-bold mb-[20px] max-w-[600px]">
            {questions[questionId]?.question}
          </p>
          <div className="flex flex-col ">
            {questions[questionId]?.answers.map((answer, i) => (
              <p
                key={i}
                className={`w-[300px] sm:w-[400px] lg:w-[500px] text-sm md:text-base border-2 bg-sky-900 hover:bg-sky-950 transition-all cursor-pointer  hover:border-2 border-transparent  rounded my-[10px] p-[5px]  text-center`}
                onClick={() => handleChosenAnswer(answer)}
              >
                {answer.answer}
              </p>
            ))}
          </div>
        </>
      ) : (
        <GameSummary
          gameSummary={gameSummary}
          getNumOfCorrectAnswers={getNumOfCorrectAnswers}
          questions={questions}
        />
      )}

      <ToastContainer />
    </Container>
  );
}
{
  /* <>
<Points points={gameData.score} />
<div className="flex font-thin mt-[100px]">
  <p
    onClick={() => handleNavigate("new")}
    className="mx-[5px] cursor-pointer"
  >
    Novo jogo
  </p>
  <p
    onClick={() => handleNavigate()}
    className="mx-[5px] cursor-pointer"
  >
    Home
  </p>
</div>
</> */
}
