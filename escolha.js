// entre 9 e 10: exelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 3 e 0: ruim

const notaDoAluno = 10

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log('exelente')
        break
    case 8:
    case 7:
        console.log('Bom')
        break
    case 6:
    case 5:
    case 4:
        console.log('Medio')
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Ruim')
        break
        default:
        console.log ('Valor invalido')
        break
}