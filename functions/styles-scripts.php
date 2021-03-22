<?php

// Load HTML5 Blank styles
function fsd_styles() {
    wp_register_style( 'main-css', get_template_directory_uri() . '/assets/css/style.css', array(), null );
	wp_enqueue_style( 'main-css' );
	
	wp_register_script('modernizr', get_template_directory_uri() . '/assets/js/vendor/modernizr-2.6.2.min.js', array('jquery'), null );
	wp_enqueue_script('modernizr');
	
	wp_register_script('bootstrapjs', get_template_directory_uri() . '/assets/js/vendor/bootstrap-3.1.1.min.js', array('jquery'), null );
	wp_enqueue_script('bootstrapjs');
	
	wp_register_style( 'fontawesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), null );
	wp_enqueue_style( 'fontawesome' );
    
    //wp_register_script('aos-script', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js', array('jquery'), null, true);
	//wp_enqueue_script('aos-script');
	
	//wp_register_script('jsaddressscript', get_template_directory_uri() . '/assets/js/vendor/address.js', array('jquery'), null, true);
    //wp_enqueue_script('jsaddressscript');
	
	wp_register_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), null, true);
	wp_enqueue_script( 'main-js' );
}
add_action( 'wp_enqueue_scripts', 'fsd_styles' ); // Add Theme Stylesheet