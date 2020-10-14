import React, { Component } from 'react';
import { Link } from 'react-router';

const path = {
  home: '/',
  line: '/line',
  bar: '/bar',
  pie: '/pie',
  scatter: '/scatter',
  other: '/other',
  playground: '/playground',
};

export default class Header extends Component {
  makeActiveBasedOnPath(path) {
    if (this.props.location === path) {
      return 'active';
    }
    return '';
  }

  render() {
    return (
      <div className="header">
        <div className="masthead">
          <h3 className="text-muted">React Highcharts Practice</h3>
          <nav>
            <ul className="nav nav-justified">
              <li className={this.makeActiveBasedOnPath(path.home)}>
                <Link to={path.home}>Home</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.line)}>
                <Link to={path.line}>Line</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.bar)}>
                <Link to={path.bar}>Bar</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.pie)}>
                <Link to={path.pie}>Pie</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.scatter)}>
                <Link to={path.scatter}>Scattering</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.other)}>
                <Link to={path.other}>Other</Link>
              </li>
              <li className={this.makeActiveBasedOnPath(path.playground)}>
                <Link to={path.playground}>Playground</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
