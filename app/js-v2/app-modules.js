
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