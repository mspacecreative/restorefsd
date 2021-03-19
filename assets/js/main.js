(function( root, $, undefined ) {
	"use strict";

	$(function () {

		var 
		menuOverlay = $('.menuOverlay'),
		hamburgerIcon = $('.hamburger'),
		header = $('header'),
		menuItem = $('.menuInner li a'),
		closeButton = $('.closeModalButton'),
		closeSearchButton = $('.closeSearchButton'),
		searchBar = $('.search_container'),
		modalOverlayDiv = '<div class="modal_overlay"></div>',
		headerHeight = $('header').outerHeight(),
		heroSection = $('.hero');
		
		function addOverlay() {
			if ($('.show').length) {
				$(modalOverlayDiv).hide().prependTo('body').fadeIn();
			}
		}
		
		function removeOverlayButtons() {
			$('html').removeClass('fixed');
			menuOverlay.removeClass('show');
			$('.modal_overlay').fadeOut('normal', function() {
				$(this).remove();
			});
		}
		
		function removeOverlay() {
			$('body').on('click', '.modal_overlay', function() {
				$('html').removeClass('fixed');
				$(this).siblings(searchBar, menuOverlay).removeClass('show');
				$(this).fadeOut('normal', function() {
					$(this).remove();
				});
			});
		}
		
		function toggleMenu() {
			header.toggleClass('is-active');
			$('html').addClass('fixed');
			menuOverlay.toggleClass('show');
			addOverlay();
		}
		
		menuItem.click(function() {
			menuOverlay.removeClass('show');
			$('.modal_overlay').fadeOut('normal', function() {
				$(this).remove();
			});
			$('html').removeClass('fixed');
			header.removeClass('is-active');
		});
		
		$('body').on('click', '#our-nominees .boxed', function() {
			$('body').prepend('<div class="modal"></div>').addClass('modal_open');
			$('.modal_open').children('.modal').fadeIn();
			$('html').addClass('fixed');
			$(this).parent().next().css('display', 'flex').hide().fadeIn();
			$(this).parent().next().find('.modal_inner').addClass('visible');
		});
		
		var $document = $(document);
		//viewportHeight = $('.splash').height() / 2;
		$document.scroll(function() {
			if ($document.scrollTop() >= 50) {
				$('header').addClass('white-bg');
			} else {
				$('header').removeClass('white-bg');
			}
		});
		
		/*
		$('.modal_inner').map(function() {
			$(this).prepend('<button class="closeModalButton"><span>&nbsp;</span><span>&nbsp;</span></button>');
		});
		*/
		
		$('body').on('click', '.modal_inner .closeModalButton', function() {
			$('html').removeClass('fixed');
			$(this).parent().removeClass('visible');
			$(this).parent().parent().fadeOut();
			$('.modal').fadeOut('normal', function() {
				$(this).remove();
			});
		});
		
		$('body').on('click', '.modal', function() {
			$('html').removeClass('fixed');
			$('.modal_container').fadeOut();
			$('.modal_inner').removeClass('visible');
			$(this).fadeOut('normal', function() {
				$(this).remove();
			});
		});
		
		// ACCORDION FUNCTIONALITY
		$('.tabRow > a').click(function(e) {
			e.preventDefault();
			$(this).next().slideToggle();
			$(this).toggleClass('rotate');
		});
		
		// SMOOTH SCROLL TO ANCHORS
		$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					//setTimeout(function(){	
					$('html,body').animate({
						scrollTop: target.offset().top
					},
					500);
					return false;
				}
			}
		});
		
		// HIDE/SHOW HEADER ON SCROLL
		var lastScrollTop = 0;
		var delta = 5;
	    $(window).on('scroll', function() {
	        var st = $(this).scrollTop();
	        if ( st < lastScrollTop )  {
	            $('header').addClass('up').removeClass('down');
	        }
	        else if( st > lastScrollTop && st > delta ) {
	            $('header').addClass('down').removeClass('up');
	        }
	        lastScrollTop = st;
	    });
		
		// MOBILE MENU
		hamburgerIcon.click(function() {
			toggleMenu();
		});
		// CLOSE MENU BUTTON
		closeButton.click(function() {
			removeOverlayButtons();
		});
		
		removeOverlay();
		
		// ESCAPE KEY CLICK TO ESCAPE
		$(document).keyup(function(e) {
			if (e.key === "Escape") { // escape key maps to keycode `27`
				menuOverlay.removeClass('show');
				searchBar.removeClass('show');
				$('html').removeClass('fixed');
				$('.modal_overlay').fadeOut('normal', function() {
					$(this).remove();
				});
				$('.modal').fadeOut('normal', function() {
					$(this).remove();
				});
				$('.modal_container').fadeOut();
				$('.modal_inner').removeClass('visible');
			}
		});
		
	});

} ( this, jQuery ));