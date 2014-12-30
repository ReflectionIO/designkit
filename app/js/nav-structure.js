(function($) {
	
	function initialise() {
		initMainNavCollapsibleLists();
		initLeftPanelInteraction();
		initGlobalFormInteractions();
		initRightPanelInteraction();
		initCustomScrollbar();
	};

	function initLeftPanelInteraction() {

		$('.js-hamburger-button').on("click", function(){
			$(this).toggleClass('is-selected');
			if($('body').hasClass('panel-left-open')) {
				$('.panel-left').addClass('is-animating-out');
				$('body').removeClass('panel-left-open');
				window.setTimeout(function(){
					$('.panel-left').removeClass('is-animating-out');
				}, 140);
			} else {
				$('body').toggleClass('panel-left-open');
				$('.panel-left').addClass('is-animating-in');
				window.setTimeout(function(){
					$('.panel-left').removeClass('is-animating-in');
				}, 140);
			}
		});

		var topLevelNavItems = $('.js-main-nav > ul > li');
		topLevelNavItems.on("click", function(){
			if(!$(this).hasClass("js-is-collapsible")) {
				topLevelNavItems.removeClass('is-selected');
				$(this).addClass('is-selected');
				$('.js-main-nav > ul > li.js-is-collapsible.is-open > a').trigger("click");
			}
		});

		$('.js-main-nav > ul > li.js-is-collapsible > a').on("click", function(e){
			e.preventDefault();
			var collapsibleContainer = $(this).parent('.js-is-collapsible');
			var collapsibleList = $(this).next('ul');
			if(collapsibleContainer.hasClass('is-open')) {
				collapsibleList.css("margin-top", -collapsibleList.height());
				collapsibleContainer.removeClass('is-open');
				collapsibleContainer.removeClass('is-selected');
			}
			else {
				collapsibleList.css("margin-top", 0);
				collapsibleContainer.addClass('is-open');
				collapsibleContainer.addClass('is-selected');
				collapsibleContainer.siblings().removeClass('is-selected');
			}
		});

		if($(window).width() <= 960) {
			$('.js-hamburger-button').removeClass('is-selected');
			$('body').removeClass('panel-left-open');
		}
	}

	function initMainNavCollapsibleLists() {

		// Collapse all menu items if not open
		var topLevelNavItems = $('.js-main-nav > ul > li');	
		topLevelNavItems.each(function(){
			var totalHeight = 0;
			$(this).find('li.has-child').each(function(){
				var collapsibleList = $(this).children('ul');
				collapsibleList.css("margin-top", -collapsibleList.height());
				totalHeight += collapsibleList.height();
			});
			var collapsibleList = $(this).children('ul');
			collapsibleList.css("margin-top", -collapsibleList.height());
		});

		$('.js-main-nav > ul > li ul li.js-is-collapsible a').on("click", function(e){
			e.preventDefault();
			var collapsibleContainer = $(this).parent('.js-is-collapsible');
			var collapsibleList = $(this).next('ul');
			if(collapsibleContainer.hasClass('is-open')) {
				collapsibleList.css("margin-top", -collapsibleList.height());
				collapsibleContainer.removeClass('is-open');
			}
			else {
				collapsibleList.css("margin-top", 0);
				collapsibleContainer.addClass('is-open');
			}
		});

		window.setTimeout(function() {
			topLevelNavItems.each(function(){
				if($(this).hasClass('is-selected')) {
					$(this).children("a").trigger("click");
					$(this).find("li.is-selected.js-is-collapsible > a").trigger("click");
				}
			});
		}, 100);
	}

	function initGlobalFormInteractions() {
		$('.form-field input[type=email], .form-field input[type=password], .form-field input[type=text]').each(function(){
			var $this = $(this);
			var $thisParent = $this.parent('.form-field');
			if(!$(this).val().length) {
				$thisParent.addClass('is-closed');
			}
			$this.on("focus", function(){
				$thisParent.removeClass('is-closed');
			});
			$this.on("blur", function(){
				if(!$this.val().length) {
					$thisParent.addClass('is-closed');
				}
			});
		});
	}

	function initRightPanelInteraction() {
		$('.actions-group').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.panel-right-container').toggleClass('is-showing');
				$('.actions-group').toggleClass('is-on');
				$('body').toggleClass('no-scroll');
			}
		});
		$('.link-log-in').on("click", function(e) {
			e.preventDefault();
			if($('.panel-right-container').hasClass('is-showing')) {
				$('.panel-right-container').addClass('is-animating-out');
				$('.panel-right-container').removeClass('is-showing');
				window.setTimeout(function(){
					$('.panel-right-container').removeClass('is-animating-out');
				}, 180);
			}
			else {
				$('.panel-right-container').addClass('is-animating-in');
				$('.panel-right-container').addClass('is-showing');
				window.setTimeout(function(){
					$('.panel-right-container').removeClass('is-animating-in');
				}, 240);
			}
			$('body').toggleClass('no-scroll');
		});
		$('.panel-right__overlay').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.actions-group').trigger("click");
			}
			else {
				$('.link-log-in').trigger("click");
			}
		});
	}

	function initCustomScrollbar() {
    $(".js-custom-scrollbar").mCustomScrollbar({
    	scrollInertia: 200
    });
	}

	$(document).ready(function(){
		initialise();
	});

})(jQuery);