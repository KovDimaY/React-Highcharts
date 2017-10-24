// Node modules import
import React, { Component } from 'react';

// This component is a simple header for the page
export default class Header extends Component {

  makeActiveBasedOnPath(path) {
    if (this.props.location === path) {
      return "active";
    }
    return "";
  }

  render() {
    const path = {
      home: "/",
      line: "/line",
      bar: "/bar",
      pie: "/pie",
      scatter: "/scatter",
      other: "/other",
      clock: "/clock"
    }
    return (
      <div className='header'>
        <div className="masthead">
          <h3 className="text-muted">React Highcharts Practice</h3>
          <nav>
            <ul className="nav nav-justified">
              <li className={this.makeActiveBasedOnPath(path.home)}>
                <a href={path.home}>Home</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.line)}>
                <a href={path.line}>Line</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.bar)}>
                <a href={path.bar}>Bar</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.pie)}>
                <a href={path.pie}>Pie</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.scatter)}>
                <a href={path.scatter}>Scattering</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.other)}>
                <a href={path.other}>Other</a>
              </li>
              <li className={this.makeActiveBasedOnPath(path.clock)}>
                <a href={path.clock}>Clock</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
