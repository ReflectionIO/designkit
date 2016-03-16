
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
	new SearchContainer($('.js-search-text-container'));
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
		} else {
			$('body, html').toggleClass('panel-left-open');
		}
	});
};

var PanelRightOverlay = function() {
		var instance = this;
		$('body.ie10').on("click", function(e){
			if($(e.target).find('.panel-right__overlay').length) {
				instance.CloseRightPanel();
			}
		});
		$('.panel-right__overlay').on("click", function() {
			instance.CloseRightPanel();
		});
	};

PanelRightOverlay.prototype.CloseRightPanel = function() {
		if($('.js-account-container').hasClass('is-showing')) {
			$('.js-link-log-in').trigger("click");
		}
		if($('.js-search-container').hasClass('is-showing')) {
			$('.js-search-text-container input').val("");
			$('.js-search-text-container').removeClass('is-open');
			$('.js-search-container').removeClass('is-showing');
		}
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
		} else {
			$('.js-account-container').addClass('is-showing');
		}
		if($('.js-search-container').hasClass('is-showing')) {
			$('.js-search-text-container').removeClass('is-open');
			$('.js-search-container').removeClass('is-showing');
			$('.js-search-text-container input').val("");
		}
	});
};

var SearchContainer = function($domElement) {
	
	var $searchTextContainer = $domElement,
			sInstance = this,
			$searchInput = $searchTextContainer.find(".js-get-items");
	$searchInput.on("focus", function() {		
		sInstance.openSearch();
	});
	$searchTextContainer.find(".js-clear-search").on("click", function(){
		$searchInput.val("");
		$searchInput.focus();
	});

	this.initSearch();
};

SearchContainer.prototype.openSearch = function() {
	if($('.js-account-container').hasClass('is-showing')) {
		$('.js-link-log-in').trigger("click");
	}
	$('.js-search-text-container').addClass('is-open');
	$('.js-search-container').addClass('is-showing');
};

