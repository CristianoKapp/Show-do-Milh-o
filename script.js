// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    "pergunta": "Qual é o maior oceano do planeta?",
    "respostas": [
      { "opcao": "Oceano Pacifico", "correto": true },
      { "opcao": "Oceano Indico", "correto": false },
      { "opcao": "Oceano Artico", "correto": false },
      { "opcao": "Oceano Atlantico", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o país conhecido por ter o formato de uma bota?",
    "respostas": [
      { "opcao": "Grécia", "correto": false },
      { "opcao": "Espanha", "correto": false },
      { "opcao": "Itália", "correto": true },
      { "opcao": "Portugal", "correto": false }
    ]
  },
  {
    "pergunta": "Quem escreveu a obra “Dom Quixote”?",
    "respostas": [
      { "opcao": "William Shakespeare", "correto": false },
      { "opcao": "José Saramago", "correto": false },
      { "opcao": "Miguel de Cervantes", "correto": true },
      { "opcao": "Gabriel García Márquez", "correto": false }
    ]
  },
  {
    "pergunta": "Qual elemento químico tem o símbolo “Au”?",
    "respostas": [
      { "opcao": "Prata", "correto": false },
      { "opcao": "Alumínio", "correto": false },
      { "opcao": "Ouro", "correto": true },
      { "opcao": "Cobre", "correto": false }
    ]
  },
  {
    "pergunta": "Em que ano o homem pisou na Lua pela primeira vez?",
    "respostas": [
      { "opcao": "1959", "correto": false },
      { "opcao": "1969", "correto": true },
      { "opcao": "1979", "correto": false },
      { "opcao": "1989", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o país com o maior número de falantes da língua portuguesa?",
    "respostas": [
      { "opcao": "Angola", "correto": false },
      { "opcao": "Brasil", "correto": true },
      { "opcao": "Portugal", "correto": false },
      { "opcao": "Moçambique", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é a capital da Nova Zelândia?",
    "respostas": [
      { "opcao": "Auckland", "correto": false },
      { "opcao": "Wellington", "correto": true },
      { "opcao": "Christchurch", "correto": false },
      { "opcao": "Hamilton", "correto": false }
    ]
  },
  {
    "pergunta": "Quem pintou “O Jardim das Delícias Terrenas”?",
    "respostas": [
      { "opcao": "Leonardo da Vinci", "correto": false },
      { "opcao": "Sandro Botticelli", "correto": false },
      { "opcao": "Hieronymus Bosch", "correto": true },
      { "opcao": "Pieter Bruegel", "correto": false }
    ]
  },
  {
    "pergunta": "Quantos ossos há no corpo humano adulto, em média?",
    "respostas": [
      { "opcao": "201", "correto": false },
      { "opcao": "206", "correto": true },
      { "opcao": "212", "correto": false },
      { "opcao": "220", "correto": false }
    ]
  },
  {
    "pergunta": "Qual é o nome do tratado assinado em 1648 que marcou o fim da Guerra dos Trinta Anos?",
    "respostas": [
      { "opcao": "Tratado de Tordesilhas", "correto": false },
      { "opcao": "Tratado de Paris", "correto": false },
      { "opcao": "Tratado de Vestfália", "correto": true },
      { "opcao": "Tratado de Viena", "correto": false }
    ]
  }
]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();