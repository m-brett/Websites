/* Smooth Scroll between anchor linkes */
$(window).on('load', function() {
    $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
});

/* Starting animation based on user position on page */
/*
var oneView = window.innerHeight;
console.log(innerHeight);

window.onscroll = function(){
  if (document.body.scrollTop > oneView) {
    console.log('Here');
  }
}*/

/* Control opening and closing of side panel */
function openNav(num) {
    var sidebar = document.getElementById("side_bar"+num);
    var menu =  document.getElementById("menu"+num);
  
    /* mobile screen side panels */
    if (window.innerWidth <= 784 ){
      sidebar.style.width = "100%";
      sidebar.style.height = "50vh";
      menu.style.transition = "margin-left 0.5s";
      
    /* tablet and larger screen side panel */
    } else if (window.innerWidth >= 785 ) {
      sidebar.style.width = "300px";
      sidebar.style.height = "100vh";
      menu.style.marginLeft = "300px";
      menu.style.transition = "margin-left 0.5s";
    }
}

function closeNav(num) {
    document.getElementById("side_bar"+num).style.width = "0";
    document.getElementById("menu"+num).style.marginLeft= "0";
}