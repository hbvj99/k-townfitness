/*external javascript*/
var slideIndex = 0;
carousel();
/*slide index set to zero, slideindex increased with 2 seconds each for tslide class and displayed inside block*/
function carousel() {
  var i;
  var x = document.getElementsByClassName("islider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}
