'use strict';

import React from 'react';
import { Link } from 'react-router';
import AuthorsMenu from './AuthorsMenu';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo center-block" src="https://facebook.github.io/react/img/logo.svg"/>
          </Link>
          <AuthorsMenu />
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>Sample Footer</p>
        </footer>
      </div>
    );
  }
}
