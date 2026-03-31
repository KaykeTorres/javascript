const numero = 0
const indefinido = undefined
const nulo = null 
const textoVazio = ''


const nome = 'Kayke'

if (nome) {
    console.log('Ola,', nome)
} else {
    console.log('Ainda nao sei o seu nome')
}

const idade = null

if (idade != null) {

    if (idade >= 18) {
        console.log('Maior de idade')
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade')
    }
} 