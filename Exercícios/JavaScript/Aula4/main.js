var mtsNota = 5
var notaMin = 7

if (mtsNota>= notaMin) {
    console.log('Você foi aprovado!')
} else {
console.log("Infelizmente você não foi aprovado!")
}

//impar ou par 
console.clear()
var imparPar = prompt()
console.log("Digite o número:" , imparPar)
if (imparPar % 2 == 1) {
console.log('O número é impar!')
}else{
    if(imparPar >= 10){
        console.log('O número é par e maior ou igual que 10!')
    }else{
        console.log('O número é par porém menor que 10!')
    }
}
