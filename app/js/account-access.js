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
};

AccountAccess.prototype.templateFunctions = function() {
	// Apply button click success
	$('.account-access-page .js-mock-send').on("click", function(e){
		e.preventDefault();
		$(this).attr('value', 'Application Sent!').addClass('ref-button--success');
	});
};