// Konfigurasi menang: 
// key = nomor spin ke berapa, value = multiplier hadiah di spin itu
// Contoh: di spin ke 7 menang ×10
const winSettings = {
	10: 10,
    20: 2,
  // bisa tambah lagi sesuai kebutuhan
};

// Fungsi cek menang: return multiplier kalau menang, 0 kalau kalah
function checkWin(spinKe) {
  if (winSettings.hasOwnProperty(spinKe)) {
    return winSettings[spinKe];
  }
  return 0;
}
