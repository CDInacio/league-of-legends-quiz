export default function Points({ points }: { points: number }) {
  let pointMessage = "";
  let emoji = "";

  if (points >= 0 && points < 10) {
    pointMessage = "Você está começando!";
    emoji = "🚀";
  } else if (points >= 10 && points < 20) {
    pointMessage = "Continue assim!";
    emoji = "😃";
  } else if (points >= 20 && points < 30) {
    pointMessage = "Você está progredindo!";
    emoji = "👏";
  } else if (points >= 30 && points < 40) {
    pointMessage = "Você está se saindo muito bem!";
    emoji = "🌟";
  } else if (points >= 40 && points < 50) {
    pointMessage = "Você está se destacando!";
    emoji = "💪";
  } else if (points >= 50 && points < 60) {
    pointMessage = "Você é incrível!";
    emoji = "🎉";
  } else if (points >= 60 && points < 70) {
    pointMessage = "Você é um mestre!";
    emoji = "👑";
  } else if (points >= 70 && points < 80) {
    pointMessage = "Você é lendário!";
    emoji = "🔥";
  } else if (points >= 80 && points < 90) {
    pointMessage = "Você é um gênio!";
    emoji = "🧠";
  } else if (points === 90) {
    pointMessage = "Você atingiu a perfeição!";
    emoji = "🏆";
  }

  return (
    <div className="flex flex-col">
      <p className="mb-[5px]">
        <span className="text-2xl font-bold mr-[3px]">{points}</span> pontos
      </p>
      <p>
        {pointMessage} {emoji}
      </p>
    </div>
  );
}
