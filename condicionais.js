const idade = 20

// if (idade >= 18) {
//     console.log ('É maior de idade!')
// } else {
//     console.log ('É menor de idade!')
// }
 
idade >= 18 ? console.log ('maior de idade') : console.log ('menor de idade')

// if (idade < 18) {
//    console.log ('É menor de idade!')
// }

// entre 9 e 10: exelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 3 e 0: ruim

const notaDoAluno = 8

// if (notaDoAluno >= 9 ) {
//     console.log ('Nota Exelente')
// } else if (notaDoAluno >= 7) {
//     console.log ('Nota boa')
// } else if (notaDoAluno >= 4) {
//     console.log ('Nota média')
// } else if (notaDoAluno >= 0) {
//     console.log ('Nota ruim')
// }

notaDoAluno >= 9 ? console.log ('excelente') :
    notaDoAluno >= 7 ? console.log ('Nota boa') :
        notaDoAluno >= 4 ? console.log ('Nota média') :
            console.log ('Ruim')