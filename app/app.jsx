import React, { Component } from 'react';
import Header from 'app/views/Header/Header.jsx';
import 'utils/detectBrowser.js';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div>
					<div className="App__Content container-fluid">
						{ this.props.children }
					</div>
				</div>
			</div>
		);
	}
}
