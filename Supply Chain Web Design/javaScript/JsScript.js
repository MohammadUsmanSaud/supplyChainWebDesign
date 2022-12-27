
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        paurseOnHover:true,
        margin:20,
        nav:true,
        dots:false,
        navText:["<img src=/images/circle-left-solid.svg class=img-fluid></img>","<img src=/images/circle-right-solid.svg class=img-fluid></img>"],
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
}




