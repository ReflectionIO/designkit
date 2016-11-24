import React from "react";
import { Link } from "react-router";

export default class Footer extends React.Component {
	render() {
		return (
			<div class="grid-container">
				<footer id="js-component-import--global-header" class="global-footer">
					<div class="grid__column grid__column--one-sixth">
						<div class="logo-footer"></div>
					</div>
					<ul class="grid__column grid__column--one-sixth">
						<li><Link to="/" activeClassName="is-active">Home</Link></li>
						<li><Link to="about" activeClassName="is-active">About</Link></li>
						<li><Link to="product" activeClassName="is-active">Product</Link></li>
						<li><Link to="lab" activeClassName="is-active">Lab</Link></li>
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