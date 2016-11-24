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

				<section class="home-section home-section--one" id="how">
					<div class="home-section-content-container">
						<div class="home-section-content-left revenue-illustration">
							<ul class="revenue-tabs-list">
								<li>
									<img src="images/ClashClans_Icon_92px@2x.jpg" alt="Clash of Clans app icon" />
									<div>
										<h2>Clash of Clans</h2>
										<h3>Supercell</h3>
									</div>
									<span class="numeric-value">$ 175,009</span>
								</li>
								<li>
									<img src="images/Spotify_Icon_92px@2x.jpg" alt="Spotify app icon" />
									<div>
										<h2>Spotify</h2>
										<h3>Spotify, Inc</h3>
									</div>
									<span class="numeric-value">$ 130,167</span>
								</li>
								<li>
									<img src="images/Tindr_Icon_92px@2x.jpg" alt="Tinder app icon" />
									<div>
										<h2>Tinder</h2>
										<h3>Tinder, Inc</h3>
									</div>
									<span class="numeric-value">$ 85,281</span>
								</li>
							</ul>
							<p class="revenue-tabs-list-p">*Mock Data Displayed</p>
						</div>
						<div class="home-section-content-right home-section-text-content">
							<h2>Build a Picture of the Entire App Market</h2>
							<p>Track revenue and downloads for the top apps and publishers in any app store, country or category. Identify trends that can inform your own product development, marketing or research.</p>
							<p class="home-section__more-link"><a href="v2-product.html">Learn More About Tracking the Market</a></p>
						</div>
					</div>
				</section>

				<section class="home-section home-section--two">
					<div class="home-section-content-container">
						<div class="home-section-content-left home-section-text-content">
							<h2>Automated Alerts</h2>
							<p>Save time and effort keeping track of the apps and publishers you’re following with customisable, automated alerts for key events</p>
							<p class="home-section__more-link"><a href="v2-product.html">Learn More About Alerts</a></p>
						</div>
						<div class="home-section-content-right home-section-notifications-content">
							<ul class="notifications-tabs-list">
								<li>
									<img src="images/Deezr_Icon_92px@2x.jpg" alt="Deezer Music app icon" />
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
									<img src="images/MonumentValley_Icon_92px@2x.jpg" alt="Monument Valley app icon" />
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
					</div>				
				</section>

				<section class="home-section home-section--three">
					<div class="home-section-content-container">
						<div class="home-section-content-left networks-illustration">
							<picture>
								<source srcSet="images/LinkAccountsIllustration-Wide@2x.png" media="(min-width: 1600px)" />
								<source srcSet="images/LinkAccountsIllustration@2x.png" />
								<img src="images/LinkAccountsIllustration@2x.png" alt="" />
							</picture>
						</div>
						<div class="home-section-content-right home-section-text-content">
							<h2>All Your Own Data in One Place</h2>
							<p>Link multiple app store or ad network accounts to analyse all the data you need for your own apps in one interactive dashboard. Get live feedback on how youre performing with automatic alerts.</p>
							<p class="home-section__more-link"><a href="v2-product.html">Learn More About Analytics for Your Apps</a></p>
						</div>
					</div>
				</section>

				<section class="home-section-quote">
					<blockquote>
						<p>We've been hunting for a reliable app market data provider that saves not just money but time. We've finally found it.</p>
						<footer>
							<cite>
								<span>Saad Choudri</span>
								Chief Commercial Officer - Miniclip
							</cite>
						</footer>
					</blockquote>
				</section>

				<section class="home-section-trusted-by grid-container">
					<h2 class="section-title">Trusted by Top Names in Industry</h2>
					<ul class="logo-list">
						<li><img src="images/logo-sega.png" alt="Sega logo" /></li>
						<li><img src="images/logo-fox.png" alt="Fox logo" /></li>
						<li><img src="images/logo-nordeus.png" alt="Nordeus logo" /></li>
						<li><img src="images/logo-squareenix.png" alt="Square Enix logo" /></li>
						<li><img src="images/logo-toca.png" alt="Toca Boca logo" /></li>
						<li><img src="images/logo-sky.png" alt="Sky logo" /></li>
						<li><img src="images/logo-miniclip.png" alt="Miniclip logo" /></li>
						<li><img src="images/logo-coffeestainstudios.png" alt="Coffee Stain Studios logo" /></li>
						<li><img src="images/logo-soundcloud.png" alt="Soundcloud logo" /></li>
						<li><img src="images/logo-bbc.png" alt="BBC logo" /></li>
						<li><img src="images/logo-wooga.png" alt="Wooga logo" /></li>
						<li><img src="images/logo-innogames.png" alt="Inno Games logo" /></li>
						<li><img src="images/logo-swiftkey.png" alt="Swiftkey logo" /></li>
						<li><img src="images/logo-bossa.png" alt="Bossa Studios logo" /></li>
						<li><img src="images/logo-endemol.png" alt="Endemol logo" /></li>
						<li><img src="images/logo-maginteractive.png" alt="Mag Interactive logo" /></li>
					</ul>
				</section>

				<section class="home-section-featured-in">
					<h2 class="section-title">Featured In</h2>
					<ul class="featured-in-list">
						<li><img src="images/logo-businessinsider.png" alt="Business Insider logo" /></li>
						<li><img src="images/logo-guardian.png" alt="The Guardian logo" /></li>
						<li><img src="images/logo-techcrunch.png" alt="Tech Crunch logo" /></li>
						<li><img src="images/logo-mashable.png" alt="Mashable logo" /></li>
						<li><img src="images/logo-forbes.png" alt="Forbes logo" /></li>
						<li><img src="images/logo-pocketgamer.png" alt="Pocket Gamer logo" /></li>
					</ul>
				</section>

				<section class="home-section-sign-up">
					<h2 class="section-title">Sign up for free and see how Reflection can help you understand the way the app market works</h2>
					<a href="v2-sign-up.html" class="ref-button--primary--large">Sign Up for Free</a>
				</section>
			</div>
		);
	}
}