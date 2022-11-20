$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            992:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true,
            }}
    });
  });

  window.onscroll=()=>{
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector(".my-nav").style.display = "block";
      } else {
        document.querySelector(".my-nav").style.display = "none";
      }
  }

 