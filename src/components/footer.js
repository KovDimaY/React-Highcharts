// Node modules import
import React, { Component } from 'react';

export default class Footer extends Component {

	render(){
		return(
		   <footer>
  				<div className="content-padding">
  					<div className="footer-content">
  						<p>Copyright &copy; Dmytro Kovalenko ;)</p>

  						<div className="social-media-icons">
								<a target="_blank" href="https://github.com/KovDimaY/React-Highcharts" className="footer-github"><i className="fa fa-github"></i></a>
  							<a target="_blank" href="https://www.facebook.com/dmytro.kovalenko.1004" className="footer-facebook"><i className="fa fa-facebook"></i></a>
  							<a target="_blank" href="https://www.vk.com/id11545172" className="footer-vk"><i className="fa fa-vk"></i></a>
  							<a target="_blank" href="https://www.linkedin.com/in/kovalenkodmytro" className="footer-linkedin"><i className="fa fa-linkedin"></i></a>
  						</div>
  					</div>
  				</div>
			</footer>
		);
	}
}
