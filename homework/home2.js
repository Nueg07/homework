// Buat array dengan 100 nilai acak antara 1 dan 50
let randomArray = [];

for (let i = 0; i < 100; i++) {
  const randomValue = Math.floor(Math.random() * 50) + 1;
  randomArray.push(randomValue);
}

// Buat array untuk nilai genap dan ganjil
let evenArray = [];
let oddArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomArray[i]);
  } else {
    oddArray.push(randomArray[i]);
  }
}

// Fungsi untuk menghitung nilai minimum
function getMinValue(arr) {
  return Math.min(...arr);
}

// Fungsi untuk menghitung nilai maksimum
function getMaxValue(arr) {
  return Math.max(...arr);
}

// Fungsi untuk menghitung total
function getTotalValue(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// Fungsi untuk menghitung rata-rata
function getAverageValue(arr) {
  return arr.length === 0 ? 0 : getTotalValue(arr) / arr.length;
}

// Menghitung nilai minimum, maksimum, total, dan rata-rata untuk array genap
let minEven = getMinValue(evenArray);
let maxEven = getMaxValue(evenArray);
let totalEven = getTotalValue(evenArray);
let averageEven = getAverageValue(evenArray);

// Menghitung nilai minimum, maksimum, total, dan rata-rata untuk array ganjil
let minOdd = getMinValue(oddArray);
let maxOdd = getMaxValue(oddArray);
let totalOdd = getTotalValue(oddArray);
let averageOdd = getAverageValue(oddArray);

// Bandingkan kedua array
let comparisonResults = [];

if (minEven > minOdd) {
  comparisonResults.push("Min lebih besar pada array genap");
} else if (minOdd > minEven) {
  comparisonResults.push("Min lebih besar pada array ganjil");
} else {
  comparisonResults.push("Min memiliki nilai yang sama pada kedua array");
}

if (maxEven > maxOdd) {
  comparisonResults.push("Max lebih besar pada array genap");
} else if (maxOdd > maxEven) {
  comparisonResults.push("Max lebih besar pada array ganjil");
} else {
  comparisonResults.push("Max memiliki nilai yang sama pada kedua array");
}

if (totalEven === totalOdd) {
  comparisonResults.push("Total memiliki nilai yang sama pada array genap dan ganjil");
} else {
  comparisonResults.push("Total berbeda antara array genap dan ganjil");
}

if (averageEven > averageOdd) {
  comparisonResults.push("Rata-rata lebih besar pada array genap");
} else if (averageOdd > averageEven) {
  comparisonResults.push("Rata-rata lebih besar pada array ganjil");
} else {
  comparisonResults.push("Rata-rata memiliki nilai yang sama pada kedua array");
}

// Tampilkan hasilnya
console.log("Array Genap:", evenArray);
console.log("Array Ganjil:", oddArray);
console.log("Hasil Perbandingan:");
comparisonResults.forEach((result) => console.log(result));