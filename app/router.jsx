import React, { Component } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import 'app/lib/bootstrap/bootstrap.min.js';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './app.jsx';
import Home from 'app/views/Home/Home.jsx';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'app/sass/main.scss';

export default class AppRouter extends Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path="/" component={ App }>
					<IndexRedirect to="home" />
					<Route path="home" component={ Home } />
				</Route>
			</Router>
		);
	}
}

$(() => {
	ReactDom.render(<AppRouter />, $('#main')[0]);
});
