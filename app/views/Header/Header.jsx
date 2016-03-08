import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './index.scss';

class Header extends Component {
	render() {
		return (
			<div className="Header navbar">
				<IndexLink to="/" className="Title">
					<span className="Text">
					Header
					<i className="glyphicon glyphicon-glass" />
					</span>
				</IndexLink>
			</div>
		);
	}
};

export default Header;
