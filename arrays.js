 const frutas = ['Uva', 'Banana', 'Kiwi', 'Maca', 'Morango']
// uva = 0
// morango = 4
// 
// 
 console.log (frutas)
// 
// console.log('primeira fruta', frutas[0]) 
// console.log('Ultima fruta', frutas[4]) 
// 
// console.log('Total de frutas', frutas.length) 
// 
// frutas.push('Melancia')
// 
// console.log('total de frutas depois de adicionar melancia:', // frutas.length)
// 
// console.log('Ultima fruta', frutas[frutas.length - 1])

// frutas.splice(2, 1)

 // console.log ('Depois de remover', frutas)

 for(let i = 0; i < frutas.length; i ++) {
    console.log('indice: ', i)
    console.log(frutas[i])
 }

 console.log('Usando forEach')
 
 frutas.forEach((valor, indice) => {
    console.log('indice: ', indice, valor)
 })

 console.log('Usando for of:')
 for (const fruta of frutas) {
    console.log('fruta da vez: ', fruta)
 }