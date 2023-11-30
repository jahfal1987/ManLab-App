// Tambahkan event listener untuk menu navigasi
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".navigation ul li a");
    var tabContents = document.querySelectorAll(".tab-content");
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        var target = event.target.getAttribute("href").substring(1);
        showTab(target);
      });
    }
  
    function showTab(tab) {
      for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
      }
  
      document.getElementById(tab).style.display = "block";
    }
  
    // Default: tampilkan tab pertama
    showTab("laporan");

  });

  function showEquipmentReport() {
    var equipmentReport = document.getElementById("daftarPeralatannLab");
    var roomUsageReport = document.getElementById("daftarPenggunaanLab");

    // Menampilkan laporan daftar peralatan
    equipmentReport.style.display = "block";

    // Menyembunyikan laporan penggunaan ruangan
    roomUsageReport.style.display = "none";
  }

  function showRoomUsageReport() {
    var equipmentReport = document.getElementById("daftarPeralatannLab");
    var roomUsageReport = document.getElementById("daftarPenggunaanLab");

    // Menampilkan laporan penggunaan ruangan
    roomUsageReport.style.display = "block";

    // Menyembunyikan laporan daftar peralatan
    equipmentReport.style.display = "none";
  }

  function cetakLaporan() {
    // Membuat objek dokumen PDF menggunakan jsPDF
    var doc = new jsPDF();
  
    // Menambahkan konten laporan ke dokumen PDF
    doc.text("Isi laporan", 10, 10);
  
    // Menghasilkan file PDF dalam bentuk data URL
    var pdfDataUri = doc.output('datauristring');
  
    // Membuat elemen <a> untuk men-download file PDF
    var link = document.createElement('a');
    link.href = pdfDataUri;
    link.download = 'laporan.pdf';
  
    // Mengklik elemen <a> untuk memulai unduhan
    link.click();
  }
  