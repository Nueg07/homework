// Membuat array dengan 100 nilai random antara 1 dan 50
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 50) + 1);
}

// Membuat dua array untuk index genap dan ganjil
let genapArray = [];
let ganjilArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    genapArray.push(randomArray[i]);
  } else {
    ganjilArray.push(randomArray[i]);
  }
}

// Menghitung nilai Min, Max, Total, dan Rata-rata tanpa menggunakan fungsi bawaan
function hitungMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function hitungMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function hitungTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function hitungRataRata(array) {
  let total = hitungTotal(array);
  return total / array.length;
}

// Menghitung nilai Min, Max, Total, dan Rata-rata untuk array genap dan ganjil
const minGenap = hitungMin(genapArray);
const maxGenap = hitungMax(genapArray);
const totalGenap = hitungTotal(genapArray);
const rataRataGenap = hitungRataRata(genapArray);

const minGanjil = hitungMin(ganjilArray);
const maxGanjil = hitungMax(ganjilArray);
const totalGanjil = hitungTotal(ganjilArray);
const rataRataGanjil = hitungRataRata(ganjilArray);

// Membandingkan hasil
let hasilPerbandingan = "";
if (minGenap > minGanjil) {
  hasilPerbandingan += "Min lebih besar pada array genap\n";
} else if (minGenap < minGanjil) {
  hasilPerbandingan += "Min lebih besar pada array ganjil\n";
} else {
  hasilPerbandingan += "Min memiliki nilai sama antara array genap dan ganjil\n";
}

if (maxGenap > maxGanjil) {
  hasilPerbandingan += "Max lebih besar pada array genap\n";
} else if (maxGenap < maxGanjil) {
  hasilPerbandingan += "Max lebih besar pada array ganjil\n";
} else {
  hasilPerbandingan += "Max memiliki nilai sama antara array genap dan ganjil\n";
}

if (totalGenap === totalGanjil) {
  hasilPerbandingan += "Total memiliki nilai sama antara array genap dan ganjil\n";
} else {
  hasilPerbandingan += "Total berbeda antara array genap dan ganjil\n";
}

console.log("Array Genap:", genapArray);
console.log("Array Ganjil:", ganjilArray);
console.log("Hasil Perbandingan:");
console.log(hasilPerbandingan);