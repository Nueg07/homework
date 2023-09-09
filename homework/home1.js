// Membuat array kosong untuk menampung nilai acak
let nilaiAcak = [];

// Mengisi array dengan 100 nilai acak antara 1 dan 50
for (let i = 0; i < 100; i++) {
  nilaiAcak.push(Math.floor(Math.random() * 50) + 1);
}

// Menampilkan array hasil
console.log(nilaiAcak);