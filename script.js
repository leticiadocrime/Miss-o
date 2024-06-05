const caixaPrincipal = document querySelector(".caixa-principal");
const caixaPerguntas = document querySelector(".caixa-perguntas");
const caixaAlternativas = document querySelector(".caixa-alternativas);
const caixaResultado = document querySelector(".caixa-resultado);
                                              
const perguntas = [
    {
        enunciado: "Qual seu estilo de roupa favorito?",
        alternativas: [
            "Elegante",
            "Casual"
        ]
    },
    {
        enunciado: "Qual combinação de cores você prefere?",
        alternativas: [
            "Branco e bege.",
            "Branco e preto.",
        ]
    },
    {
        enunciado: "Ao sair de casa, vocẽ escolhe ir com acessórios ou sem?",
        alternativas: [
            "Com acessórios.",
            "Sem acessórios."
        ]
    },
    {
        enunciado: "Na hora de se arrumar, vocẽ prioriza conforto ou elegãncia?",
        alternativas: [
            "Conforto.",
            "Elegãncia."
        ]
    },
    {
        enunciado: "Você sabe montar looks com truques visuais?",
        alternativas: [
           "Sim.",
            "Não."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas(){
  for (const alternativa of perguntaAtual.alternativas)
    const botaoAlternativas = document.createElement("button");
  botaoAlternativa.textContent
}

mostraPergunta();
