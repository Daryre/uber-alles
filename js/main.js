$(document).ready(function(){
  //Menú overlay
    $('.nav-left--icon').click(function(){
      $('.overlay-menu').toggleClass('menu-overlay-active');
      $(this).toggleClass('change btn--close-menu');
    });

    $('.btn--close-menu').click(function(){
      $('.nav-left--icon').removeClass('btn--close-menu');
    });

});

$(document).ready(function(){
  
//   // Smooth scrolling to any internal tags
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top - 80
//         }, 500);
//         return false;
//       }
//     }
//   });
  
  var offset = 100,
    scroll_top_duration = 700,
    $back_to_top = $('.btn-top'),
    $thedial = $('.dial'),
    $progress_bar = $('.progress-bar');
  
  // Initialize the progress dial
    // $thedial.knob({
    //   'min' : 0,
    //   'max' : 100,
    //   'width' : 50,
    //   'height' : 50,
    //   'fgColor' : 'rgba(77, 91, 109, 0.8)',
    //   'skin' : 'tron',
    //   'thickness' : .2,
    //   'displayInput' : false,
    //   'displayPreview' : false,
    //   'readOnly' : true
    // });

  $(window).scroll(function(){
    
    // Hide or show the progress bar
    ( $(this).scrollTop() > offset ) ? $progress_bar.addClass('is-visible') : $progress_bar.removeClass('is-visible');
    
     // Get the window position and set it to a variale
      var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();
      scrollPercent = (s / (d-c)) * 100;

      // Bind the window position to the progress dial
      $('.dial').val(scrollPercent).change();
      
      if (s > 0 ) {
         $('header').addClass('scrolled fade header--different');
     }

      if (s <= 0 ) {
        $('header').removeClass('scrolled fade header--different');
      }    
     
    });

  //smooth scroll to top
  $back_to_top.on('click', function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
});

//Carga por ajax
$(document).ready(function(){
   if($('.active-nov').is('*')){
      $("#destino").load("novedades.html")
   };

   $('#btn-nov').click(function(event){
    event.preventDefault();
    $('#destino').load('index.html');
   });

   $('#btn-ofert').click(function(event){
      event.preventDefault();
      $('#destino').load('ofertas.html');
   });

   $('#btn-ped').click(function(event){
      event.preventDefault();
      $('#destino').load('pedidos.html');
   });

    $('#btn-categ').click(function(event){
      event.preventDefault();
      $('#destino').load('categorias.html');
   });
    $('#btn-ay').click(function(event){
      event.preventDefault();
      $('#destino').load('ayuda.html');
   });

   $('.nav-right li > ul li').click(function(){
    $('li').removeClass("active");
    $(this).addClass("active");
  });
})