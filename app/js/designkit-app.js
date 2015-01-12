/* APPLICATION JAVASCRIPT
// Use prototypal inheritance to set functions relevant to the page to encapsulate functions (page objects below)
// Use functions as variables to modularise and encapsulate component functionality in application.js - which contains reusable components JS for the application
// Keep design kit only JS in this file, and resusable application JS in application.js


/* PAGE OBJECTS FOR TEMPLATES */

// DesignKitPage object
	var DesignKitPage = function(dkPageProperties) {
		// Import page banner
		var templateDesignKitBanner = Handlebars.templates['designKitBanner'];
		var htmlDesignKitBanner = templateDesignKitBanner({
			bannerImage: dkPageProperties.bannerImage,
			bannerImageAlt: dkPageProperties.bannerImageAlt, 
			sectionTitle: dkPageProperties.sectionTitle, 
			componentTitle: dkPageProperties.componentTitle, 
			intro: dkPageProperties.intro
		});
		$("#js-component-import--design-kit-banner").html(htmlDesignKitBanner);

		// Trigger menu click for current page
		if(dkPageProperties.pageUrl) {
			var thisPageLink = $('#js-component-import--panel-left').find('a[href="' + dkPageProperties.pageUrl + '"]');
		  thisPageLink.parent("li").addClass("is-selected").parents("li").addClass("is-selected");
		}
	};


// DKStarterPage object
	var DKStarterPage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-typography.png",
			bannerImageAlt: "Tt", 
			sectionTitle: "Design Assets", 
			componentTitle: "Component Title", 
			intro: "Component Introduction"
		}
		new DesignKitPage(dkPageProperties);
	};


// HomePage object
	var HomePage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-typography.png",
			bannerImageAlt: "Tt", 
			sectionTitle: "Design Assets", 
			componentTitle: "Component Title", 
			intro: "Component Introduction"
		}
		new DesignKitPage(dkPageProperties);
	};


// ButtonsPage object
	var ButtonsPage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-buttons.png",
			bannerImageAlt: "Button icon", 
			sectionTitle: "Design Assets", 
			componentTitle: "Buttons", 
			intro: "Our buttons perform a range of tasks such as linking to other sections, opening panels or submitting a form or a post. See and interact with the different types below and learn the applications in which they can be used.",
			pageUrl: "buttons.html"
		}
		new DesignKitPage(dkPageProperties);

		// Components
		new SubmitButtonWithFeedback();
	};


// ColoursPage object
	var ColoursPage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-palette.png",
			bannerImageAlt: "Art palette icon", 
			sectionTitle: "Design Assets", 
			componentTitle: "Colours", 
			intro: "Our colour palette is designed to exude authority and trustworthiness whilst also making content easy to consume and interact with. Our colour accents are a clear identifier in our industry but also denote function as well as our brand values and personality.",
			pageUrl: "colours.html"
		}
		new DesignKitPage(dkPageProperties);

		// Functionality just for this template, and not reusable
		this.templateFunctions();
	};

	ColoursPage.prototype.templateFunctions = function() {
		$('.colour-link').on("click", function(e){
  		e.preventDefault();
  		$(this).find("input").select();
  	});
	};

// GridsPage object
	var GridsPage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-grids.png",
			bannerImageAlt: "Grid icon", 
			sectionTitle: "Design Assets", 
			componentTitle: "Grids & Breakpoints", 
			intro: "The base grid for our responsive app is structured of 12 columns with 2% padding and 0 gutters. There is a fixed margin on either side which changes based on screen width: 30px on laptop /desktop, 20px on phablet and 10px on mobile. Use the tabs below to see how this grid changes across different devices.",
			pageUrl: "grids.html"
		}
		new DesignKitPage(dkPageProperties);

		// Functionality just for this template, and not reusable
		this.templateFunctions();
	};

	GridsPage.prototype.templateFunctions = function() {
		$('.js-toggle-overlay').on("click", function(){
  		$('.grid-demo-layer-top').toggleClass("has-transparency");
  	});

  	$('.js-toggle-grid').on("click", function(e){
  		e.preventDefault();
  		$('.tab-links-container .grid-demo-column--alternate').removeClass('grid-demo-column--alternate');
  		$(this).parent('.grid-demo-column').addClass('grid-demo-column--alternate');
  	});
  	$('.js-change-grid-desktop').on("click", function(){
  		$('.grid-demo-container').removeClass("mobile-width phablet-width tablet-width");
  	});
  	$('.js-change-grid-tablet').on("click", function(){
  		$('.grid-demo-container').removeClass("mobile-width phablet-width").addClass("tablet-width");
  	});
  	$('.js-change-grid-phablet').on("click", function(){
  		$('.grid-demo-container').removeClass("mobile-width tablet-width").addClass("phablet-width");
  	});
  	$('.js-change-grid-mobile').on("click", function(){
  		$('.grid-demo-container').removeClass("phablet-width tablet-width").addClass("mobile-width");
  	});
	};


// TypographyPage object
	var TypographyPage = function() {
		new Page();
		var dkPageProperties = {
			bannerImage: "images/banner-icon-typography.png",
			bannerImageAlt: "Tt", 
			sectionTitle: "Design Assets", 
			componentTitle: "Typography", 
			intro: "Below are the styling rules for sitewide typography. Our brand typefaces are clean, uncomplicated and easy to read at any size. Specific spacing rules to ensure legibility and UX integrity are detailed below alongside examples.",
			pageUrl: "grids.html"
		}
		new DesignKitPage(dkPageProperties);
	};
/* END PAGE OBJECTS FOR TEMPLATES */