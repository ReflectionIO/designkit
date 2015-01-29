/* APPLICATION JAVASCRIPT
// Use prototypal inheritance to set functions relevant to the page to encapsulate functions (page objects below)
// Use functions as variables (component objects below) to modularise and encapsulate component functionality


/* PAGE OBJECTS FOR TEMPLATES */

// Page object
	var Page = function() {
		instance = this;
		this.setIEClass();
		this.setChromeClass();
		this.setOperaClass();
		this.setMainContentWidthForIE();
		this.initBrowserPulling();
		new LeftPanelAndHamburger();
		new FormInteractions();
		new AccountContainer();
		new SearchContainer();
		this.customScrollbars();
	};

	Page.prototype.setIEClass = function() {
		this.ieVersion = this.detectIE();
		if(this.ieVersion) {
			$('body').addClass('is-ie ie' + this.ieVersion);
		}
	};

	Page.prototype.setChromeClass = function() {
		var isChrome = !!window.chrome && !!window.chrome.webstore;
		if(isChrome) {
			$('html').addClass('is-chrome');
		}
	};

	Page.prototype.setOperaClass = function() {
		var isOpera = !!window.opera || /opera|opr/i.test(navigator.userAgent);
		if(isOpera) {
			$('html').addClass('is-opera');
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
				$('body').removeClass('panel-left-open');
				instance.setMainContentWidthForIE();
				if(!$('html.is-chrome').length && !$('html.is-opera').length) {
					$('.panel-left').addClass('is-animating-out');
					$('.l-main').addClass('is-animating-out');
					window.setTimeout(function(){
						$('.panel-left, .l-main').removeClass('is-animating-out'); // class for motion blur effect
					}, 140);
				}
			} else {
				$('body').toggleClass('panel-left-open');
				instance.setMainContentWidthForIE();
				if(!$('html.is-chrome').length && !$('html.is-opera').length) {
					$('.panel-left').addClass('is-animating-in');
					$('.l-main').addClass('is-animating-in');
					window.setTimeout(function(){
						$('.panel-left, .l-main').removeClass('is-animating-in'); // class for motion blur effect
					}, 140);
				}
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

		// hide panel on content click/tap
		if($('html.touch').length && $(window).width() < 940) {
			$('.l-main').on("click", function() {
				if($('.panel-left-open').length) {
					$('.js-hamburger-button').trigger("click");
				}
			});
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


	var AccountContainer = function() {
		$('.actions-group').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.js-account-container').toggleClass('is-showing');
				$('.actions-group').toggleClass('is-on');
				$('body').toggleClass('no-scroll');
			}
		});
		$('.js-link-log-in').on("click", function(e) {
			e.preventDefault();
			if($('.js-account-container').hasClass('is-showing')) {
				$('.js-account-container').removeClass('is-showing');
				if($('.no-touch').length) {
					$('.js-account-container').addClass('is-animating-out');
					window.setTimeout(function(){
						$('.js-account-container').removeClass('is-animating-out');
					}, 180);
				}
			}
			else {
				$('.js-account-container').addClass('is-showing');
				if($('.no-touch').length) {
					$('.js-account-container').addClass('is-animating-in');
					window.setTimeout(function(){
						$('.js-account-container').removeClass('is-animating-in');
					}, 240);
				}
			}
			$('body').toggleClass('no-scroll');
		});
		$('.panel-right__overlay').on("click", function() {
			if(!$('.actions-group__content').is(':visible')) {
				$('.actions-group').trigger("click");
			}
			else {
				$('.js-link-log-in-container .js-link-log-in').trigger("click");
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
			if($('.no-touch').length) {
				$('.js-search-container').addClass('is-animating-out');
				window.setTimeout(function(){
					$('.js-search-container').removeClass('is-animating-out');
				}, 180);
			}
		}
		else {
			$('.js-search-container').addClass('is-showing');
			if($('.no-touch').length) {
				$('.js-search-container').addClass('is-animating-in');
				window.setTimeout(function(){
					$('.js-search-container').removeClass('is-animating-in');
				}, 240);
			}
		}
		$('body').toggleClass('no-scroll');
		$('.search__input-search').select();
	};

	SearchContainer.prototype.initSearch = function() {
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


	var Tabs = function() {
		var isIE8 = $('.ie8').length;
		console.log(isIE8);
		if(!isIE8) {
			$('.tabs__content--is-showing *').css("opacity", 1);
		}

		$('.js-tab-select').on("click", function(e){
  		e.preventDefault();
  		var thisParent = $(this).parents(".tabs-container");
  		thisParent.find('.is-active').removeClass('is-active');
  		$(this).addClass('is-active');
  		var contentId = $(this).find('.tabs__link').attr("href");
  		$(contentId).parents('.tabs__content-container').find('.tabs__content--is-showing').removeClass('tabs__content--is-showing');
  		$(contentId).addClass('tabs__content--is-showing');
  		if(!isIE8) {
	  		$(contentId + ' *').css("opacity", 0);
	  		$(contentId + ' *').animate({opacity: 1}, 200);
	  	}
  	});

  	if($(window).width() < 720) {
  		// wait for LHS panel to move in before calculating height with setTimout
  		setTimeout(function(){
  			$('.collapsible-content').each(function(){
  				if(!$(this).parents('.tabs__content--is-showing').length) { 
	  				contentHeight = $(this).height();
	  				$(this).css('margin-top', -contentHeight);
	  			}
	  		});
	  		$('.collapsible-trigger').click(function(){
	  			var $this = $(this);
	  			if($this.parents('.tabs__content--is-showing').length) {
	  				$this.parents('.tabs__content--is-showing').removeClass('tabs__content--is-showing');
	  				contentHeight = $this.next('.collapsible-content').height();
	  				$this.next('.collapsible-content').css('margin-top', -contentHeight);
	  			} else {
	  				$this.parents('.tabs__content-container').find('.tabs__content--is-showing').removeClass('tabs__content--is-showing');
		  			$this.parents('.tabs__content').addClass('tabs__content--is-showing');
		  			$('.collapsible-content').each(function(){
			  			if(!$(this).parents('.tabs__content--is-showing').length) { 
			  				contentHeight = $(this).height();
			  				$(this).css('margin-top', -contentHeight);
			  			} else {
			  				$(this).css('margin-top', 0);
			  			}
		  			});
		  			setTimeout(function(){
		  				var currentContentTop = $this.offset().top;
		  				$('html,body').animate({
			          scrollTop: currentContentTop - 70
			        }, 310);
		  			}, 300);
	  			}
	  		});
  		}, 500);
  	}
	};


	var FormFieldSelect = function() {
		var pInstance = this;
		$('.reflection-select').each(function(){
			var $this = $(this),
						selectedOptionsContainer = $this.find('.js-selected-values'),
						optionsList = $this.find('ul'),
						listItems = $this.find('li');

			optionsList.css('margin-top', -optionsList.height());
			pInstance.populateSelectedValues(listItems, selectedOptionsContainer);

			if($this.parent('.form-field--select-disabled').length == 0) {
				selectedOptionsContainer.on('click', function() {
					if($this.hasClass('is-open')) {
						$this.removeClass('is-open');
						optionsList.css('margin-top', -optionsList.height());
					}
					else {
						$this.addClass('is-open');
						optionsList.css('margin-top', "9px");
					}				
				});
			}

			listItems.on("click", function(){
				pInstance.populateSelectedValues(listItems, selectedOptionsContainer);
			});
		});

		if(!$('.ie8').length) {
			$('.js-field--select').each(function() {
			var selectInput = $(this),
					selectOptions = selectInput.find('option'),
					optionsList = $('<ul>'),
					refSelectContainer = $('<div>').addClass('reflection-select'),
					refSelectDefault = $('<span>').addClass('ref-icon-after ref-icon-after--angle-down').text('Choose your option');
			
				selectOptions.each(function(){
					$this = $(this);
					if($this.attr('value')) {
						var preSelectedClass = '';
						if($this.data("previous")) {
							preSelectedClass = 'pre-selected';
						}
						optionsList.append($('<li>').addClass(preSelectedClass).attr('data-value', $this.attr('value')).text($this.text()));
					}
					else {
						refSelectDefault.text($this.text());
					}
				});

				refSelectContainer.append(refSelectDefault).append(optionsList);
				selectInput.parents('.form-field--select').append(refSelectContainer);

				var listHeight = optionsList.innerHeight();
				optionsList.css('margin-top', -listHeight);

				function toggleDropDown() {
					if(refSelectContainer.hasClass('is-open')) {
						refSelectContainer.removeClass('is-open');
						optionsList.css('margin-top', -listHeight);
					}
					else {
						refSelectContainer.addClass('is-open');
						optionsList.css('margin-top', "9px");
					}
				};

				if(selectInput.parent('.form-field--select-disabled').length == 0) {
					optionsList.find('li').on('click', function() {
						if(!$(this).hasClass('pre-selected')) {
							toggleDropDown();
						}
					});
					refSelectDefault.on('click', function() {
						toggleDropDown();
					});
				}

				$(window).on("resize", function(){
					listHeight = optionsList.innerHeight();
					optionsList.css('margin-top', -listHeight);	
				});

				optionsList.find('li').on('click', function(){
					if(!$(this).hasClass('pre-selected')) {
						listItem = $(this);
						optionsList.find('li').removeClass('is-selected');
						listItem.addClass('is-selected');
						refSelectDefault.text(listItem.text()).addClass('is-activated');

						selectOptions.each(function() {
							if($(this).val() == listItem.data("value")) {
								$(this).attr("selected", "selected");
							}
							else {
								$(this).removeAttr("selected");	
							}
						});
					}
				});
			});
		}
	};

	FormFieldSelect.prototype.populateSelectedValues = function(listItems, selectedOptionsContainer) {
		var selectedValues = '';
		listItems.each(function(){
			var $this = $(this);
			if($this.find('input:checked').length > 0) {
				selectedValues += $this.find('.checkboxLabelVisible').text() + ', ';
			}
		});

		if(selectedValues.length > 0) {
			selectedValues = selectedValues.substring(0, selectedValues.length - 2);
			selectedOptionsContainer.text(selectedValues);
		}
		else {
			selectedOptionsContainer.text('Choose your option(s)');
		}
	};

/* END COMPONENT OBJECTS */