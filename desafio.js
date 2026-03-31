// DESAFIO 1
let nome = "Olá, Kayke ! Seja bem-vindo(a) ao curso de JavaScript!"

console.log(nome)

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

console.log(localizacao)

// DESAFIO 4
let temCarteira = true

console.log(typeof temCarteira)

// DESAFIO 5
let saldo = 0
let deposito = 200
let saque = 50

saldo = saldo + deposito - saque;

console.log(`Eu tenho ${saldo} na conta. `);

// DESAFIO 6
let nota = 0
let notaMatematica = 9
let notaPortugues = 7
let notaCiencias = 3

nota = notaMatematica + notaPortugues + notaCiencias;

console.log(`Media final ${nota}`);

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
console.log(`Valor de pi e de ${pi}`)


// DESAFIO 10
let mensagem = 'Voce tem o total de creditos de: '
let numero = 32000

let resultado = mensagem + numero

console.log(resultado);
console.log(typeof resultado);


// DESAFIO EXTRA

console.log('Boas vindas a calculadora de trocos!')

let valorCompra = 17.50
let valorPago = 20

console.log('Valor da compra: R$', valorCompra)
console.log('Valor recebido: R$ ', valorPago)


let troco = valorPago - valorCompra

console.log(`Voce deu R$ ${troco} de troco apos sua venda`)

// DESAFIO 11

let idadeKayke = 13
const souMaiorDeIdade = 18

console.log(idadeKayke >= souMaiorDeIdade);

// DESAFIO 12

let notaIngles = 3
let notaEspanhol = 5
let media = 7

let notaFinal = notaIngles + notaEspanhol

console.log(notaFinal >= media)

// DESAFIO 13

let valorArroz = 35.90
let valorNoPix = 50
let trocoFinal = valorNoPix - valorArroz

console.log(`Voce recebeu ${trocoFinal.toFixed(2)} de troco`)

// DESAFIO 14

const senhaDigitada = "Batata123";
const confirmacaoSenha = "Batata123";

const senhasSaoIguais = senhaDigitada === confirmacaoSenha

console.log('As senhas coincidem?', senhasSaoIguais)

// DESAFIO 15

const totalAulas = 130
const totalFaltas = 30

const limiteFaltas = totalAulas * 0.25
const ultrapassouLimite = totalFaltas > limiteFaltas;

console.log('ultrapassou o limite de faltas?', totalFaltas > limiteFaltas)

// DESAFIO 16

const temLogin = true
const temSenha = true

console.log('Ambas sao verdadeira?', temLogin && temSenha)

// DESAFIO 17

const disponivel = false
console.log(!disponivel)

// DESAFIO 18

const n1 = 18
const n2 = 18

const resultadoFinal = (n1 % 2 === 0) && (n2 % 2 === 0) && (n1 === n2)

console.log(resultadoFinal)

// DESAFIO 19

const valorBase = 120
const porcentagem = 15

const resultadoPorcentagem = valorBase * (porcentagem / 100);

console.log(`${porcentagem}% de ${valorBase} é igual a ${resultadoPorcentagem}.`)

//DESAFIO 20

const resultadoOperacao = 2 + 3 * 5

console.log(resultadoOperacao)


//DESAFIO 21

const idadeBebida = 19

if (idadeBebida >= 18) {
    console.log('Pode comprar bebida alcoólica')
} else {
    console.log('Venda proibida para menores de 18 anos')
}

//DESAFIO 22

const horaAtual = 11

switch (horaAtual) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('Bom dia!')
        break
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log('Bom Tarde!')
        break
    default:
        console.log('Boa noite!')
}

//DESAFIO 23

const verificacaoDeNumero = 0

if (verificacaoDeNumero > 0) {
    console.log('Este numero e positivo')
}
else if (verificacaoDeNumero < 0) {
    console.log('Este numero e negativo')
}
else {
    console.log('O numero e zero')
}

//DESAFIO 24

const notaDeConceito = 7

