$(document).ready(function(){
    //For Gravity Forms Post Registration Ajax
    // $(document).bind('gform_confirmation_loaded', function(){
    //     postRegistration();
	// });

	//For Gravity Forms Post Registration non-ajax
	if($('.gform_confirmation_message')[0]) {
		postRegistration();
	}

    //Example Slick Slider config. Works for most use cases.
    /* $('.slick-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true 
    }); */

    //Example Parallax config
    // itemParallax('.class', 1);

    //Example Alert
    /* Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    ); */
})

$('.mobile-nav-button').on('click', function(){
    $(this).toggleClass('active-nav');
    $('.main-navigation').toggleClass('active-main');
});

$(document).on('click', '.active-main', 'a', function(){
    $('.mobile-nav-button').removeClass('active-nav');
    $(this).removeClass('active-main');
})

$('.shadow-box .close-box').on('click', function(){
    $(this).parent().parent().addClass('hide');
})

function postRegistration(){
    //For Facebook remarketing if used
	//fbq('track', 'CompleteRegistration');
	
	//Default Custom Event for GTM
	//dataLayer.push({'event': 'postRegistration'})

	//Example Alert
    /* Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    ); */
}

function itemParallax(itemClass, scrollSpeed){
    new Rellax(itemClass, {
        speed: scrollSpeed,
        center: true
    })
}

//DEPRECATED - Use href="#" instead of the below - code in smooth-scroll.js
/* function scrollTo(element, targetElement){
    $(element).on('click', function(){
        $('html, body').animate({
            scrollTop: $(targetElement).offset().top
        }, 500);
    })
} */