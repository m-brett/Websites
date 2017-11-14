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
var height = window.innerHeight;
var n;

$(window).scroll(function() {
    if ($(this).width() > 784) {
            if ($(this).scrollTop() > height*0.9) {
                var n = 1;
            }
            if ($(this).scrollTop() > height*1.9) {
                var n = 2;
            }
            if ($(this).scrollTop() >height*2.9) {
                var n = 3;
            }
            if ($(this).scrollTop() > height*3.9) {
                var n = 4;
            }
            if ($(this).scrollTop() > height*4.5) {
                var n = 5;
            }
    $(`#head${n}`).css('display', 'block');
    $(`#pic${n}`).css('display', 'block');
    }
});


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