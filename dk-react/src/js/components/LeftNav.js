import React from "react";
import { Link } from "react-router";

export default class LeftNav extends React.Component {
	render() {
		return (
			<div class="panel-left">
				<nav class="main-navigation" role="navigation">
					<ul>
						<li>
							<Link to="product">
								<svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" x="0px" xmlSpace="preserve" y="0px"><path d="M17.1,0.6L0,5.5v18.2L14.9,32L32,25.7V7.7L17.1,0.6z M29.3,8.6l-5.8,2L10.7,4.6l6.3-1.8 L29.3,8.6z M9.2,5l12.9,6.1L15,13.6L2,7.2V7L9.2,5z M2,8.3l12.5,6.1v15.1L2,22.6V8.3z M15.5,29.7V14.5L30,9.4v14.9L15.5,29.7z" fill="#5A5A68"></path></svg>
								<span>Product</span>
							</Link>
						</li>
						<li>
							<Link to="about">
								<svg enable-background="new 0 0 30 30" viewBox="0 0 30 30" x="0px" xmlSpace="preserve" y="0px"><path d="M29,4.4c-0.4,0-0.8,0-1.2,0V3.1h-0.4c-8.6,0-11.4,2-12.4,3.1c-0.9-1.1-3.8-3.1-12.4-3.1H2.2v1.3 c-0.4,0-0.8,0-1.2,0H0v19.3h1c10.6,0,12.7,2.4,13,2.8h2c0.3-0.5,2.5-2.8,13-2.8h1V4.4H29z M14.3,22.8c-1.5-1.1-4.6-2.3-11-2.4V5.1 c9.1,0.1,10.8,2.6,11,3V22.8z M26.7,20.4c-6.5,0.1-9.6,1.3-11,2.4V8.1c0.2-0.4,2-2.9,11-3V20.4z" fill="#5B5B68" /></svg>
								<span>About</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}