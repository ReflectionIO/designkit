import React from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<LeftNav/>
				<div class="l-page-container">
					<div class="l-main">
						{this.props.children}
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}