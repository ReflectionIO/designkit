var templateGlobalHeader = Handlebars.templates['dataVisHeader'];
var htmlGlobalHeader = templateGlobalHeader({});
$("#js-component-import--global-header").html(htmlGlobalHeader);

var templateGlobalBanner = Handlebars.templates['dataVisBanner'];
var htmlDataVisBanner = templateGlobalBanner({"url": surveyURL});
$("#js-component-import--data-vis-banner").html(htmlDataVisBanner);