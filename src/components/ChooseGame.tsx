import { useNavigate } from "react-router-dom";
import { Game } from "../@types/Game";

interface ChoosegameProps {
  games: Game[];
}

export default function Choosegame({ games }: ChoosegameProps) {
  const navigate = useNavigate();

  const handleChooseGame = (game: string) => {
    navigate(`/game/${game}`);
  };

  return (
    <div className="flex flex-col md:flex-row mb-[50px] md:mb-0">
      {games.map((game: Game) => (
        <div
          key={game.id}
          className="relative mx-[10px] cursor-pointer mb-[30px]"
        >
          <div onClick={() => handleChooseGame(game.name)} className="group">
            <img
              className="h-[350px] w-[200px] sm:h-[405px] sm:w-[300px] object-cover rounded transition duration-300 ease-in-out transform group-hover:brightness-50"
              src={game.image}
              alt={`${game.name} image`}
            />
            <p className="absolute hidden md:flex inset-0  items-center justify-center font-bold sm:text-lg opacity-0 group-hover:opacity-100 transition-all z-10">
              {game.name}
            </p>
          </div>
          <p className="text-center mt-[10px] md:hidden">{game.name}</p>
        </div>
      ))}
    </div>
  );
}
