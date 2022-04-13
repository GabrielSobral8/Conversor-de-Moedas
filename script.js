function converter(){
    const moedaIn = document.querySelector('input[name="in"]:checked')
    const min = moedaIn.value

    const moedaOut = document.querySelector('input[name="out"]:checked')
    const mout = moedaOut.value

    const input = document.getElementById("quantia")
    const valorOriginal = input.value
    console.log ({valorOriginal})
// dolar = 4.67   euro  5.96   libra 6.08 real 1.00
let valorEmReal = 0
if(min == "dolar"){
    valorEmReal = valorOriginal * 4.67
}
else if(min == "euro"){
    valorEmReal = valorOriginal * 5.96
}
else if(min == "libra"){
    valorEmReal = valorOriginal * 6.08
}
else if(min == "real"){
    valorEmReal = valorOriginal
}


let valorConvertido = 0


if(mout == "dolar"){
    valorConvertido = valorEmReal * 0.21
}
else if(mout == "euro"){
    valorConvertido = valorEmReal * 0.20
}
else if(mout == "libra"){
    valorConvertido = valorEmReal * 0.16
}
else if(mout == "real"){
    valorConvertido = valorEmReal
}
const spanOut = document.getElementById('res')
spanOut.innerText = valorConvertido

    
}