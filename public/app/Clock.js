import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Clock extends Component {

    render() {

        return(
            <div>

                <div className="masthead">
                <h3 className="text-muted">Project name</h3>
                <nav>
                  <ul className="nav nav-justified">
                    <li><a href="/">Home</a></li>
                    <li><a href="/line">Line Chart</a></li>
                    <li><a href="/bar">Bar Chart</a></li>
                    <li><a href="/pie">Pie Chart</a></li>
                    <li><a href="/bubble">Bubble Chart</a></li>
                    <li><a href="/scatter">3D Scatter Chart</a></li>
                    <li><a href="/gauge">Gauge Chart</a></li>
                    <li><a href="/box">Box Plot</a></li>
                    <li className="active"><a href="/clock">Clock</a></li>   
                  </ul>
                </nav>
              </div>

              <h1>Here will be Clock</h1>

            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById('clock'))