function handleappsearch(data) {
	var inputValue,
			$appsContainer = $('.js-item-results--apps').show(),
			$devListContainer = $('.js-item-results--developers').show(),
			$noResultsContainerApps = $('.js-no-results--apps'),
			$noResultsContainerPub = $('.js-no-results--publishers'),
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
		if(data.results[i].artistName.search(inputValueCaseInsensitiveRegEx) > -1) {
			var previouslyAdded = false;
			for(var b = 0; b < searchResultsDevs.length; b++) {
				if(data.results[i].artistName == searchResultsDevs[b].artistName) {
					previouslyAdded = true;
				}
			}
			if(!previouslyAdded) {
				searchResultsDevs.push(data.results[i]);
			}
		}
	}

	// show and hide containers for nil results
	if (searchResultsApps.length == 0) {			
		$noResultsContainerApps.show();
		$appsList.hide();
	} else {
		$noResultsContainerApps.hide();
		$appsList.show();
	}

	if(searchResultsDevs.length == 0) {
		$noResultsContainerPub.show();
		$devList.hide();
	} else {
		$noResultsContainerPub.hide();
		$devList.show();
	}
	
	// output results to screen
	$appsList.empty();
	for(var i = 0; i < searchResultsApps.length && i < 5; i++) {
		$appsList.append($('<li>').append($('<img>').attr("src", "" + searchResultsApps[i].artworkUrl60 + ""))
															.append($('<div>').addClass("search-result__text-container")
																.append($('<a>').addClass("search-result__app-name").attr("href", "app.html?id=" + searchResultsApps[i].trackId).text(searchResultsApps[i].trackCensoredName))
																.append($('<span>').addClass("search-result__publisher-name").text(searchResultsApps[i].artistName))
															)
										);
	}

	$devList.empty();
	for(var i = 0; i < searchResultsDevs.length && i < 6; i++) {
		$devList.append($('<li>').append($('<a>').attr("href", "#").addClass("search-results--developer__publisher-name").text(searchResultsDevs[i].artistName)));
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

// V2 Components JS

var PrimaryFilters = function() {
	var instance = this;
	$("html").on("click", function(e){
		// close open filters on html click
		if(!$(e.target).hasClass("js-dropdown-trigger")) {
			instance.closeAllFilters();
		}
	});
}

PrimaryFilters.prototype.closeAllFilters = function() {
	$('.primary-filter.is-open .form-field--select__dropdown').hide();
	$('.primary-filter.is-open').removeClass("is-open");
};

var FormFieldSelect = function($domElement) {

	var $thisSelectBox = $domElement,
			$dropDownContainer = $("<ul>").addClass("form-field--select__dropdown"),
			$currentValue = $("<span>").addClass("form-field--select__box ref-icon-after--angle-down js-dropdown-trigger");

	$thisSelectBox.find('option').each(function(){
		
		var $thisOption = $(this),
				selectedClass = "";

		if($thisOption.val() != "") {

			if($thisOption.is(":selected")) {
				if($thisOption.val() != "") {
					selectedClass = "is-selected";
					$currentValue.text($thisOption.text());
				}
			}

			$dropDownContainer.append($("<li>")
																		.addClass("js-dropdown-option")
																		.text($thisOption.text())
																		.addClass(selectedClass)
																		.on("click", function(){
																			$thisSelectBox.find("option").removeAttr("selected");
																			$thisOption.attr("selected", "selected");
																			$currentValue.text($thisOption.text());
																			$dropDownContainer.toggle();
																			$thisSelectBox.parent("div").toggleClass("is-open");
																			$thisSelectBox.parent("div").removeClass("nothing-selected");
																			$dropDownContainer.find(".is-selected").removeClass("is-selected");
																			$(this).addClass("is-selected");
																		})
															);
		}

	});

	$currentValue.on("click", function(){
		var $parentDiv = $thisSelectBox.parent("div");
		if(!$parentDiv.hasClass("is-open")) {
			PrimaryFilters.prototype.closeAllFilters();
		}
		var parentWidth = $parentDiv.width();
		var parentHeight = $parentDiv.height();
		$dropDownContainer.css({"min-width": parentWidth + "px"});
		$dropDownContainer.toggle();	
		$parentDiv.toggleClass("is-open");
	});

	if($currentValue.text() == "") {
		$thisSelectBox.parent("div").addClass("nothing-selected");
	}

	$thisSelectBox.parent("div").append($currentValue)
															.append($dropDownContainer);
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


var Tabs = function($domElement) {

	var $tabsList = $domElement;
	$tabsList.find("li").each(function(){
		$(this).find("a").on("click", function(e){
			e.preventDefault();
			var $this = $(this),
					associatedContentId = $this.attr("href");
			$domElement.find('.is-active').removeClass("is-active");
			$this.parent("li").addClass("is-active");

			var associatedContentList = $(associatedContentId).parent(".js-tabs-content-list");
			associatedContentList.find('.is-active').removeClass("is-active");
			$(associatedContentId).addClass("is-active");
		});
	});

};

// Global settings for all Tooltips
var TooltipsBase = function() {
	$('.touch body').on("click", function(e){ // remove all tooltips on body touch
		if($('.tooltip').length) {			
			$('.tooltip').remove();
		}
	});
};

var ToolTip = function($domElement) {

	var instance = this;
	var $this = $domElement;
	var tooltip;
	if($('html.no-touch').length) {
		$this.on("mouseenter", function(){
			if($this.hasClass("js-tooltip--instant")) {
				tooltip = instance.generateTooltip($this, true);
			} else {
				tooltip = instance.generateTooltip($this, false);
			}					
		});
		$this.on("mouseleave", function(){
			tooltip.remove();
		});
		$this.on("click", function(e){
			if($this.attr("href") == "#") {
				e.preventDefault();
			}
			if(!$this.hasClass("js-tooltip--instant")) {
				tooltip.remove();
			}					
		});
	} else if($('html.touch').length) {
		$this.on("click", function(e){
			if(!$this.hasClass("form-field--select")) {
				if($this.attr("href") != undefined) {
					e.preventDefault();
				}
				if($this.hasClass("js-tooltip-generated")) {
					tooltip.remove();
					$this.removeClass("js-tooltip-generated");
				} else {						
					$this.addClass("js-tooltip-generated");
					setTimeout(function() { 
						tooltip = instance.generateTooltip($this, true);
					}, 50); // delay to avoid all tooltip removal on body touch
				}	
			}
		});
	}
};

ToolTip.prototype.generateTooltip = function($tooltipParent, isInstantTooltip) {
	var $this = $tooltipParent,
			tooltipText = $tooltipParent.data("tooltip");

	var tooltip = $('<div>').addClass("tooltip").append($('<div>').addClass("tooltip-text").text(tooltipText));
	
	$('body').append(tooltip);
	var topPosition = $this.offset().top;
	var tooltipHeight = tooltip.innerHeight();
	var tooltipWidth = tooltip.innerWidth();
	var componentHeight = $this.innerHeight();
	var componentWidth = $this.innerWidth();
	var componentOffsetLeft = $this.offset().left;

	var leftPosition = componentOffsetLeft - ((tooltipWidth - componentWidth) / 2);
	tooltip.hide();
	if($this.hasClass('js-tooltip--right')) {
		var tooltipWidth = tooltip.innerWidth();
		var componentWidth = $this.innerWidth();	
		leftPosition = componentOffsetLeft + componentWidth - tooltipWidth;
		tooltip.addClass("tooltip-right");
	}
	if($this.hasClass('js-tooltip--left')) {
		leftPosition = componentOffsetLeft;
		tooltip.addClass("tooltip-left");
	}
	if($this.hasClass('js-tooltip--precise-pointer')) {
		if($this.hasClass('js-tooltip--left')) {
			leftPosition -= 13;
		} else if($this.hasClass('js-tooltip--right')) {
			leftPosition += 10;
		}
	}
	tooltip.css({"top": topPosition - tooltipHeight - 17, "left": leftPosition});
	if(isInstantTooltip) {
		tooltip.show();
	} else {
		setTimeout(function(){
			tooltip.fadeIn(100);
		}, 700);
	}

	return tooltip;
};

var WhatsThisPopup = function($domElement) {

	var $this = $domElement
	$this.on("click", function(e){
		e.preventDefault();
		var $this = $(this);
		if(!($this.hasClass('is-open'))) {
			$this.addClass('is-open');
			var topPosition = $this.offset().top;
			var leftPosition = $this.offset().left;
			var tooltipContainer = $('<div>').addClass("whats-this-tooltip-popup");
			if($this.hasClass('whats-this-tooltip--dark')) {
				tooltipContainer.addClass("whats-this-tooltip--dark");
			}
			var tooltip = $('<div>').addClass("whats-this-tooltip");
			if($this.data("whatsthis-title")) {
				tooltip.append($('<h2>').text($this.data("whatsthis-title")));
			} else {
				tooltip.append($('<h2>').text("What's This?"));
			}			
			tooltip.append($('<p>').html($this.data("whatsthis")));
			tooltipContainer.append(tooltip);
			$('body').append(tooltipContainer);
			var tooltipWidth = tooltip.innerWidth();
			var tooltipHeight = tooltip.innerHeight();
			var iconOffset = 10;
			if($(window).width() > 480) {
				if($this.hasClass('position-tooltip-left')) {
					tooltip.addClass("position-tooltip-left");
					tooltipContainer.css({"top": topPosition - (tooltipHeight/2) + iconOffset, "left": leftPosition - tooltipWidth - 20});
				} else if($this.hasClass('position-tooltip-right')) {
					tooltip.addClass("position-tooltip-right");
					tooltipContainer.css({"top": topPosition - (tooltipHeight/2) + iconOffset, "left": leftPosition + 35});
				} else if($this.hasClass('position-tooltip-top')) {
					tooltip.addClass("position-tooltip-top");
					tooltipContainer.css({"top": topPosition - 20 - tooltipHeight, "left": leftPosition - (tooltipWidth/2) + iconOffset});
				} else {
					tooltipContainer.css({"top": topPosition + 45, "left": leftPosition - (tooltipWidth/2) + 8});
				}
			} else {
				tooltipContainer.css({"top": topPosition + 35, "left": "50%", "margin-left": -(tooltipWidth/2)});
			}
			
			setTimeout(function(){
				tooltip.addClass("is-open");
			}, 10);				
			$('body').on("click", function(e){
				if(!($(e.target).is($this))) {
					tooltipContainer.remove();
					$this.removeClass('is-open');
				}
			});				
		} else {
			$('.whats-this-tooltip-popup').remove();
			$this.removeClass('is-open');
		}
	});
	
	$(window).on("resize", function(){
		$('.whats-this-tooltip-popup').remove();
		$('.js-whats-this-tooltip.is-open').removeClass('is-open');
	});
};

