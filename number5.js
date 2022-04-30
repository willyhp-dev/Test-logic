let dict = {
    "1" : "satu",
    "2" : "Dua",
    "3" : "Tiga",
    "4" : "Empat",
    "5" : "Lima",
    "6" : "Enam",
    "7" : "Tujuh",
    "8" : "Delapan",
    "9" : "Sembilan",
    "0" : "Puluh",
    "00" : "Ratus"
}

let input = 99

if (input < 1 || input >99) {
    console.log(`Silahkan Masukan Bilangan 1 - 100`)
}else{
    let tempInput = input.toString().split('')
    if (tempInput.length === 1) {
        console.log(dict[tempInput[0]])
    }else if (tempInput.length === 2) {
        if (tempInput[0] === '1') {
            if (tempInput[1] === '0') {
                console.log("Sepuluh")
            }else if(tempInput[1] === '1'){
                console.log("Sebelas")
            }else{
                console.log(`${dict[tempInput[1]]} Belas`)
            }
        }else{
            tempInput[1] === '0' ? console.log(`${dict[tempInput[0]]} Puluh`) : console.log(`${dict[tempInput[0]]} Puluh ${dict[tempInput[1]]}`)
        }
    }
}