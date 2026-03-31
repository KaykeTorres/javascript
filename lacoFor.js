// estrutura do laco de repeticao FOR
for(let contador = 1; contador <= 10; contador++) {
console.log ('Numero atual:', contador)
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log ('Numero par encontrado', numero)
    }
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log ('Numero impar encontrado', numero)
    }
}

const palavra = 'calopsita'

// palavra.length indica quantos caracteres uma stringh possui
// palavra[1] - pega a letra na posicao indicada

for (let contador = 0; contador < palavra.length; contador++) {
    console.log (palavra[contador])
}