import React, { Component } from 'react';
import Places from './Places';
import '../App.css';

class Header extends Component {
	render () {
		return (
		<div className="App-header">
        <a id="navigation" className="menu" tabIndex={0} role="button" aria-label="Click on the menu to filter places">
        <div>
        </div>
        <h1 className="App-title">Coffee shops near Ante Starčević Square in Osijek, Croatia</h1>
        <div className="header-navigation-items">
            <ul>
                <li><a href="/">{}</a></li>
            </ul>
        </div>
       </a>
       </div>

		)
	}
}


export default Header;