if (notaDeConceito >= 9 && notaDeConceito <= 10) {
    console.log('Nota A')
}
else if (notaDeConceito >= 8) {
    console.log('Nota B')
}
else if (notaDeConceito >= 6) {
    console.log('Nota C')
}
else if (notaDeConceito >= 4) {
    console.log('Nota D')
}
else console.log('Nota E')

//DESAFIO 25

const num = 2;

// A lógica: O resto da divisão por 2 é igual a 0? 
// Se sim (?), 'Par'. Se não (:), 'Ímpar'.

const resposta = (num % 2 === 0) ? 'Par' : 'Ímpar';

console.log(resposta); // Agora os nomes batem!

//DESAFIO 26


const opcao = 3

switch (opcao) {
    case 1:
        console.log('cadastrar')
        break
    case 2:
        console.log('listar')
        break
    case 3:
        console.log('sair')
        break
    default:
        console.log("Opção inválida! Escolha entre 1 e 3.")
}

//DESAFIO 27

const emailValidacao = 'Kaykeallantorresdutra@gmail.com'

if (emailValidacao === '') {
    console.log('Preencha o campo e-mail')
} else {
    console.log('E-mail Valido')
}

//DESAFIO 28

let senhaValidacao = '878'
let senhaValida = true

if (senhaValida) {
    console.log('Senha valida')
} else {
    console.log('Senha muito curta')
}

//DESAFIO 29

const saldoDisponivel = 120
const custoDaCompra = 13

if (saldoDisponivel >= custoDaCompra) {
    console.log ('Compra aprovada')
} else {
    console.log ('Saldo insuficiente')
}

//DESAFIO 30

const nomeFormulario = 'kaka'
const emailFormulario = 'java@gmail.com'
const idadeFormulario = 0

const formularioValido = (nomeFormulario !== "" && emailFormulario !== "");

if (formularioValido) {
    console.log ('Formulario enviado com sucesso')
} else {
    console.log ('por favor, preencha todos os campos corretamente')
}

//DESAFIO 31

for (let i = 1; i <= 10; i++) { 

console.log(i); 

} 

//DESAFIO 32

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i; // mesmo que: soma = soma + i
}

console.log("Soma de 1 a 100: " + soma);


//DESAFIO 33

let numero33 = 7;

for (let i = 1; i <= 10; i++) {
  console.log(numero33 + " x " + i + " = " + (numero33 * i));
}

//DESAFIO 34

let contagem = 10;

while (contagem >= 0) {
  console.log(contagem);
  contagem--; // reduz 1 a cada volta
}

console.log("Contagem finalizada!");

//DESAFIO 35

let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
  // simulação de entrada manual
  if (repeticoes === 0) numeroDigitado = 5;
  else if (repeticoes === 1) numeroDigitado = 10;
  else numeroDigitado = 0;

  if (numeroDigitado !== 0) quantidade++;
  repeticoes++;

} while (numeroDigitado !== 0);

console.log("Total digitados: " + quantidade);

//DESAFIO 36

let numeroSecreto = 7;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;

  if (tentativa === 1) numeroTentado = 3;
  else if (tentativa === 2) numeroTentado = 5;
  else numeroTentado = 7;

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}

//DESAFIO 37

let anoNascimento37 = 2000;
let anoAtual37 = 2025;

for (let ano = anoNascimento37; ano <= anoAtual37; ano++) {
  console.log(
    "Em " + ano + " você tinha " + (ano - anoNascimento37) + " anos."
  );
}

//DESAFIO 38

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {  // % = resto da divisão
    console.log(i);
  }
}

//DESAFIO 39

let multiplosDe3 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    multiplosDe3++;  // contador
  }
}

console.log("Divisíveis por 3: " + multiplosDe3);

//DESAFIO 40

let opcao40;
let passo = 0;

do {
  // simulação das escolhas do usuário
  if (passo === 0) opcao40 = 1;
  else if (passo === 1) opcao40 = 2;
  else opcao40 = 3;

  if (opcao40 === 1) console.log("Ver saldo");
  else if (opcao40 === 2) console.log("Fazer depósito");
  else if (opcao40 === 3) console.log("Sair");

  passo++;
} while (opcao40 !== 3);