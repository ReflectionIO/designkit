(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['designKitBanner'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<!-- <div class=\"banner\"> -->\n	<div>\n		<div class=\"banner__graphic\">\n			<img src=\""
    + escapeExpression(((helper = (helper = helpers.bannerImage || (depth0 != null ? depth0.bannerImage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bannerImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.bannerImageAlt || (depth0 != null ? depth0.bannerImageAlt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bannerImageAlt","hash":{},"data":data}) : helper)))
    + "\" />\n		</div>\n		<div class=\"banner__intro\">\n			<h1>"
    + escapeExpression(((helper = (helper = helpers.sectionTitle || (depth0 != null ? depth0.sectionTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sectionTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n			<h2>"
    + escapeExpression(((helper = (helper = helpers.componentTitle || (depth0 != null ? depth0.componentTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"componentTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n			<p>"
    + escapeExpression(((helper = (helper = helpers.Intro || (depth0 != null ? depth0.Intro : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Intro","hash":{},"data":data}) : helper)))
    + "</p>						\n		</div>\n	</div>\n<!-- </div> -->";
},"useData":true});
templates['fontDeclarations'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600,700' rel='stylesheet' type='text/css'>\n<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:600' rel='stylesheet' type='text/css'>";
  },"useData":true});
templates['globalHeader'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <header class=\"global-header\"> -->\n	<div class=\"hamburger\">\n		<button class=\"hamburger__button ref-icon-before ref-icon-before--hamburger is-selected js-hamburger-button\"></button>\n	</div>\n	<div class=\"site-logo\">\n		<a href=\"/\">\n			<picture> <!-- uses js/picturefill.2.2.0.min.js -->\n				<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n				<source srcset=\"images/logo-reflection-header.png\" media=\"(min-width: 720px)\" />\n				<source srcset=\"images/logo-reflection-header-mobile.png\" />\n				<!--[if IE 9]></video><![endif]-->\n				<img src=\"images/logo-reflection-header.png\" alt=\"Reflection logo\" />\n			</picture>\n		</a>\n	</div>\n	<div class=\"global-header__actions\">\n		<form class=\"form--search\">\n			<label class=\"ref-icon-before ref-icon-before--search form--search__label-search\" for=\"site-search\">Search: </label>\n			<input type=\"search\" name=\"site-search\" id=\"site-search\" placeholder=\"Search for app or developer\" class=\"form--search__input-search\" />\n		</form>\n		<div class=\"actions-group-container\">\n			<div class=\"actions-group ref-icon-before ref-icon-before--cog\">\n				<div class=\"actions-group__content\">\n					<a href=\"#\" class=\"ref-button--cta-small--wide\">Apply</a>\n					<div class=\"link-log-in-container\">\n						<a href=\"#\" class=\"link-log-in\">Log In</a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n<!-- </header> -->";
  },"useData":true});
templates['panelLeft'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <div class=\"panel-left\"> -->\n	<nav class=\"main-navigation js-main-nav\" role=\"navigation\">\n		<ul>\n			<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--my-data\">Overview</a></li>\n			<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--blog\">Brand</a></li>\n			<li class=\"has-child js-is-collapsible\"><a href=\"#\" class=\"ref-icon-before ref-icon-before--forum\">Design Assets</a>\n				<ul>\n					<li><a href=\"colours.html\">Colours</a></li>\n					<li><a href=\"typography.html\">Typography</a></li>\n					<li class=\"has-child js-is-collapsible\">\n						<a href=\"#\">Menu demo</a>\n						<ul>\n							<li><a href=\"#\">Dolor Amet Lorem</a></li>\n						</ul>\n					</li>\n				</ul>\n			</li>\n			<li><a href=\"grids.html\" class=\"ref-icon-before ref-icon-before--leaderboard\">Grid &amp; Breakpoints</a></li>\n			<li class=\"has-child js-is-collapsible\">\n				<a href=\"#\" class=\"ref-icon-before ref-icon-before--help\">UI Components</a>\n				<ul>\n					<li><a href=\"buttons.html\">Buttons</a></li>\n				</ul>\n			</li>\n			<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--info\">UI Transitions</a></li>\n			<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--info\">Sample Layouts</a></li>\n		</ul>\n	</nav>\n	<ul class=\"main-social-links\">\n		<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--facebook\" onclick=\"return false;\"><span>Facebook</span></a></li>\n		<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--twitter\" onclick=\"return false;\"><span>Twitter</span></a></li>\n		<li><a href=\"#\" class=\"ref-icon-before ref-icon-before--linkedin\" onclick=\"return false;\"><span>LinkedIn</span></a></li>\n	</ul>\n	<div class=\"main-footer-links\">\n		<ul>\n			<li><a href=\"#\">Contact Us</a></li>\n			<li><a href=\"#\">Terms &amp; Conditions</a></li>\n			<li><a href=\"#\">Privacy</a></li>\n			<li><a href=\"#\">Sitemap</a></li>\n		</ul>\n	</div>\n<!-- </div> -->";
  },"useData":true});
templates['panelRight'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <div class=\"panel-right-container\"> -->\n	<div class=\"panel-right__overlay\"></div>\n		<div class=\"panel-right js-custom-scrollbar\" data-mcs-theme=\"minimal-dark\">\n			<form class=\"reflection-form\" autocomplete=\"off\">\n				<div class=\"form-field\">						\n					<input type=\"email\" name=\"email\" id=\"email\" autocomplete=\"off\" />\n					<label for=\"email\">Email</label>\n				</div>\n				<div class=\"form-field\">						\n					<input type=\"password\" name=\"password\" id=\"password\" autocomplete=\"off\" />\n					<label for=\"password\">Password</label>\n				</div>\n				<a href=\"#\" class=\"form-link\">I've misplaced my password</a>\n				<div class=\"form-field--checkbox\">\n					<input type=\"checkbox\" name=\"signedin\" id=\"signedin\" /><labeL for=\"signedin\">Keep me signed in</label>\n				</div>\n				<input type=\"submit\" class=\"ref-button--full-width\" value=\"Log in\" />\n			</form>\n			<div class=\"blockquote-container\">\n				<blockquote>\n					<p>We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better.</p>\n					<footer>\n						<cite>\n							<span>Jeff Bezos</span>\n							Founder, Amazon\n						</cite>\n					</footer>\n				</blockquote>\n			</div>\n		</div>\n	</div>\n<!-- </div> -->";
  },"useData":true});
templates['searchOverlay'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"search-overlay\"></div>\n<div class=\"search-container\">\n	<form class=\"search__form\">\n		<label class=\"ref-icon-before ref-icon-before--search search__label-search\" for=\"site-search\"><span>Search:</span></label>\n		<input type=\"search\" name=\"search\" id=\"search\" placeholder=\"Search for app or developer\" class=\"search__input-search\" />\n	</form>\n	<!-- <div class=\"search__results-container\">\n		<h2>Apps</h2>\n		<ul>\n			<li>Lorem ipsum dolor</li>\n			<li>Lorem ipsum dolor</li>\n			<li>Lorem ipsum dolor</li>\n		</ul>\n	</div> -->\n</div>";
  },"useData":true});
})();