import React from "react";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<section class="home-section-head">				
					<div class="home-section-head__text">
						<h1 class="page-title"><span>Reflection Helps You</span> <span>Understand the App Market</span></h1>
						<p>Track the performance of the world&#39;s top apps, publishers or your own sales with our affordable &amp; easy to use analysis platform.</p>
						<p><a href="#how" class="js-scroll-to-anchor">How Reflection Works</a></p>
					</div>
					<picture class="home-section-head__illustration">
						<source srcSet="images/Wide_Chart_Lines@2x.png" media="(min-width: 1280px)" />
						<source srcSet="images/Mid_Chart_Lines@2x.png" media="(min-width: 720px)" />
						<source srcSet="images/Mid_Chart_Lines@2x.png" />
					<img src="images/Mid_Chart_Lines@2x.png" />
				</picture>
					<span class="home-section-head__sm-text">*Mock Data Displayed</span>
				</section>
			</div>
		);
	}
}