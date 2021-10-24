import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="content-padding">
          <div className="footer-content">
            <p>Copyright &copy; Dmytro Kovalenko ;)</p>

            <div className="social-media-icons">
              <a
                className="footer-github"
                href="https://github.com/KovDimaY/React-Highcharts"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="footer-facebook"
                href="https://www.facebook.com/dmytro.kovalenko.1004"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="footer-vk"
                href="https://www.vk.com/id11545172"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-vk"></i>
              </a>
              <a
                className="footer-linkedin"
                href="https://www.linkedin.com/in/kovalenkodmytro"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
