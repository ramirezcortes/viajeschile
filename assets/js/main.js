var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


    
$(document).ready(function() {
    $('#titlecard1, #titlecard2, #titlecard3').click(function(){
        $('#textcard1, #textcard2, #textcard3' ).toggle(1000,function() {

        });
    });
});


$(document).on("scroll", function(){
    var desplazamientoActual = $(document).scrollTop();
    var controlArriba = $("#irarriba");
    
    if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
        controlArriba.fadeIn(500);
    }
    if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
        controlArriba.fadeOut(500);
    }
});

$("#irarriba a").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1000); 
});


 $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 900){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(33, 37, 41, 0.7)');
    }
});



