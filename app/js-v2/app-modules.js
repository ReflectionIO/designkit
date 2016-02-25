
// General page with common modules included
var Page = function() {
	instance = this;
	new BrowserDetection();

	// only for design kit template because CSS class is-selected is added dynamically
	// and needs to be in place before the LeftNav will work
	setTimeout( function() { 
		new LeftPanelAndHamburger();
	}, 500);

	new FormInteractions();
	new PanelRightOverlay();
	new PanelRightMisplacedPassword();
	new AccountContainer();
	new SearchContainer();
	this.customScrollbars();
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

var BrowserDetection = function() {
	this.setIEClass();
	this.setChromeClass();
	this.setOperaClass();
	this.setSafariClass();
	this.setFireFoxClass();
}

BrowserDetection.prototype.setIEClass = function() {
	this.ieVersion = this.detectIE();
	if(this.ieVersion) {
		$('body').addClass('is-ie ie' + this.ieVersion);
	}
};

BrowserDetection.prototype.setChromeClass = function() {
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	if(isChrome) {
		$('html').addClass('is-chrome');
	}
};

BrowserDetection.prototype.setOperaClass = function() {
	var isOpera = !!window.opera || /opera|opr/i.test(navigator.userAgent);
	if(isOpera) {
		$('html').addClass('is-opera');
	}
};

BrowserDetection.prototype.setSafariClass = function() {
	var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
  if (isChrome && isSafari) {
  	isSafari = false;
  }
  if(isSafari) {
		$('html').addClass('is-safari');
	}
}

BrowserDetection.prototype.detectIE = function() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');

  if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  if (trident > 0) {
      // IE 11 (or newer) => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  if (edge > 0) {
  	return "edge";
  }

  // other browser
  return false;
};

BrowserDetection.prototype.setFireFoxClass = function() {
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if(is_firefox) { $('html').addClass('is-firefox'); }
}

