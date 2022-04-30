let low = 2;
let high = 15;

let array = [1, 4, 7, 9, 12];

for (let index = 0; index < array.length; index++) {
     const element = array[index];
    if (element >= low && element <= high) {
        const hasilArray = element;
        console.log(hasilArray);
    }
}



