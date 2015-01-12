/* APPLICATION JAVASCRIPT
// Use prototypal inheritance to set functions relevant to the page to encapsulate functions (page objects below)
// Use functions as variables (component objects below) to modularise and encapsulate component functionality


/* PAGE OBJECTS FOR TEMPLATES */

// Page object
	var Page = function() {
		this.setIEClass();
		this.setMainContentWidthForIE();
		this.initBrowserPulling();
		new LeftPanelAndHamburger();
		new FormInteractions();
		new RightPanel();
		this.customScrollbars();
		new SearchOverlay();
	};

	Page.prototype.setIEClass = function() {
		instance = this;
		this.ieVersion = this.detectIE();
		if(this.ieVersion) {
			$('body').addClass('is-ie ie' + this.ieVersion);
		}
	};

	Page.prototype.detectIE = function() {
	  var ua = window.navigator.userAgent;
	  var msie = ua.indexOf('MSIE ');
	  var trident = ua.indexOf('Trident/');

	  if (msie > 0) {
	      // IE 10 or older => return version number
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  if (trident > 0) {
	      // IE 11 (or newer) => return version number
	      var rv = ua.indexOf('rv:');
	      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }

	  // other browser
	  return false;
	};

	Page.prototype.customScrollbars = function() {
		// load custom scroll bars for everything but IE9/10
		if (/*@cc_on!@*/true) {
			var script = document.createElement('script');
		  script.type = 'text/javascript';
		  script.src = 'js/vendor/jquery.mCustomScrollbar.concat.min.js';
	  	$('#js-appendScriptsContainer').append(script);
		}

		if($('.ie10').length == 0 && $('.ie8').length == 0) {
			$(".js-custom-scrollbar").mCustomScrollbar({
	    	scrollInertia: 200
	    });
		}
	};

	Page.prototype.setMainContentWidthForIE = function() {
		// calc(100%-220px) CSS does work for IE to set the width, but the width transition effect doesn't work for calc'd width in IE
		// calculate the width for IE instead using JavaScript
		if($('.is-ie').length > 0) {
			if($(window).width() > 960) {
				if($('.panel-left-open').length > 0) {
					var mainContentElement = $('.is-ie .l-main');
					mainContentElement.width($(window).width() - 220);
				}
				else {
					$('.is-ie .l-main').width("100%");
				}
			}
			else {
				$('.is-ie .l-main').width("100%");
			}
		}
	};

	Page.prototype.initBrowserPulling = function() {
		$(window).resize(function () {
			instance.setMainContentWidthForIE();
	  });
	};

/* COMPONENT OBJECTS */
	var LeftPanelAndHamburger = function() {

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


		// Hamburger/left panel interaction
		$('.js-hamburger-button').on("click", function(){
			$(this).toggleClass('is-selected');
			if($('body').hasClass('panel-left-open')) {
				$('.panel-left').addClass('is-animating-out');
				$('body').removeClass('panel-left-open');
				instance.setMainContentWidthForIE();
				window.setTimeout(function(){
					$('.panel-left').removeClass('is-animating-out'); // class for motion blur effect
				}, 140);
			} else {
				$('body').toggleClass('panel-left-open');
				$('.panel-left').addClass('is-animating-in');
				instance.setMainContentWidthForIE();
				window.setTimeout(function(){
					$('.panel-left').removeClass('is-animating-in'); // class for motion blur effect
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
	};


	var FormInteractions = function() {
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
	};


	var RightPanel = function() {
		$('.actions-group').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.panel-right-container').toggleClass('is-showing');
				$('.actions-group').toggleClass('is-on');
				$('body').toggleClass('no-scroll');
				$('.l-page-container').toggleClass('is-blurred');
				$('.panel-left').toggleClass('is-blurred');
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
			$('.l-page-container').toggleClass('is-blurred');
			$('.panel-left').toggleClass('is-blurred');
		});
		$('.panel-right__overlay').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.actions-group').trigger("click");
			}
			else {
				$('.link-log-in').trigger("click");
			}
		});
	};


	var SearchOverlay = function() {
		var instance = this;
		var searchOpenLink = $('.js-open-search'),
				searchCancelLink = $('.js-close-search');
		if(searchOpenLink.length) {
			searchOpenLink.click(function(e){
				e.preventDefault();
				instance.toggleSearchView();
			});
			searchCancelLink.click(function(e){
				e.preventDefault();
				instance.toggleSearchView();
				$('.js-get-items').blur();
			});
		}

		this.initSearch();
	};

	SearchOverlay.prototype.toggleSearchView = function() {
		$('.search-overlay').toggleClass('is-showing');
		$('.search-container').toggleClass('is-showing');
		$('.l-page-container').toggleClass('is-blurred-heavy');
		$('.panel-left').toggleClass('is-blurred-heavy');
		$('html').toggleClass('no-scroll');
		$('.search__input-search').select();
	};

	SearchOverlay.prototype.initSearch = function() {
		// get mock data from file - this will contain results when implemented so shouldn't need JS regex below
		var data;
		$.ajax({
        url: "js/search-data.json",
        async: true,
        dataType: "json",
        success: function (items){
          data = items;
        }
    });
		
		var inputValue,
				$appsList = $('.js-item-results--apps ul'),
				$devList = $('.js-item-results--developers ul');

		// on key up loop through object and search - for implentation, amend to call service to return results in json and display
		$('.js-get-items').keyup(function(){
			searchResultsApps = [];
			searchResultsDevs = [];
			inputValueCaseInsensitiveRegEx = new RegExp($(this).val(), "i");

			// if found add to result array
			for(var i = 0; i < data.items.length; i++) {
				if(data.items[i].name.search(inputValueCaseInsensitiveRegEx) > -1) {
					searchResultsApps.push(data.items[i]);
				}
				if(data.items[i].creatorName.search(inputValueCaseInsensitiveRegEx) > -1) {
					searchResultsDevs.push(data.items[i]);
				}
			}
			
			// output results to screen
			$appsList.empty();
			for(var i = 0; i < searchResultsApps.length; i++) {
				$appsList.append($('<li>').append($('<a>').append($('<img>').attr("src", "" + searchResultsApps[i].smallImage + "")).append($('<span>').text(searchResultsApps[i].name))));
			}

			$devList.empty();
			for(var i = 0; i < searchResultsDevs.length; i++) {
				$devList.append($('<li>').append($('<a>').append($('<span>').text(searchResultsDevs[i].creatorName))));
			}
		});
	};


	var SubmitButtonWithFeedback = function() {
		$('.js-submit-with-feedback').on("click", function(){
  		var thisButton = $(this);
  		if(!thisButton.hasClass("ref-button--is-loading") && !thisButton.hasClass("ref-button--success") && !thisButton.hasClass("ref-button--error")) {
  			thisButton.addClass("ref-button--is-loading").attr("value", "Loading...");

	  		window.setTimeout(function(){
	  			if(thisButton.hasClass("js-submit-success")) {
	  				thisButton.removeClass("ref-button--is-loading").addClass("ref-button--success").attr("value", "Success!");
	  			}
	  			else {
	  				thisButton.removeClass("ref-button--is-loading").addClass("ref-button--error").attr("value", "Oops, something went wrong");
	  			}
	  			window.setTimeout(function(){
	  				thisButton.removeClass("ref-button--success ref-button--error").attr("value", "Submit");
	  			}, 3000);
	  		}, 3000);
  		}
  	});
	};

/* END COMPONENT OBJECTS */