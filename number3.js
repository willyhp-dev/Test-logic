 let input = "9.86-A5.321"
printDigitValue(input.split(''));

function printDigitValue(params) {
    let arr = []
    params.forEach(item => {
        !isNaN(item) ? arr.push(item) : null
    });
    let panjang = arr.length - 1
    arr.forEach(item => {
        print(item, panjang)
        panjang--
    });
}

function print(angka, panjang) {
    let result = angka;
    for (let i = 0; i < panjang; i++) {
        result += "0"
    }
    console.log(result);
}