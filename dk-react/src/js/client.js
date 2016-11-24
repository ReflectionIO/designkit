import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Layout from "./pages/Layout";
import Product from "./pages/Product";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="product" component={Product}></Route>
			<Route path="lab" component={Lab}></Route>
		</Route>
	</Router>,
app);