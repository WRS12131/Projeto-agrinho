let estado = 'inicio';
let perguntaAtual = 0;
let pontuacao = 0;

let perguntas = [
  {
    pergunta: "Qual o principal nutriente das plantas?",
    respostas: ["Água", "Nitrogênio", "Oxigênio", "Carbono"],
    respostaCorreta: 1
  },
  {
    pergunta: "O que é a fotossíntese?",
    respostas: ["Produção de alimentos", "Processo de respiração", "Produção de gás carbônico", "Absorção de luz"],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é a função da clorofila?",
    respostas: ["Absorver nutrientes", "Captar luz solar", "Produzir oxigênio", "Proteger contra pestes"],
    respostaCorreta: 1
  },
  {
    pergunta: "O que é irrigação?",
    respostas: ["Adubação do solo", "Distribuição de água para plantas", "Crescimento das raízes", "Controle de pragas"],
    respostaCorreta: 1
  },
  {
    pergunta: "O que é a rotação de culturas?",
    respostas: ["Troca de sementes", "Alteração de solos", "Mudança de planta a cada safra", "Plantio em solo úmido"],
    respostaCorreta: 2
  },
  {
    pergunta: "Qual o melhor tipo de solo para agricultura?",
    respostas: ["Solo argiloso", "Solo arenoso", "Solo humoso", "Solo pedregoso"],
    respostaCorreta: 2
  },
  {
    pergunta: "O que é adubação?",
    respostas: ["Plantio de sementes", "Aplicação de nutrientes no solo", "Controle de ervas daninhas", "Transplante de plantas"],
    respostaCorreta: 1
  },
  {
    pergunta: "O que são agrotóxicos?",
    respostas: ["Produtos para aumentar a colheita", "Produtos para controlar pragas", "Produtos para melhorar o sabor", "Produtos para aumentar a resistência ao frio"],
    respostaCorreta: 1
  },
  {
    pergunta: "Qual é a principal função das raízes?",
    respostas: ["Absorver água e nutrientes", "Reproduzir-se", "Fazer fotossíntese", "Produzir flores"],
    respostaCorreta: 0
  },
  {
    pergunta: "O que é um monocultivo?",
    respostas: ["Plantio de uma única espécie", "Mistura de várias espécies", "Cultivo de plantas em estufas", "Agricultura orgânica"],
    respostaCorreta: 0
  }
];

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  if (estado === 'inicio') {
    telaInicio();
  } else if (estado === 'quiz') {
    telaQuiz();
  } else if (estado === 'resultado') {
    telaResultado();
  }
}

function logo() {
  stroke(34, 139, 34);
  strokeWeight(5);
  noFill();
  ellipse(width / 2, height / 4, 200, 200);

  fill(34, 139, 34);
  textSize(28);
  textFont('Arial');
  text("Quiz Agrinho 2025", width / 2, height / 4);
}

function telaInicio() {
  logo();

  fill(50, 100, 200);
  rect(150, 250, 300, 100, 20);

  fill(255);
  textSize(32);
  text("Quiz sobre Agronomia", width / 2, height / 4 + 130);

  textSize(20);
  text("Clique para começar", width / 2, height / 2 + 60);

  if (mouseIsPressed) {
    estado = 'quiz';
    perguntaAtual = 0;
    pontuacao = 0;
  }
}

function telaQuiz() {
  fill(255, 204, 0);
  ellipse(300, 100, 250, 100);
  fill(0);
  textSize(24);
  text(perguntas[perguntaAtual].pergunta, width / 2, 100);

  for (let i = 0; i < perguntas[perguntaAtual].respostas.length; i++) {
    let yPos = 180 + i * 60;
    fill(255);
    rect(150, yPos, 300, 50, 10);
    fill(0);
    textSize(18);
    text(perguntas[perguntaAtual].respostas[i], width / 2, yPos + 25);
  }

  fill(0);
  textSize(20);
  text("Pontuação: " + pontuacao, width - 100, 30);
}

function mousePressed() {
  if (estado === 'quiz') {
    for (let i = 0; i < perguntas[perguntaAtual].respostas.length; i++) {
      let yPos = 180 + i * 60;
      if (mouseX > 150 && mouseX < 450 && mouseY > yPos && mouseY < yPos + 50) {
        if (i === perguntas[perguntaAtual].respostaCorreta) {
          pontuacao++;
        }
        perguntaAtual++;

        if (perguntaAtual >= perguntas.length) {
          estado = 'resultado';
        }
        break;
      }
    }
  }
}

function telaResultado() {
  fill(50, 100, 200);
  rect(150, 150, 300, 160, 20);

  fill(255);
  textSize(32);
  text("Fim do Quiz!", width / 2, height / 4);

  textSize(20);
  text("Sua pontuação: " + pontuacao, width / 2, height / 2 - 30);

  textSize(16);
  let mensagem = "";
  if (pontuacao >= 8) {
    mensagem = "Parabéns, você é um especialista!";
  } else if (pontuacao >= 5) {
    mensagem = "Bom trabalho, continue aprendendo!";
  } else {
    mensagem = "Tente novamente para melhorar!";
  }
  text(mensagem, width / 2, height / 2 + 30);

  textSize(16);
  text("Clique para jogar novamente", width / 2, height / 2 + 90);

  if (mouseIsPressed && mouseX > 150 && mouseX < 450 && mouseY > height / 2 + 10 && mouseY < height / 2 + 70) {
    estado = 'inicio';
    perguntaAtual = 0;
    pontuacao = 0;
  }
}
