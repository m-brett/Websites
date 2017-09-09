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
console.log(height);

$(window).scroll(function() {
    if ($(this).width() > 784) {
            if ($(this).scrollTop() > height*0.9) {
                 $('#head1').css('display', 'block');
                 $('#pic1').css('display', 'block');
            }
            if ($(this).scrollTop() > height*1.9) {
                 $('#head2').css('display', 'block');
                 $('#pic2').css('display', 'block');
            }
            if ($(this).scrollTop() >height*2.9) {
                 $('#head3').css('display', 'block');
                 $('#pic3').css('display', 'block');
            }
            if ($(this).scrollTop() > height*3.9) {
                 $('#head4').css('display', 'block');
                 $('#pic4').css('display', 'block');
            }
            if ($(this).scrollTop() > height*4.5) {
                 $('#head5').css('display', 'block');
                 $('#pic5').css('display', 'block');
            }
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