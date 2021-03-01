import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  scrollFunction = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  render() {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      this.scrollFunction();
    };
    return (
      <footer>
        <button onClick={this.topFunction} id="myBtn" title="Go to top">
          <i className="fas fa-arrow-up"></i>
        </button>
        <div className="container-fluid padding" id="connect">
          <div className="row text-center padding">
            <div className="col-12">
              <h2>Connect</h2>
            </div>
            <div className="col-12 social padding">
              <a href="https://www.facebook.com/sakato.web.1">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/sakatoweb">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/sakatoweb/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-12">
              <h3>Our Social Media</h3>
              <p></p>
            </div>
            <hr className="light-100" />
            <div className="col-12 es pt-2">              
              <marquee>sakato-web.netlify.app &copy; 2021</marquee>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
