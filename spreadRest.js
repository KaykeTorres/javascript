let camila1 = {
    nome: 'camila',
    idade: 29,
    profissao: 'desenvolvedora'
}

const camila2 = { ...camila1 }

camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desensolvedora Senior',
    possuiCNH: true
}

console.log(camila1)

const { nome, ...restante } = camila1

console.log(nome)
console.log(restante)