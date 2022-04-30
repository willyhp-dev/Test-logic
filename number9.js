let array = [4, 2, 6, 88, 3, 11];
let rendah = array[0];
let tinggi = array[0];

for (let index = 1; index < array.length; index++) {
    if (rendah > array[index]) {
        rendah = array[index];
    }
    if (tinggi < array[index]) {
        tinggi = array[index];
    }
}
console.log({rendah}, {tinggi});