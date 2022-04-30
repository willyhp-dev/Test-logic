//no 1
console.log(hitung(4))
console.log(hitung(8))
//function Hitung
function hitung(angka) {
    let result = `{${angka}*`;
    let hasil = angka;
    for (let i = angka-1; i >= 1; i--) {
        hasil *= i
        i === 1 ? result +=`${i}}` : result += `${i}*`
    }
    return `${result} = ${hasil}`
}