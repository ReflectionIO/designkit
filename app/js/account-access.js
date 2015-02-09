//import the header from handlebars
var templateFontDeclarations = Handlebars.templates['fontDeclarations'];
var htmlFontDeclarations = templateFontDeclarations({});
$("head").append(htmlFontDeclarations);

var templateGlobalHeader = Handlebars.templates['globalHeader'];
var htmlGlobalHeader = templateGlobalHeader({});
$("#js-component-import--global-header").html(htmlGlobalHeader);

var AccountAccess = function() {
	// App Components
	new FormInteractions();
	new Tabs();

	// Functionality for this template set
	this.templateFunctions();
	this.customTabTransition();
};

AccountAccess.prototype.templateFunctions = function() {
	// Apply button click success
	$('.account-access-page .js-mock-send').on("click", function(e){
		e.preventDefault();
		$(this).attr('value', 'Application Sent!').addClass('ref-button--success');
		$('.email-send-success').addClass('is-showing');
	});
};

AccountAccess.prototype.customTabTransition = function() {
	$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css("visibility","hidden");
			$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css("position","absolute");
			$('.account-form-container .tabs__content--is-showing').css("visibility","visible");
			$('.account-form-container .tabs__content--is-showing').css("position","relative");
			
	$('.account-form-container .js-tab-select').on("click", function(e){
		var contentId = $(this).find('.tabs__link').attr("href");
		$(contentId).addClass('will-show');
		setTimeout(function(){
			$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css("visibility","hidden");
			$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css("position","absolute");
			$('.account-form-container .tabs__content--is-showing').css("visibility","visible");
			$('.account-form-container .tabs__content--is-showing').css("position","relative");
			$(contentId).removeClass('will-show');
		}, 150);
	});
};