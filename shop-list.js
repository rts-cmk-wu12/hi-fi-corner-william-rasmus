function myFunction() {
  // genter 'myDropdown' og skifter mellem at vise og skjule dropdown-menuen
  document.getElementById("myDropdown").classList.toggle("show");
}

// går der klikkes et sted på vinduet der ikke er på dropdown-knappen
window.onclick = function(event) {
  // gjekker, om det klikbare element er 'dropbtn'
  if (!event.target.matches('.dropbtn')) {
      // går alle elementer med 'dropdown-content'
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      // går gennem alle dropdown-elementer for at lukke dem hvis de er åbne
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          // Hvis dropdown-elementet er vist skjules det ved at fjerne klassen 'show'
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
