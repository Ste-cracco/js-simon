
const numeriCasuali = numeriRandom()
const numeriUtente = []
const numeriCorrispondenti = []


alert(numeriCasuali)
console.log(numeriCasuali)



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
 

setTimeout(numeriInseritiUtente, 10000) 

function numeriInseritiUtente() {
    while(numeriUtente.length < 5) {
        const numUtente = parseInt(prompt("Inserisci 5 numeri, uno alla volta"))
        numeriUtente.push(numUtente)        
    }    

    for (let i = 0; i < numeriUtente.length; i++) {
        if(numeriUtente[i] === numeriCasuali[i]) {
            numeriCorrispondenti.push(numeriUtente[i])
        }
    }
    console.log("I numeri inseriti sono:", numeriUtente)
    console.log("Sono stati indovinati:", numeriCorrispondenti.length, "numeri")
    console.log("Numeri corrispondenti:", numeriCorrispondenti)
}



