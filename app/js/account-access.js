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
	this.mockSubmitApply();
	this.customTabTransition();
	this.resetPasswordForm();
	this.mockSubmitPasswordReset();
};

AccountAccess.prototype.mockSubmitApply = function() {
	// Apply button click success
	$('.account-access-page .js-mock-send').on("click", function(e){
		e.preventDefault();
		var $this = $(this);
		$this.attr('value', 'Application Sent!').addClass('ref-button--success');
		$this.parents('.tabs__content--is-showing').addClass('tabs__content--is-submitted').find('.form-submitted-success').addClass('is-showing');
	});
};

AccountAccess.prototype.customTabTransition = function() {
	$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css({"visibility":"hidden","position":"absolute"});
	$('.account-form-container .tabs__content--is-showing').css({"visibility":"visible","position":"relative"});
			
	$('.account-form-container .js-tab-select').on("click", function(e){
		var contentId = $(this).find('.tabs__link').attr("href");
		$(contentId).addClass('will-show');
		setTimeout(function(){
			$('.account-form-container .tabs__content:not(.tabs__content--is-showing)').css({"visibility":"hidden","position":"absolute"});
			$('.account-form-container .tabs__content--is-showing').css({"visibility":"visible","position":"relative"});
			$(contentId).removeClass('will-show');
		}, 150);
	});
};

AccountAccess.prototype.resetPasswordForm = function() {
	$('.js-mock-show-reset-password').on("click", function(e){
		e.preventDefault();
		var $currentTab = $(this).parents('.tabs__content--is-showing').addClass('show-reset-password-form').addClass('will-show');
		setTimeout(function(){
			$('.tabs__content--is-showing .form--login').css({"visibility":"hidden","position":"absolute"});
			$('.tabs__content--is-showing .form--password-reset').css({"visibility":"visible","position":"relative"});
			$currentTab.removeClass('will-show');
		}, 150);
	});
};

AccountAccess.prototype.mockSubmitPasswordReset = function() {
	$('.account-access-page .js-mock-send-reset-password').on("click", function(e){
		e.preventDefault();
		var $this = $(this);
		$this.attr('value', 'Email is on the way').addClass('ref-button--success');
		$this.parents('.tabs__content--is-showing').addClass('tabs__content--is-submitted').find('.form-submitted-success').addClass('is-showing');
	});
};