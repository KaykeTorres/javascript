const idade = 18
const souMaiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = souMaiorDeIdade && possuiCNH // AND

console.log ('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = souMaiorDeIdade || possuiCNH // OR

console.log ('Pode viajar sozinha? ', podeViajarSozinha)

const precisaDeAcompanhante = !souMaiorDeIdade

console.log ('Precisa de acompanhante? ', precisaDeAcompanhante)

// AND &&
// OR ||
// NOT !

