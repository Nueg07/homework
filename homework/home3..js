let randomArray = [];

for (let i = 0; i < 100; i++) {
  let randomValue = Math.floor(Math.random() * 50) + 1;
  randomArray.push(randomValue);
}

let genapArray = [];
let ganjilArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    genapArray.push(randomArray[i]);
  } else {
    ganjilArray.push(randomArray[i]);
  }
}

console.log("Array Genap:", genapArray);
console.log("Array Ganjil:", ganjilArray);