$(function () {
    
      //Preloader
    $(window).on('load', function () {
        var preloader = $('#preloader');
        preloader.delay(500).fadeOut(1000);

    });
    
    //Main Slider
    
    $('.main_slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });

    // Venobox js for gallery page
    $('.venobox').venobox({
        framewidth: '1000px',  
        border: '10px', 
        titleattr: 'data-title'
    }); 
    
    $("#ddd").validate({
        // Specify the validation rules
        rules: {
            name: "required",
        },
        // Specify the validation error messages
        messages: {
            name: "আপনি আপনার নাম লিখেন নি!", 
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    
    
    
});
