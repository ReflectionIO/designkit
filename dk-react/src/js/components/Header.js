import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			// state properties
			title: "Sign Up",
		};
	}

	changeTitle(e) {
		const title = e.target.value;
		this.setState({title});
	}

	render() {
		var session = "Log In";
		if(this.props && this.props.session) {
			session = this.props.session;
		}

		// TODO: render the correct header depending on props.session

		return (
			<div>
				<header id="js-component-import--global-header" class="global-header">
					<div class="hamburger">
						<button class="hamburger__button ref-icon-before--hamburger js-hamburger-button"></button>
					</div>
					<div class="site-logo">
						<Link to="/">
							<img src="images/logo-reflection-header.png" alt="Reflection logo" class="img-site-logo" />
						</Link>
					</div>
					<div class="global-header__actions">
						<div class="search-link-container js-search-text-container">
							<label for="searchappstore" class="search-stores-label">Find App or Publisher</label>
							<input onChange={this.changeTitle.bind(this)} type="text" name="searchappstore" id="searchappstore" class="js-get-items" autocomplete="off" />
							<span for="searchappstore" class="search-icon ref-icon-after--search js-search-icon"></span>
							<a href="#" class="clear-search ref-icon-after--close js-clear-search">Clear</a>
							<img src="images/loadingSpinner.gif" alt="Loading" class="search-loading-indicator js-search-loading-indicator" />
						</div>
						<div class="link-log-in-container js-link-log-in-container">
							<a href="#" class="link-log-in js-link-log-in">{session}</a>
						</div>	
						<a href="v2-sign-up.html" class="header__sign-up-button ref-button--primary--small">{this.state.title}</a>
					</div>
				</header>
			</div>
		);
	}
}