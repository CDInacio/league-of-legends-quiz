import Choosegame from "../components/ChooseGame";
import Container from "../components/Container";
import { games } from "../data/games";

export default function HomePage() {
  return (
    <Container>
      <h3 className="mb-[50px] font-bold text-xl sm:text-2xl lg:text-3xl">
        Escolha o jogo
      </h3>
      <Choosegame games={games} />
    </Container>
  );
}
