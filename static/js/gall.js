// decor
function openModalDecor() {
  document.getElementById('myModalDecor').style.display = "block";
}

function closeModalDecor() {
  document.getElementById('myModalDecor').style.display = "none";
}

var slideIndexDecor = 1;
showDivsDecor(slideIndexDecor);


function plusDivsDecor(n) {
  showDivsDecor(slideIndexDecor += n);
}

function currentDivDecor(n) {
  showDivsDecor(slideIndexDecor = n);
}

function showDivsDecor(n) {
  var i;
  var x = document.getElementsByClassName("dec");
  var dots = document.getElementsByClassName("bdecor");
  if (n > x.length) {slideIndexDecor = 1}
  if (n < 1) {slideIndexDecor = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-yellow", "");

  }
  x[slideIndexDecor-1].style.display = "block";
  dots[slideIndexDecor-1].className += " w3-yellow";
}