let low = 2;
let high = 15;
let hasilArray = [];
let array = [1, 4, 7, 9, 12];

for (let index = 0; index < array.length; index++) {
    if (array[index] >= low && array[index] <= high) {
        hasilArray.push(array[index]);
    }
}
console.log(hasilArray.length);



