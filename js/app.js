
const numeriCasuali = numeriRandom()
const numeriUtente = numeriInseritiUtente()

alert(numeriCasuali)
// console.log(numeriUtente)


setTimeout(numeriInseritiUtente, 3000) 

function numeriRandom () {
    const numeriCasuali = []
    while(numeriCasuali.length < 5) {
        const num = getRandomIntInclusive(1, 100)
        if(!numeriCasuali.includes(num)){
            numeriCasuali.push(num)
        }
    }  
    return numeriCasuali
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 
function numeriInseritiUtente() {
    const numeriUtente = []
    while(numeriUtente.length < 5) {
        const numUtente = prompt("Inserisci 5 numeri, uno alla volta")
        numeriUtente.push(numUtente)
    }
    return numeriUtente
}