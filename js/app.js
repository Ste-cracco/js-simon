
const numeriCasuali = numeriRandom()
const numeriUtente = []


alert(numeriCasuali)
console.dir(numeriCasuali)
console.log(numeriUtente)


function numeriRandom () {
    const numeriCasuali = []
    while(numeriCasuali.length < 5) {
        var num = getRandomIntInclusive(1, 100)
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
 

setTimeout(numeriInseritiUtente, 3000) 

function numeriInseritiUtente() {
    while(numeriUtente.length < 5) {
        const numUtente = parseInt(prompt("Inserisci 5 numeri, uno alla volta"))
        numeriUtente.push(numUtente)
    }
    return numeriUtente
}

//-----------------------------------------------------------------------------------------------------------------


const intersection = numeriCasuali.filter(value => numeriUtente.includes(value)).filter((value, index, self) => self.indexOf(value) === index);

console.log(intersection)