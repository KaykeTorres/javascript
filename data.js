const agora = new Date()

console.log(agora)

console.log('Ano: ',agora.getFullYear())
console.log('Mes: ',agora.getMonth())
console.log('Horas: ',agora.getHours())
console.log('Minutos: ',agora.getMinutes())
console.log('Dia do mes: ',agora.getDate())

const nascimento = new Date('2008-07-09T03:00:00.000Z')

console.log(nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))

console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))