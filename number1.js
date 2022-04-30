function pointA() {
  let number = 4;
  let hasilA = 1;
  for (let index = number; index > 0; index--) {
    console.log("point A");
    console.log(index + "*" + hasilA);
    hasilA = hasilA * index;
  }
}
pointA();

function pointB() {
  let number = 8;
  let hasilB = 1;
  for (let index = number; index > 0; index--) {
    console.log("point B");
    console.log(index + "*" + hasilB);
    hasilB = hasilB * index;
  }
}
pointB();
