import React from "react";

export default class Lab extends React.Component {
	render() {
		return (
			<div class="page-lab-base page-lab-home grid-container theme-dark">
				<div class="grid-column-lab-welcome data-lab-welcome-container">
					<h1 class="data-lab-welcome-heading"><span>Welcome to</span> The Reflection Data Lab</h1>
					<p>We are experimenting with new ways to unearth and communicate insights from our data here in the Data Lab.</p>
					<ul class="content-list">
						<li>Be inspired</li>
						<li>Discover intriguing trends</li>
						<li>Findings you can put to work</li>
					</ul>
				</div>
				<div class="grid-column-lab-welcome data-lab-illustration">
					<img src="images/lab-tubes@2x.png" alt="" />
				</div>
				<ul class="grid__row lab-article-list">
					<li class="lab-article-list__item">
						<a href="making-top-charts.html">
							<article class="lab-article-making-top-charts">
								<h2>What Downloads or Revenue are Needed to Break into the Top Charts?</h2>
							</article>
						</a>
					</li>
					<li>
						<article class="lab-brewing">
							<svg x="0px" y="0px"
     viewBox="0 0 58.4 99.6" enable-background="new 0 0 58.4 99.6" xmlSpace="preserve">
<path fill="#6D69C5" d="M51.6,70.4c0,12.3-10,22.4-22.4,22.4S6.8,82.8,6.8,70.4H51.6z" class="lab-bottle-liquid" />
<path fill="#5A5A68" d="M40.6,43.5V8.8h1.7c2.4,0,4.4-2,4.4-4.4S44.7,0,42.3,0H16.1c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4h1.1v35
    C6.7,48.5,0,58.8,0,70.4c0,16.1,13.1,29.2,29.2,29.2c16.1,0,29.2-13.1,29.2-29.2C58.4,58.7,51.3,48,40.6,43.5z M16.1,3h26.1
    c0.8,0,1.4,0.6,1.4,1.4c0,0.7-0.5,1.2-1.1,1.4H15.9c-0.6-0.1-1.1-0.7-1.1-1.4C14.7,3.6,15.4,3,16.1,3z M29.2,96.6
    C14.8,96.6,3,84.9,3,70.4c0-10.7,6.4-20.2,16.3-24.3l0.9-0.4V7h17.3v38.6l1,0.4c10.1,3.8,16.9,13.7,16.9,24.5
    C55.4,84.9,43.7,96.6,29.2,96.6z"/>
</svg>
							<p>More Visualisations are Currently Brewing...</p>
							<a href="v2-sign-up.html" class="ref-button--primary--medium">
		 						Sign Up to See Future Visualisations
		 					</a>
						</article>
					</li>
				</ul>
			</div>
		);
	}
}