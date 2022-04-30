
for (let index = 0; index<=15 ; index++) {
    console.log(checkNumber(index));
}
function checkNumber(angka) {
    if (angka % 3 === 0 && angka % 5 === 0) {
        return "Eduwork";
    }
    if (angka % 3 === 0) {
        return "edu";
    }
    if (angka % 5 === 0) {
        return "work";
    }
    else {
        return angka;
    }
}





