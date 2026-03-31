// contar quantos numeros pares e quantos numeros impares nos temos entre 0 e 100

let totalNumerosPares = 1
let totalNumerosImpares = 1

// laco de repeticao

do {
    if (totalNumerosPares % 2 == 0) {
        console.log(' numeros pares: ', totalNumerosPares)
    } 
    else {
        console.log ('totalNumerosImpares :', totalNumerosImpares)
    }

    totalNumerosPares++
    totalNumerosImpares++
}  while (totalNumerosPares <= 50)