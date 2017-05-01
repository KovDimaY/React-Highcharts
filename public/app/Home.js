import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from './partials/footer' 

class Home extends Component {

	render() {

        const chartStyle = {
            //marginLeft: '5%',
            width: '90%'
        };

		return(
			<div>

                <div className="masthead">
                <h3 className="text-muted">React Highcharts Practice</h3>
                    <nav>
                      <ul className="nav nav-justified">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/line">Line Chart</a></li>
                        <li><a href="/bar">Bar Chart</a></li>
                        <li><a href="/pie">Pie Chart</a></li>
                        <li><a href="/bubble">Bubble Chart</a></li>
                        <li><a href="/scatter">3D Scatter</a></li>
                        <li><a href="/gauge">Gauge Chart</a></li>
                        <li><a href="/combo">Combination</a></li>
                        <li><a href="/clock">Clock</a></li>                      
                      </ul>
                    </nav>
                  </div>

                  <div className="jumbotron">
                    <h1>Highcharts are Cool!</h1><br/>
                    <p><a href="https://www.highcharts.com/">Highcharts</a> is a charting library written in pure JavaScript, offering an easy way of adding 
                        interactive charts to your web site or web application. Highcharts currently supports line, 
                        spline, area, areaspline, column, bar, pie, scatter, angular gauges, arearange, areasplinerange, 
                        columnrange, bubble, box plot, error bars, funnel, waterfall and polar chart types.</p><br/>
                    
                    <p>It works in all modern mobile and desktop browsers including the iPhone/iPad 
                        and Internet Explorer from version 6. On iOS and Android, multitouch support 
                        provides a seamless user experience. Standard browsers use SVG for the graphics rendering. 
                        In legacy Internet Explorer graphics are drawn using VML.</p><br/>

                    <p>Here I tried to use some of the most important and popular charts as React.js components. 
                        Also in this application I used the concept of 
                        <a href="https://webpack.github.io/docs/multiple-entry-points.html"> multiple entry points </a> 
                        in my webpack config for the first time. So this app helped me to learn a lot of new stuff! 
                        Hope it will also help somebody else. :)</p><br/><br/> 

                    <p><a className="btn btn-lg btn-success" href="#charts-info" role="button">Read More About Charts</a></p>
                  </div> 

                  <div id="charts-info" className="row">
                    <div className="col-lg-4">
                      <h2>Line Chart</h2>
                      <img src={"images/charts/line-chart.png"} alt="Line Chart" style={ chartStyle }/>
                      <p>A line chart or line graph is a type of chart which displays information as a series of 
                          data points called 'markers' connected by straight line segments. It is a basic type of 
                          chart common in many fields. It is similar to a scatter plot except that the measurement 
                          points are ordered (typically by their x-axis value) and joined with straight line segments.<br/> <br/>  
                          A line chart is often used to visualize a trend in data over intervals of time – a time series – 
                          thus the line is often drawn chronologically. In these cases they are known as run charts.</p>
                      <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Line_chart" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                      <h2>Bar Chart</h2>
                      <img src={"images/charts/bar-chart.png"} alt="Bar Chart" style={ chartStyle }/>
                      <p>A bar chart or bar graph is a chart or graph that presents grouped data with rectangular bars with 
                          lengths proportional to the values that they represent. 
                          The bars can be plotted vertically or horizontally. 
                          A vertical bar chart is sometimes called a Line graph.<br/>  <br/>                
                          A bar graph is a chart that uses either horizontal or vertical 
                          bars to show comparisons among categories. One axis of the chart shows the specific 
                          categories being compared, and the other axis represents a discrete value. 
                          Some bar graphs present bars clustered in groups of more than one.</p>
                       <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Bar_chart" role="button">View details &raquo;</a></p>
                   </div>
                    <div className="col-lg-4">
                      <h2>Pie Chart</h2>
                      <img src={"images/charts/pie-chart.JPG"} alt="Pie Chart" style={ chartStyle }/>
                      <p>A pie chart (or a circle chart) is a circular statistical graphic which is divided
                          into slices to illustrate numerical proportion. In a pie chart, the arc length of 
                          each slice (and consequently its central angle and area), is proportional to the quantity 
                          it represents.<br/> <br/> 
                          Pie charts are very widely used in the business world and the mass media.
                          However, they have been criticized, and many experts recommend avoiding them, 
                          pointing out that research has shown it is difficult to compare different sections 
                          of a given pie chart, or to compare data across different pie charts.</p>
                      <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Pie_chart" role="button">View details &raquo;</a></p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <h2>Bubble Chart</h2>
                      <img src={"images/charts/bubble-chart.png"} alt="Bubble Chart" style={ chartStyle }/>
                      <p className="text-danger">Notice that <a href="https://www.npmjs.com/package/highcharts-more">highcharts-more</a>  module
                        is required for this kind of charts!</p>
                      <p>A bubble chart is a type of chart that displays three dimensions of data. 
                          Each entity with its triplet (v1, v2, v3) of associated data is plotted as a disk that 
                          expresses two of the vi values through the disk's xy location and the third through its size. 
                          Bubble charts can facilitate the understanding of social, economical, medical, 
                          and other scientific relationships.<br/> <br/> 
                          Bubble charts can be considered a variation of the scatter plot, in which the data points 
                          are replaced with bubbles. As the documentation for Microsoft Office explains, 
                          "You can use a bubble chart instead of a scatter chart if your data has three data 
                          series that each contain a set of values. The sizes of the bubbles are determined 
                          by the values in the third data series."</p>
                      <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Bubble_chart" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                      <h2>Scatter Plot</h2>
                      <img src={"images/charts/scatter-plot.png"} alt="Scatter Plot" style={ chartStyle }/>
                      <p className="text-danger">Notice that <a href="https://www.npmjs.com/package/highcharts-3d">highcharts-3d</a> module 
                        is required for 3D version of this chart!</p>
                      <p>A scatter plot (also called a scatter graph, scatter chart, scattergram, or scatter diagram)
                        is a type of plot or mathematical diagram using Cartesian coordinates to display values 
                        for typically two variables for a set of data. If the points are color-coded, one additional 
                        variable can be displayed. The data is displayed as a collection of points, each having 
                        the value of one variable determining the position on the horizontal axis and the value of the 
                        other variable determining the position on the vertical axis.</p>
                      <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Scatter_plot" role="button">View details &raquo;</a></p>
                   </div>
                    <div className="col-lg-4">
                      <h2>Gauge Chart</h2>
                      <img src={"images/charts/gauge-chart.png"} alt="Gauge Chart" style={ chartStyle }/>
                      <p className="text-danger">Notice that <a href="https://www.npmjs.com/package/highcharts-more">highcharts-more</a> and 
                      <a href="https://www.npmjs.com/package/highcharts-solid-gauge"> highcharts-solid-gauge</a> modules 
                        are required for this charts!</p>
                      <p>Gauge charts, also known as dial charts or speedometer charts, 
                        use needles to show information as a reading on a dial. It consists of a gauge axis 
                        (which contains the data range, color ranges, and intervals markers), 
                        needles, and a center pivot point.<br/> <br/> 
                        Gauge charts are useful for comparing values between a small number of variables either 
                        by using multiple needles on the same gauge or by using multiple gauges. On a gauge chart, 
                        the value for each needle is read against the colored data range or chart axis. 
                        This chart type is often used in executive dashboard reports to show key business indicators.</p>
                      <p><a className="btn btn-default" href="https://en.wikipedia.org/wiki/Speedometer" role="button">View details &raquo;</a></p>
                    </div>
                  </div>

                  <Footer />

			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('home'))