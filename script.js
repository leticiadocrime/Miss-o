const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo vocẽ prefere?",
        alternativas: [
            {
                texto: "Casual",
                afirmacao: "afirmação"
            },
            {
                texto: "Elegante",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Seguir tendências ou seguir um estilo?",
        alternativas: [
            {
                texto: "Tendências",
                afirmacao: "afirmação"
            },
            {
                texto: "Um estilo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Vocẽ costuma combinar a bolsa com os sapatos e cinto?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação"
            },
            {
                texto: "Não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Vocẽ se veste conforme o ambiente ou mantẽm o mesmo estilo em todas as ocasiões?",
        alternativas: [
            {
                texto: "Conforme o ambiente",
                afirmacao: "afirmação"
            },
            {
                texto: "Mantenho o mesmo estilo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Vocẽ prefere roupas de cores neutras ou vibrantes?  ",
        alternativas: [
            {
                texto: "Neutras",
                afirmacao: "afirmação"
            },
            {
                texto: "Vibrantes",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
