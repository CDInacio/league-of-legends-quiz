import { Question } from "../@types/Question";

export const questions: Question[] = [
  {
    id: "q1",
    game: "Sobre o Jogo",
    question: "Quantas skins existem em League of Legends?",
    answers: [
      { id: "a1", answer: "1.153", isCorrect: true },
      { id: "a2", answer: "1.154", isCorrect: false },
      { id: "a3", answer: "1.150", isCorrect: false },
      { id: "a4", answer: "1.1500", isCorrect: false },
    ],
  },
  {
    id: "q2",
    game: "Sobre o Jogo",
    question: "Quantos itens míticos foram introduzidos nesta temporada?",
    answers: [
      { id: "a5", answer: "23", isCorrect: false },
      { id: "a6", answer: "25", isCorrect: true },
      { id: "a7", answer: "15", isCorrect: false },
      { id: "a8", answer: "26", isCorrect: false },
    ],
  },
  {
    id: "q3",
    game: "Sobre o Jogo",
    question:
      "Quantos campeões receberam um rework desde que o jogo foi criado?",
    answers: [
      { id: "a9", answer: "101", isCorrect: false },
      { id: "a10", answer: "90", isCorrect: false },
      { id: "a11", answer: "96", isCorrect: true },
      { id: "a12", answer: "88", isCorrect: false },
    ],
  },
  {
    id: "q4",
    game: "Sobre o Jogo",
    question: "Qual foi o primeiro campeão desenhado pela Riot Games?",
    answers: [
      { id: "a13", answer: "Jax", isCorrect: false },
      { id: "a14", answer: "Malphite", isCorrect: false },
      { id: "a15", answer: "Vayne", isCorrect: false },
      { id: "a16", answer: "Singed", isCorrect: true },
    ],
  },
  {
    id: "q5",
    game: "Sobre o Jogo",
    question:
      "Apenas um campeão na história de League of Legends passou de um ataque corpo a corpo para um ataque à distância, qual foi?",
    answers: [
      { id: "a21", answer: "Katarina", isCorrect: false },
      { id: "a22", answer: "Ivern", isCorrect: true },
      { id: "a23", answer: "Akali", isCorrect: false },
      { id: "a24", answer: "Gangplank", isCorrect: false },
    ],
  },
  {
    id: "q6",
    game: "Sobre o Jogo",
    question:
      "Quantas classes de campeão existem no jogo, contando as características próprias?",
    answers: [
      { id: "a25", answer: "15", isCorrect: false },
      { id: "a26", answer: "20", isCorrect: false },
      { id: "a27", answer: "19", isCorrect: false },
      { id: "a28", answer: "18", isCorrect: true },
    ],
  },
  {
    id: "q7",
    game: "Sobre o Jogo",
    question: "Quantos campeões não usam mana?",
    answers: [
      { id: "a29", answer: "25", isCorrect: true },
      { id: "a30", answer: "25", isCorrect: false },
      { id: "a31", answer: "9", isCorrect: false },
      { id: "a32", answer: "14", isCorrect: false },
    ],
  },
  {
    id: "q8",
    game: "Sobre o Jogo",
    question: "Qual campeão tem a maior hitbox no nível 1?",
    answers: [
      { id: "a33", answer: "Nautilus", isCorrect: false },
      { id: "a34", answer: "Kaitlyn", isCorrect: false },
      { id: "a35", answer: "Xerath", isCorrect: false },
      { id: "a36", answer: "Malphite", isCorrect: true },
    ],
  },
  {
    id: "q9",
    game: "Sobre o Jogo",
    question:
      "Junto com Mejai, dois outros itens que foram removidos giravam em torno de acúmulos, quais são?",
    answers: [
      { id: "a38", answer: "Leviatã e Espada do Oculto", isCorrect: true },
      { id: "a39", answer: "Orb Infinito", isCorrect: false },
      { id: "a40", answer: "Relíquia Vinculada", isCorrect: false },
      { id: "a41", answer: "Essência do Vazio", isCorrect: false },
    ],
  },
  {
    id: "q10",
    game: "Esports",
    question: "Qual o time com mais títulos do CBLOL?",
    answers: [
      { id: "a42", answer: "PAIN", isCorrect: false },
      { id: "a43", answer: "CNB", isCorrect: false },
      { id: "a44", answer: "INTZ", isCorrect: true },
      { id: "a45", answer: "Red Canids", isCorrect: false },
    ],
  },
  {
    id: "q11",
    game: "Esports",
    question: "Quem foi o primeiro do CBLOL a alcançar a marca de mil abates?",
    answers: [
      { id: "a46", answer: "Brtt", isCorrect: false },
      { id: "a47", answer: "Micao", isCorrect: true },
      { id: "a48", answer: "Titan", isCorrect: false },
      { id: "a49", answer: "Tinows", isCorrect: false },
    ],
  },
  {
    id: "q12",
    game: "Esports",
    question:
      "Quem soltou a frase 'você não sabe jogar de Katarina' para o adversário em partida oficial?",
    answers: [
      { id: "a50", answer: "Kami", isCorrect: false },
      { id: "a51", answer: "Yoda", isCorrect: true },
      { id: "a52", answer: "Brtt", isCorrect: false },
      { id: "a53", answer: "Esa", isCorrect: false },
    ],
  },
  {
    id: "q13",
    game: "Esports",
    question: "Quem foi o adversário que não sabia jogar de Katarina?",
    answers: [
      { id: "a54", answer: "Esa", isCorrect: false },
      { id: "a55", answer: "Brtt", isCorrect: false },
      { id: "a56", answer: "Yoda", isCorrect: false },
      { id: "a57", answer: "Kami", isCorrect: true },
    ],
  },
  {
    id: "q14",
    game: "Esports",
    question: "Qual foi a partida mais assistida do CBLOL?",
    answers: [
      { id: "a58", answer: "Pain vs INTZ", isCorrect: false },
      { id: "a59", answer: "Flamengo x Pain", isCorrect: true },
      { id: "a60", answer: "Pain vs LOUD", isCorrect: false },
      { id: "a61", answer: "CNB vs PAIN", isCorrect: false },
    ],
  },
  {
    id: "q15",
    game: "Esports",
    question: "Quanto dinheiro o League of Legends distribuiu em prêmios?",
    answers: [
      { id: "a62", answer: "55 milhões", isCorrect: false },
      { id: "a63", answer: "85 milhões", isCorrect: true },
      { id: "a64", answer: "70 milhões", isCorrect: false },
      { id: "a65", answer: "50 milhões", isCorrect: false },
    ],
  },
  {
    id: "q16",
    game: "Esports",
    question: "Quantos minutos durou a partida oficial mais longa da história?",
    answers: [
      { id: "a67", answer: "60 minutos", isCorrect: false },
      { id: "a68", answer: "74 minutos", isCorrect: false },
      { id: "a69", answer: "55 minutos", isCorrect: false },
      { id: "a70", answer: "94 minutos", isCorrect: true },
    ],
  },
  {
    id: "q17",
    game: "Esports",
    question: "Qual é a única equipe que conseguiu alcançar o Grand Slam?",
    answers: [
      { id: "a71", answer: "Nenhum", isCorrect: true },
      { id: "a72", answer: "INTZ", isCorrect: false },
      { id: "a73", answer: "PAIN", isCorrect: false },
      { id: "a74", answer: "LOUD", isCorrect: false },
    ],
  },
  {
    id: "q18",
    game: "Esports",
    question:
      "Qual foi o primeiro ano em que o Mundial possuiu Fase de Entrada?",
    answers: [
      { id: "a74", answer: "2016", isCorrect: false },
      { id: "a75", answer: "2019", isCorrect: false },
      { id: "a76", answer: "2017", isCorrect: true },
      { id: "a77", answer: "2015", isCorrect: false },
    ],
  },
];
