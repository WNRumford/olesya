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

// mid
function openModalMid() {
  document.getElementById('myModalMid').style.display = "block";
}

function closeModalMid() {
  document.getElementById('myModalMid').style.display = "none";
}

var slideIndexMid = 1;
showDivsMid(slideIndexMid);


function plusDivsMid(n) {
  showDivsDecor(slideIndexMid += n);
}

function currentDivMid(n) {
  showDivsDecor(slideIndexMid = n);
}

function showDivsMid(n) {
  var i;
  var x = document.getElementsByClassName("mid");
  var dots = document.getElementsByClassName("bmid");
  if (n > x.length) {slideIndexMid = 1}
  if (n < 1) {slideIndexMid = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-yellow", "");

  }
  x[slideIndexMid-1].style.display = "block";
  dots[slideIndexMid-1].className += " w3-yellow";
}

// Met
function openModalMet() {
  document.getElementById('myModalMet').style.display = "block";
}

function closeModalMet() {
  document.getElementById('myModalMet').style.display = "none";
}

var slideIndexMet = 1;
showDivsMet(slideIndexMet);


function plusDivsMet(n) {
  showDivsMet(slideIndexMet += n);
}

function currentDivMet(n) {
  showDivsMet(slideIndexMet = n);
}

function showDivsMet(n) {
  var i;
  var x = document.getElementsByClassName("met");
  var dots = document.getElementsByClassName("bmet");
  if (n > x.length) {slideIndexMet = 1}
  if (n < 1) {slideIndexMet = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-yellow", "");

  }
  x[slideIndexMet-1].style.display = "block";
  dots[slideIndexMet-1].className += " w3-yellow";
}

// Trim

function openModalTrim() {
  document.getElementById('myModalTrim').style.display = "block";
}

function closeModalTrim() {
  document.getElementById('myModalTrim').style.display = "none";
}

var slideIndexTrim = 1;
showDivsTrim(slideIndexTrim);


function plusDivsTrim(n) {
  showDivsTrim(slideIndexTrim += n);
}

function currentDivTrim(n) {
  showDivsTrim(slideIndexTrim = n);
}

function showDivsTrim(n) {
  var i;
  var x = document.getElementsByClassName("trim");
  var dots = document.getElementsByClassName("btrim");
  if (n > x.length) {slideIndexTrim = 1}
  if (n < 1) {slideIndexTrim = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-yellow", "");

  }
  x[slideIndexTrim-1].style.display = "block";
  dots[slideIndexTrim-1].className += " w3-yellow";
}