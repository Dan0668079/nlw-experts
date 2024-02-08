const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um sistema operacional",
    ],
    correta: 1 // A resposta correta é a opção 2 (Uma linguagem de programação)
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de igualdade",
      "Atribuição",
      "Concatenação de strings",
    ],
    correta: 0 // A resposta correta é a opção 1 (Comparação estrita de igualdade)
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar = 10;",
      "variable myVar = 10;",
      "let myVar = 10;",
    ],
    correta: 2 // A resposta correta é a opção 3 (let myVar = 10;)
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um método de string",
      "Um bloco de código reutilizável",
    ],
    correta: 2 // A resposta correta é a opção 3 (Um bloco de código reutilizável)
  },
  {
    pergunta: "Qual é a forma correta de comentar uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "# Este é um comentário",
    ],
    correta: 0 // A resposta correta é a opção 1 (// Este é um comentário)
  },
  {
    pergunta: "Como você escreve 'Olá, Mundo!' em um alerta em JavaScript?",
    respostas: [
      "print('Olá, Mundo!')",
      "alert('Olá, Mundo!')",
      "console.log('Olá, Mundo!')",
    ],
    correta: 1 // A resposta correta é a opção 2 (alert('Olá, Mundo!'))
  },
  {
    pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
    respostas: [
      "10",
      "55",
      "Erro",
    ],
    correta: 1 // A resposta correta é a opção 2 (55)
  },
  {
    pergunta: "Qual é o método correto para adicionar um elemento a uma array em JavaScript?",
    respostas: [
      "array.add('elemento')",
      "array.push('elemento')",
      "array.insert('elemento')",
    ],
    correta: 1 // A resposta correta é a opção 2 (array.push('elemento'))
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um método de manipulação de strings",
      "Uma linguagem de programação",
      "Uma interface para interagir com elementos HTML",
    ],
    correta: 2 // A resposta correta é a opção 3 (Uma interface para interagir com elementos HTML)
  },
  {
    pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
    respostas: [
      "for (i <= 5; i++)",
      "for (i = 0; i < 5; i++)",
      "for (i = 5; i > 0; i--)",
    ],
    correta: 1 // A resposta correta é a opção 2 (for (i = 0; i < 5; i++))
  },
];


const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
// const quizItem = template.content.cloneNode(true)
// quiz.appendChild(quizItem)

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta" + perguntas.indexOf(item))
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {

      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)

      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
    }





    quizItem.querySelector("dl").appendChild(dt)
  }



  quizItem.querySelector("dl dt").remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

