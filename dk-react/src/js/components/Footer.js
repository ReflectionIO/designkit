import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
			<div class="grid-container">
				<footer id="js-component-import--global-header" class="global-footer">
					<div class="grid__column grid__column--one-sixth">
						<div class="logo-footer"></div>
					</div>
					<ul class="grid__column grid__column--one-sixth">
						<li><a href="v2-about.html">Our Story</a></li>
						<li><a href="v2-product.html">Product</a></li>
						<li><a href="v2-pricing.html">Pricing</a></li>
						<li><a href="v2-careers.html">Careers</a></li>
						<li><a href="v2-faq.html">FAQs</a></li>
						<li><a href="v2-contact.html">Contact Us</a></li>
						<li><a href="v2-terms.html">Terms &amp; Conditions</a></li>
					</ul>
					<ul class="grid__column grid__column--one-sixth">
						<li><a href="v2-live-charts.html">Live App Charts</a></li>
						<li><a href="v2-blog.html">Blog</a></li>
						<li><a href="#">Lab</a></li>
						<li><a href="v2-store-data-apps.html">Store Data - Apps</a></li>
						<li><a href="v2-store-data-publishers.html">Store Data - Developers</a></li>
					</ul>
					<ul class="grid__column grid__column--one-sixth">
						<li><a href="v2-data-template.html">My Apps</a></li>
						<li><a href="v2-news.html">My News</a></li>
						<li><a href="v2-my-lists.html">My Lists</a></li>
					</ul>
					<ul class="grid__column grid__column--one-third">
						<li class="social-link"><a href="https://twitter.com/reflectionio" class="ref-icon-before--twitter" target="_blank"><span>Twitter</span></a></li>
						<li class="social-link"><a href="https://www.linkedin.com/company/reflection-io-ltd" class="ref-icon-before--linkedin" target="_blank"><span>LinkedIn</span></a></li>
						<li class="social-link"><a href="#" class="ref-icon-before--facebook" target="_blank"><span>Facebook</span></a></li>
						<li class="social-link"><a href="#" class="ref-icon-before--google-plus" target="_blank"><span>Google Plus</span></a></li>
					</ul>
					<p>&copy; 2016 Reflection.io</p>
				</footer>
			</div>
		);
	}
}