(function($) {

	initMainNavCollapsibleLists();
	initLeftPanelInteraction();

	function initLeftPanelInteraction() {

		$('.js-hamburger-button').on("click", function(){
			$(this).toggleClass('is-selected');
			$('.l-page-container').toggleClass('panel-left-open');
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
			collapsibleList.css("margin-top", -totalHeight);
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
					console.log($(this).find("li.is-selected.js-is-collapsible > a"));
					$(this).find("li.is-selected.js-is-collapsible > a").trigger("click");
				}
			});
		}, 500);
	}

})(jQuery);