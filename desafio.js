// DESAFIO 1
let nome = "Olá, Kayke ! Seja bem-vindo(a) ao curso de JavaScript!"

console.log (nome)

// DESAFIO 2
// 1. Criando as variáveis
const anoAtual = 2026;
const anoNascimento = 1995;

// 2. Calculando a idade
const idade = anoAtual - anoNascimento;

// 3. Exibindo no console usando Template Literals (aquelas crases ` `)
console.log(`Você tem ${idade} anos.`)

// DESAFIO 3
let localizacao = 'EU estou em SP, Sao paulo, Brasil'

console.log (localizacao)

// DESAFIO 4
let temCarteira = true

console.log (typeof temCarteira)

// DESAFIO 5
let saldo = 0
let deposito = 200
let saque = 50

saldo = saldo + deposito - saque;

console.log (`Eu tenho ${saldo} na conta. `);

// DESAFIO 6
let nota = 0
let notaMatematica = 9
let notaPortugues = 7
let notaCiencias = 3

nota = notaMatematica + notaPortugues + notaCiencias;

console.log (`Media final ${nota}`);

// DESAFIO 7
let salario = 3000;
const percentualAumento = 0.1;

const valorDoAumento = salario * percentualAumento;
const salarioFinal = salario + valorDoAumento;


console.log(`Você ganhou um aumento de 10% por bater recorde de clientes! Seu salário subiu de R$ ${salario} para R$ ${salarioFinal}.`);

// DESAFIO 8
let cliques = 0; // Começamos com zero

// Simulando 3 cliques
cliques++; // Clique 1 (Agora é 1)
cliques++; // Clique 2 (Agora é 2)
cliques++; // Clique 3 (Agora é 3)
cliques++; // E assim vai...
cliques++;
cliques++;
cliques++;

console.log(`O botão foi clicado ${cliques} vezes.`);

// DESAFIO 9
const pi = 3.14
console.log (`Valor de pi e de ${pi}`)


// DESAFIO 10
let mensagem = 'Voce tem o total de creditos de: '
let numero = 32000

let resultado = mensagem + numero
 
console.log(resultado);
console.log(typeof resultado);