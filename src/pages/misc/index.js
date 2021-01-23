import React, { Component } from "react";
import Search from "../../components/search.js";
import "./misc.css";
import { withRouter } from "react-router-dom";

class Misc extends Component {
  render() {
    const page_url_path = this.props.location.pathname;
    const page_url = `${window.location.origin}${page_url_path}`;
    return (
      <div className="z2 slider">
        <Search />
        <div id="google_translate_element"></div>
        <div className="sharethis-inline-reaction-buttons"></div>
        <div className="sharethis-inline-share-buttons"></div>
        <div
          className="fb-comments"
          data-href={page_url}
          data-width="device-width"
          data-numposts="5"
        ></div>
      </div>
    );
  }
}

export default withRouter(Misc);
