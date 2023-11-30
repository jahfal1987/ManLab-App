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
    showTab("pinjam-peralatan");
  });
  