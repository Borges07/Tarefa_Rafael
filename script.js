const citacoes = [
  "A imaginação é mais importante que o conhecimento. - Albert Einstein",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill"
];

const citacaoEl = document.getElementById("citacao");
const botaoEl = document.getElementById("novaCitacaoBtn");

botaoEl.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * citacoes.length);
  citacaoEl.textContent = citacoes[randomIndex];
});
