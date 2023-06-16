const express = require('express');
const axios = require('axios');
const app = express();

// Daftar URL yang akan dipantau
const urls = [
  'https://www.facebook.com',
  'https://www.google.com',
  'http://makaryoserver.com:8080/xyz.html'
];

// Fungsi untuk memeriksa status tiap URL
async function checkURL(url) {
  try {
    const response = await axios.get(url);
    console.log(`${url} is up. Status: ${response.status}`);
  } catch (error) {
    console.error(`${url} is down. Error: ${error.message}`);
  }
}

// Fungsi untuk memeriksa status semua URL
function checkAllURLs() {
  urls.forEach((url) => {
    checkURL(url);
  });
}

// Memeriksa status URL setiap 5 detik
setInterval(checkAllURLs, 5000);

// Menjalankan server Express pada port 
app.listen(3050, () => {
  console.log('Server started...');
});
