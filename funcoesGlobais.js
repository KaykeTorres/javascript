function saudacao () {
    console.log('e ai, beleza?')
}

// setTimeout(saudacao, 2000) // ms

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido (Em segundos:', contador)
    if (contador == 10) {
    clearInterval(id) 
    }
}, 1000)