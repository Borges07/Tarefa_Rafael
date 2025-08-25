const citacoes = [
  "A imaginação é mais importante que o conhecimento. - Albert Einstein",
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill"
];

const citacaoEl = document.getElementById("citacao");
const botaoEl = document.getElementById("novaCitacaoBtn");

citacaoEl.style.transition = "opacity 0.5s ease";

botaoEl.addEventListener("click", () => {
  citacaoEl.style.opacity = 0; 

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * citacoes.length);
    citacaoEl.textContent = citacoes[randomIndex];
    citacaoEl.style.opacity = 1; 
  }, 500); 
});
