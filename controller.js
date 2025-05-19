// Settingan menang manual
const winSettings = {
  10: 10,
  20: 2,
  // bisa tambah lagi manual di sini
};

// Tambahkan auto win setiap 10 spin dengan ×2, tanpa menimpa yang manual
function generateAutoWinSettings(jumlahSpin, intervalMenang = 10, multiplier = 2) {
  for (let i = intervalMenang; i <= jumlahSpin; i += intervalMenang) {
    if (!winSettings.hasOwnProperty(i)) {
      winSettings[i] = multiplier;
    }
  }
}

// Contoh generate auto sampai 100 spin
generateAutoWinSettings(100);

// Fungsi cek menang
function checkWin(spinKe) {
  return winSettings[spinKe] || 0;
}
