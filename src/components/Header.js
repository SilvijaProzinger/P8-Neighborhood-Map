import React from 'react';
import Places from './Places';
import '../App.css';

const placeList = Places.list;

const Header = props => (
  <header className="App-header">
    <nav className="header-navigation">
        <div></div>
        <h1 className="App-title">Coffee shops near Ante Starčević Square in Osijek, Croatia</h1>
        <div className="spacer" />
        <div className="header-navigation-items">
            <ul>
                <li><a href="/">{placeList}</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Header;