var LeftPanelAndHamburger = function() {

	// Collapse all menu items if not open
	var topLevelNavItems = $('.js-main-nav > ul > li');	
	topLevelNavItems.each(function(){
		if(!$(this).hasClass("is-selected")) {
			var totalHeight = 0;
			$(this).find('li.has-child').each(function(){
				var collapsibleList = $(this).children('ul');
				collapsibleList.css("margin-top", -collapsibleList.height());
				totalHeight += collapsibleList.height();
			});
			var collapsibleList = $(this).children('ul');
			collapsibleList.css("margin-top", -collapsibleList.height());
		}
	});

	$('.js-main-nav > ul > li ul li.js-is-collapsible > a').on("click", function(e){
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

	if($(".touch").length > 0) {
		window.setTimeout(function() {
			topLevelNavItems.each(function(){
				if($(this).hasClass('is-selected')) {
					$(this).children("a").trigger("click");
					$(this).find("li.is-selected.js-is-collapsible > a").trigger("click");
				}
			});
		}, 100);
	}

	var topLevelNavItems = $('.js-main-nav > ul > li'),
		siteNavTopLevelItems = $('.js-main-navigation > ul > li'),
		accountNavTopLevelItems = $('.js-account-navigation > ul > li');

	topLevelNavItems.on("click", function(){
		$clickedItem = $(this);
		if(!$(this).hasClass("js-is-collapsible")) {
			if($clickedItem.parents('.js-main-navigation').length > 0) {
				$('.js-main-navigation > ul > li.js-is-collapsible.is-open > a').trigger("click");
			} else {
				if($clickedItem.parents('.js-account-navigation').length > 0) {
					$('.js-account-navigation > ul > li.js-is-collapsible.is-open > a').trigger("click");
				}
			}
		}
	});

	$('.js-main-nav > ul > li.js-is-collapsible > a').on("click", function(e){
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

	// hide panel on content click/tap
	if($('html.touch').length) {
		$('.l-main').on("click", function() {
			if($('.panel-left-open').length) {
				$('.js-hamburger-button').trigger("click");
			}
		});
	}

	// Hamburger/left panel interaction
	$('.js-hamburger-button').on("click", function(){
		$(this).toggleClass('is-selected');
		if($('body').hasClass('panel-left-open')) {
			$('body, html').removeClass('panel-left-open');			
			if(!$('html.is-chrome').length && !$('html.is-opera').length) {
				$('.panel-left').addClass('is-animating-out');
				$('.l-main').addClass('is-animating-out');
				window.setTimeout(function(){
					$('.panel-left, .l-main').removeClass('is-animating-out'); // class for motion blur effect
				}, 140);
			}
		} else {
			$('body, html').toggleClass('panel-left-open');
			if(!$('html.is-chrome').length && !$('html.is-opera').length) {
				$('.panel-left').addClass('is-animating-in');
				$('.l-main').addClass('is-animating-in');
				window.setTimeout(function(){
					$('.panel-left, .l-main').removeClass('is-animating-in'); // class for motion blur effect
				}, 140);
			}
		}
	});
};

var FormInteractions = function() {
	setTimeout(function(){
		$('.form-field input[type=email], .form-field input[type=password], .form-field input[type=text], .form-field textarea').each(function(){
			var $this = $(this);
			var $thisParent = $this.parent('.form-field');
			if(!$thisParent.hasClass('form-field--error')) {
				if(!$(this).val().length || $(this).val().length == 0) {
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
			}
		});
	}, 100); // fixes bug in IE11 for prepopulated data
};

var PanelRightOverlay = function() {
	var instance = this;
	$('body.ie10').on("click", function(e){
		if($(this).hasClass("no-scroll")) {
			if($(e.target).find('.panel-right__overlay').length) {
				instance.CloseRightPanel();
			}
		}
	});
	$('.panel-right__overlay').on("click", function() {
		instance.CloseRightPanel();
	});
};

PanelRightOverlay.prototype.CloseRightPanel = function() {
		if($('.js-account-container').hasClass('is-showing')) {
			$('.js-link-log-in-container .js-link-log-in').trigger("click");
		}
		else if($('.js-search-container').hasClass('is-showing')) {
			$('.js-open-search').click();
		}
		$('html, body').removeClass('no-scroll');
};

var PanelRightMisplacedPassword = function() {
	$('.panel-right .js-mock-show-reset-password').on("click", function(e){
		$('.panel-right').addClass('show-reset-password-form').addClass('will-show');
		setTimeout(function(){
			$('.panel-right .form--login').css({"visibility":"hidden","position":"absolute"});
			$('.panel-right .form--password-reset').css({"visibility":"visible","position":"relative"});
			$('.panel-right').removeClass('will-show');
			if($('.ie8').length > 0) {
				$('.panel-right .form--login').css("display","none");
				$('.panel-right .form--password-reset').css("display","block");
			}
		}, 150);
	});

	$('.panel-right .js-mock-send-reset-password').on("click", function(e){
		e.preventDefault();
		var $this = $(this);
		$this.attr('value', 'Email is on the way').addClass('ref-button--success');
		$('.panel-right').addClass('reset-password-is-submitted').find('.form-submitted-success').addClass('is-showing');
	});

	$('.panel-right .js-link-to-login').on("click", function(e){
		e.preventDefault();
		$('.panel-right').removeClass('show-reset-password-form').removeClass('reset-password-is-submitted').find('.form-submitted-success').removeClass('is-showing')
		$('.panel-right .form--login').css({"visibility":"visible","position":"relative"});
		$('.panel-right .form--password-reset').css({"visibility":"hidden","position":"absolute"});
		$('.panel-right .js-mock-send-reset-password').removeClass('ref-button--success').attr('value', 'Send password reset email');
		if($('.ie8').length > 0) {
			$('.panel-right .form--login').css("display","block");
			$('.panel-right .form--password-reset').css("display","none");
		}
	});
}

var AccountContainer = function() {
	$('.js-link-log-in').on("click", function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('is-selected');
		if($('.js-account-container').hasClass('is-showing')) {
			$('.js-account-container').removeClass('is-showing');
			$('html, body').removeClass('no-scroll');
			if($('.no-touch').length) {
				$('.js-account-container').addClass('is-animating-out');
				window.setTimeout(function(){
					$('.js-account-container').removeClass('is-animating-out');
				}, 180);
			}
		}
		else {
			if($('.js-search-container').hasClass('is-showing')) {
				$('.js-open-search').click();
			}
			$('.js-account-container').addClass('is-showing');
			$('html, body').addClass('no-scroll');
			if($('.no-touch').length) {
				$('.js-account-container').addClass('is-animating-in');
				window.setTimeout(function(){
					$('.js-account-container').removeClass('is-animating-in');
				}, 240);
			}
		}
	});
};

var SearchContainer = function() {
	var pInstance = this;
	instance.searchOpenLink = $('.js-open-search');
	if(instance.searchOpenLink.length) {
		instance.searchOpenLink.click(function(e){
			e.preventDefault();
			$(this).toggleClass('is-selected');
			pInstance.toggleSearchView();
		});
	}

	this.initSearch();
};

SearchContainer.prototype.toggleSearchView = function() {
	if($('.js-search-container').hasClass('is-showing')) {
		$('.js-search-container').removeClass('is-showing');
		$('html, body').removeClass('no-scroll');
		if($('.no-touch').length) {
			$('.js-search-container').addClass('is-animating-out');
			window.setTimeout(function(){
				$('.js-search-container').removeClass('is-animating-out');
			}, 180);
		}
	}
	else {
		if($('.js-account-container').hasClass('is-showing')) {
			$('.js-link-log-in-container .js-link-log-in').trigger("click");
		}
		$('.js-search-container').addClass('is-showing');
		$('html, body').addClass('no-scroll');
		$('.search__form .js-get-items').select();
		if($('.no-touch').length) {
			$('.js-search-container').addClass('is-animating-in');
			window.setTimeout(function(){
				$('.js-search-container').removeClass('is-animating-in');
			}, 240);
		}
	}
};

function handleappsearch(data) {
	var inputValue,
			$appsContainer = $('.js-item-results--apps'),
			$devListContainer = $('.js-item-results--developers'),
			$noResultsContainer = $('.js-no-results'),
			$appsList = $appsContainer.find('ul'),
			$devList = $devListContainer.find('ul');

	var searchResultsApps = [],
			searchResultsDevs = [];

	var inputValueCaseInsensitiveRegEx = new RegExp($('.js-get-items').val(), "i");

	// if found add to result array
	for(var i = 0; i < data.results.length; i++) {
		if(data.results[i].trackCensoredName.search(inputValueCaseInsensitiveRegEx) > -1) {
			searchResultsApps.push(data.results[i]);
		}
		// Search Developers
		// if(data.results[i].creatorName.search(inputValueCaseInsensitiveRegEx) > -1) {
		// 	searchResultsDevs.push(data.results[i]);
		// }
	}

	// show and hide containers for nil results
	if (searchResultsApps.length == 0) {			
		$appsContainer.hide();
	} else {
		$appsContainer.show();
		$noResultsContainer.hide();
	}

	if(searchResultsDevs.length == 0) { 
		$devListContainer.hide();
	} else {
		$devListContainer.show();
		$noResultsContainer.hide();
	}

	if(searchResultsApps.length == 0 && searchResultsDevs.length == 0) {
		$noResultsContainer.show();
	}
	
	// output results to screen
	$appsList.empty();
	for(var i = 0; i < searchResultsApps.length; i++) {
		$appsList.append($('<li>').append($('<a>').attr("href", "app.html?id=" + searchResultsApps[i].trackId).append($('<img>').attr("src", "" + searchResultsApps[i].artworkUrl60 + "")).append($('<span>').text(searchResultsApps[i].trackCensoredName))));
	}

	$devList.empty();
	for(var i = 0; i < searchResultsDevs.length; i++) {
		$devList.append($('<li>').append($('<a>').append($('<span>').text(searchResultsDevs[i].creatorName))));
	}
}

SearchContainer.prototype.initSearch = function() {
	
	// on key up loop through object and search - for implentation, amend to call service to return results in json and display
	$('.js-get-items').keyup(function(){
		
		$('#scriptsearch').remove();
    $('body').append($("<script>").attr("id", "scriptsearch").attr("src", "https://itunes.apple.com/search?term=" + $(this).val() + "&media=software&limit=10&callback=handleappsearch"));

		var $searchButtonMobile = $('.panel-right .form-field .search-button-mobile');
		if($(this).val().length > 0) {
			$searchButtonMobile.addClass('is-highlighted');
		} else {
			$searchButtonMobile.removeClass('is-highlighted');
		}
	});
};