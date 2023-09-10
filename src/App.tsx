import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";

export default function App() {
  useEffect(() => {
    document.title = "League of Legends Quiz";

    return () => {
      document.title = "Original Page Title";
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`/game/:game`} element={<GamePage />} />
      {/* <Route path={`/game/:game/:theme`} element={<GamePage />} /> */}
    </Routes>
  );
}
