// mixitUp 
var mixer = mixitup('.grid-portfolio-container');

// scrollify
// $(function() {
//      $.scrollify({
//        section : ".scrollify",
//      });
//    });


//  Hamburger menu
function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

    // smooth scroll

$(function(){
    $('.menu-item li a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    })
});