import React from "react";

export default class Product extends React.Component {
	render() {
		return (
			<div>
				<section class="product-section-head">
					<div class="product-section-head__content-container">
						<div class="product-section-head__text">
							<h1 class="page-title">Why Use Reflection</h1>
							<p>We help you make better informed business decisions by making the performance of the app market easy to track.</p>
							<ul class="product-slideshow-thumbnails js-deck-slides-thumbs">
								<li class="is-current"><a href="#" data-index="1">1</a></li>
								<li><a href="#" data-index="2" data-index="2">2</a></li>
								<li><a href="#" data-index="3" data-index="3">3</a></li>
							</ul>
						</div>

						<ul class="product-slideshow js-deck-slides">
							<li class="is-current"><img src="images/product-screen-1.jpg" /></li>
							<li><img src="images/product-screen-2.jpg" /></li>
							<li><img src="images/product-screen-3.jpg" /></li>
						</ul>
					</div>
				</section>

				<section class="product-section product-section-one">
					<div class="product-section-one__content-container">
						<div class="product-section-content-left">
							<img src="images/Track_Market_Illustration@2x.jpg" alt="Revenue and Downloads screenshot" />
						</div>
						<div class="product-section-content-right">
							<div class="product-section-text-content">
								<h2 class="section-title">We Help you Track Apps &amp; Developers</h2>
								<p>Track the revenue and downloads for apps and developers across app stores, categories and countries for any time period.</p>
							</div>
						</div>
					</div>
				</section>

				<section class="product-section product-section-two">
					<div class="product-section-two__content-container">
						<div class="product-section-content-left">
							<div class="product-section-text-content">
								<h2 class="section-title">Compare Apps and Developers Over Time</h2>
								<p>Interactive charts that make trends easy to identify. Overlay apps or countries for comparison and view key events to analyse their impact.</p>
							</div>
						</div>
						<div class="product-section-content-right">
							<img src="images/sign-up-messaging-chart.png" alt="Chartin Tools and Filters screenshot"/>
						</div>
					</div>
				</section>

				<section class="product-section product-section-three">
					<div class="product-section-three__content-container">
						<div class="product-section-content-left">
							<ul class="notifications-tabs-list">
								<li>
									<img src="images/placeholder-app-icon-deezer.png" alt="Deezer Music app icon" />
									<div>
										<h2>Deezer Music</h2>
										<h3>App Launched</h3>
										<span>1 min ago</span>
									</div>
									<a href="javascript:void(0)" class="ref-button--secondary--small">
				 						View on Chart
				 					</a>
								</li>
								<li>
									<img src="images/loading-demo-app-icon.png" alt="Monument Valley app icon" />
									<div>
										<h2>Monument Valley</h2>
										<h3>Price Change</h3>
										<span>2 hours ago</span>
									</div>
									<a href="javascript:void(0)" class="ref-button--secondary--small">
				 						View on Chart
				 					</a>
								</li>
							</ul>
						</div>
						<div class="product-section-content-right">
							<div class="product-section-text-content">
								<h2 class="section-title">Automated Alerts: Stay Up to Date with Key Events</h2>
								<p>Be alerted to key events such as app launches or price changes simply by following apps or publishers. Customise these alerts for an effortless way to receive the specific insight you need.</p>
							</div>
						</div>
					</div>
				</section>

				<section class="product-section product-section-four">
					<div class="product-section-four__content-container">
						<div class="product-section-content-left">
							<div class="product-section-text-content">
								<h2 class="section-title">Group Apps or Developers you Want to Follow in a Single Dashboard</h2>
								<p>Follow apps or developers to track competitors, research new product development and compare performance over time more easily.</p>
							</div>
						</div>
						<div class="product-section-content-right">
							<img src="images/sign-up-messaging-following.jpg" alt="Following screenshot"/>
						</div>
					</div>
				</section>

				<section class="product-section product-section-five">
					<div class="product-section-five__content-container">
						<div class="product-section-content-left">
							<img src="images/sign-up-messaging-all-in-one-place.jpg" alt="Ad Networks Data Chart screenshot"/>
						</div>
						<div class="product-section-content-right">
							<div class="product-section-text-content">
								<h2 class="section-title">Track Everything for Your Own Apps in One Place</h2>
								<p>Simply link your app store and ad network accounts and Reflection automatically tracks all
								the data you need for your own apps.<br/>Easily overlay other apps or developers to compare
								your performance against competitors.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}