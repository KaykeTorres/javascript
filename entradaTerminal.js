// const console = require('console')
// const readline = require('readline')

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// leitor.question('Qual e o seu nome?', (nome) => {
//     console.log('Ola,',nome)
//     console.log('Bem-vindo(a) ao Quiz de JavaScript!')
//
//     leitor.question('Vamos começar?', (text) => {
//
//        console.log('Responda com a letra correta: a, b ou c\n')
//
//         leitor.close()
//
//     })
//
// })
//
// leitor.question('')

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const perguntas = [
    {
        texto: '1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ',
        correta: 'b'
    },
    {
        texto: '2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ',
        correta: 'c'
    },
    {
        texto: '3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ',
        correta: 'b'
    }
];

let acertos = 0;
let indice = 0;

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

function fazerPergunta() {
    if (indice >= perguntas.length) {
        exibirResultado();
        return;
    }

    const pergunta = perguntas[indice];

    rl.question(pergunta.texto, (resposta) => {
        if (resposta.trim().toLowerCase() === pergunta.correta) {
            acertos++;
        }
        indice++;
        fazerPergunta();
    });
}

function exibirResultado() {
    if (acertos === 3) {
        console.log('Parabéns, você gabaritou!');
    } else if (acertos === 2) {
        console.log('Muito bom, continue assim!');
    } else if (acertos === 1) {
        console.log('Bom! Continue estudando.');
    } else {
        console.log('Continue praticando e tente novamente!');
    }

    rl.close();
}

fazerPergunta();