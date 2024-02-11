const perguntas = [
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara valores e tipos de dados sem coerção",
            "Compara valores apenas, sem considerar tipos de dados",
            "Compara tipos de dados apenas"
        ],
        correta: 0
    },
    {
        pergunta: "Como declaramos uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "let myVar ="
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "Ambos são usados para variáveis mutáveis, mas 'const' é para constantes",
            "'let' é usado para variáveis globais, enquanto 'const' é para variáveis locais",
            "'let' é para variáveis mutáveis, enquanto 'const' é para variáveis imutáveis"
        ],
        correta: 2
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Model"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
        respostas: [
            "Modificar elementos HTML",
            "Adicionar estilos CSS dinamicamente",
            "Associar eventos a elementos HTML"
        ],
        correta: 2
    },
    {
        pergunta: "Como se realiza uma iteração por meio de um array em JavaScript?",
        respostas: [
            "for-in loop",
            "while loop",
            "for loop"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que retorna um valor",
            "Uma função passada como argumento para outra função",
            "Uma função que não aceita parâmetros"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Java Script Object Notation",
            "JavaScript Open Notation",
            "JavaScript Object Navigation"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
            "'null' representa a ausência intencional de qualquer valor de objeto",
            "'undefined' representa uma variável que foi declarada, mas ainda não foi atribuída",
            "Ambos representam valores nulos"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
        respostas: [
            "Uma técnica de otimização de código",
            "O processo de mover declarações para o topo do escopo antes da execução",
            "Um método para evitar vazamentos de memória"
        ],
        correta: 1
    }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta    

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        dt.querySelector("span").textContent = resposta
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)  
            if(estaCorreta) {
              corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        quizItem.querySelector("dl").appendChild(dt)
    }

    quizItem.querySelector("dl dt").remove()
    
    quiz.appendChild(quizItem)
}