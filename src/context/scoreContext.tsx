import { createContext, useState } from "react";
import { Answer } from "../@types/Question";

interface ScoreContextData {
  chosenAnswers: Answer[];
  handleChosenAnswers: (answer: Answer) => void;
}

export const ScoreContext = createContext<ScoreContextData>(
  {} as ScoreContextData
);

export default function ScoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chosenAnswers, setChosenAnswers] = useState<Answer[]>([]);

  const handleChosenAnswers = (answer: Answer) => {
    setChosenAnswers((prev) => [...prev, answer]);
  };

  return (
    <ScoreContext.Provider value={{ handleChosenAnswers, chosenAnswers }}>
      {children}
    </ScoreContext.Provider>
  );
}
