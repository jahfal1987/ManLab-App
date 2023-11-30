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
    showTab("kelola-peralatan");

  });

  // Fungsi untuk menambahkan peralatan baru
function tambahPeralatan() {
    var table = document.getElementById("daftarPeralatanLab");
    var newRow = table.insertRow(table.rows.length);
  
    var barangCell = newRow.insertCell(0);
    var merekCell = newRow.insertCell(1);
    var nomorSeriCell = newRow.insertCell(2);
    var jumlahCell = newRow.insertCell(3);
    var statusCell = newRow.insertCell(4);
    var kondisiCell = newRow.insertCell(5);
    var aksiCell = newRow.insertCell(6);
  
    barangCell.innerHTML = "<input type='text' id='inputBarang'>";
    merekCell.innerHTML = "<input type='text' id='inputMerek'>";
    nomorSeriCell.innerHTML = "<input type='text' id='inputNomorSeri'>";
    jumlahCell.innerHTML = "<input type='number' id='inputJumlah'>";
    statusCell.innerHTML = "<input type='text' id='inputStatus'>";
    kondisiCell.innerHTML = "<input type='text' id='inputKondisi'>";
    aksiCell.innerHTML =
      "<button class='btn-edit' onclick='editRow(this)'>Edit</button>" +
      "<button class='btn-hapus' onclick='hapusRow(this)'>Hapus</button>";
  }
  
  // Fungsi untuk menghapus baris peralatan
  function hapusRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Fungsi untuk mengedit baris peralatan
  function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
  
    var inputBarang = document.createElement("input");
    inputBarang.type = "text";
    inputBarang.value = cells[0].innerHTML;
    cells[0].innerHTML = "";
    cells[0].appendChild(inputBarang);
  
    var inputMerek = document.createElement("input");
    inputMerek.type = "text";
    inputMerek.value = cells[1].innerHTML;
    cells[1].innerHTML = "";
    cells[1].appendChild(inputMerek);
  
    var inputNomorSeri = document.createElement("input");
    inputNomorSeri.type = "text";
    inputNomorSeri.value = cells[2].innerHTML;
    cells[2].innerHTML = "";
    cells[2].appendChild(inputNomorSeri);
  
    var inputJumlah = document.createElement("input");
    inputJumlah.type = "number";
    inputJumlah.value = cells[3].innerHTML;
    cells[3].innerHTML = "";
    cells[3].appendChild(inputJumlah);
  
    var inputStatus = document.createElement("input");
    inputStatus.type = "text";
    inputStatus.value = cells[4].innerHTML;
    cells[4].innerHTML = "";
    cells[4].appendChild(inputStatus);
  
    var inputKondisi = document.createElement("input");
    inputKondisi.type = "text";
    inputKondisi.value = cells[5].innerHTML;
    cells[5].innerHTML = "";
    cells[5].appendChild(inputKondisi);
  
    button.innerHTML = "Simpan";
    button.setAttribute("onclick", "simpanRow(this)");
  }
  
  // Fungsi untuk menyimpan perubahan pada baris peralatan yang diubah
  function simpanRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
  
    var inputBarang = cells[0].getElementsByTagName("input")[0];
    cells[0].innerHTML = inputBarang.value;
  
    var inputMerek = cells[1].getElementsByTagName("input")[0];
    cells[1].innerHTML = inputMerek.value;
  
    var inputNomorSeri = cells[2].getElementsByTagName("input")[0];
    cells[2].innerHTML = inputNomorSeri.value;
  
    var inputJumlah = cells[3].getElementsByTagName("input")[0];
    cells[3].innerHTML = inputJumlah.value;
  
    var inputStatus = cells[4].getElementsByTagName("input")[0];
    cells[4].innerHTML = inputStatus.value;
  
    var inputKondisi = cells[5].getElementsByTagName("input")[0];
    cells[5].innerHTML = inputKondisi.value;
  
    button.innerHTML = "Edit";
    button.setAttribute("onclick", "editRow(this)");
  }

  // JavaScript code for the Dashboard Admin

// Show the selected tab and hide others
function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
}

// Handle tab navigation
function navigateTab(event, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  tabLinks = document.getElementsByTagName('a');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}


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






  

  

  
  