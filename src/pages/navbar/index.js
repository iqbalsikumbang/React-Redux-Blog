import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import $ from "jquery";

class Navbar extends Component {
  render() {
    $(document).ready(function () {
      $(".menu-toggle").click(function () {
        $("nav").toggleClass("active");
      });
      // add padding top to show content behind navbar
      $("body").css("padding-top", $("header").outerHeight() + "px");

      //////////////////////// detect scroll top or down
      if ($(".smart-scroll").length > 0) {
        // check if element exists
        var last_scroll_top = 0;
        $(window).on("scroll", function () {
          var scroll_top = $(this).scrollTop();
          if (scroll_top < last_scroll_top) {
            $(".smart-scroll")
              .removeClass("scrolled-down")
              .addClass("scrolled-up");
          } else {
            $(".smart-scroll")
              .removeClass("scrolled-up")
              .addClass("scrolled-down");
          }
          last_scroll_top = scroll_top;
        });
      }
    });

    return (  
      <><div id="fb-root"></div>
        <header className="smart-scroll">
          <nav className="active">
            <ul>              
                <li className="home">
                  <Link to="/">Sakato</Link>
                </li><hr /> 
                <li className="menu">
                  <Link to="/news">News</Link>
                </li><hr />
                <li className="menu">
                  <Link
                    to="/boy-group"
                  >
                    Boy Group</Link>
                </li><hr />
                <li className="menu">
                  <Link
                    to="/girl-group"
                  >
                    Girl Group</Link>
                </li><hr />
                <li className="search">
                  <a href="#search">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
            </ul>
          </nav>
          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
