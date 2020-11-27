    $(function() {
   
    /* fixed header */
    
   let header = $("#header");
   let intro = $("#intro");
   let introh = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   let navToggle = $("#navToggle");
   let nav =  $("#nav");
    
    checkScroll(scrollPos, introh);
    
   $(window).on("scroll  resize", function() {
        introh = intro.innerHeight();       
        scrollPos = $(this).scrollTop();
        
        console.log(introh)
       
        checkScroll(scrollPos, introh);
            
   });
    
    function checkScroll(scrollPos, introh) {
        if( scrollPos > introh ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
    
    /* smooth scroll */
    
    $("[data-scroll]").on("click", function(event) {
       
       event.preventDefault();
        
       let elementId = $(this).data('scroll');
       
       let elementOffset = $(elementId).offset().top;
        
       console.log(elementOffset);
        
        nav.removeClass("show");
    
       $("html, body").animate({
           
       scrollTop: elementOffset - 80
       }, 700);
        
    });
    
    navToggle.on("click", function(event) {
        
        event.preventDefault();
        
        nav.toggleClass("show");
        
    }); 
    
    /* reviews https://kenwheeler.github.io/slick/ */
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: false,
          dots: true
    });
});