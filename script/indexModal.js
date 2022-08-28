var modal = document.getElementById("indexModal");

var btn = document.getElementById("btnexpress");

var span = document.getElementsByClassName("close")[0];

a.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}