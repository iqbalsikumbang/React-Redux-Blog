import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Slide from "../../components/Slide";
import { GirlGroup } from "../../redux/actions/postActions";

class gGroup extends Component {
  componentDidMount() {
    this.props.GirlGroup();
  }

  render() {
    const { groupImgOne, groupImgTwo, groupImgThree, groupImgFour, title1, title2, title3, title4, body1, body2, body3, body4, body5, body6, body7, body8 } = this.props.post || {}
    const slide = this.props.post ? (
      <Slide
        img1={groupImgOne}
        img2={groupImgTwo}
        img3={groupImgThree}
        img4={groupImgFour}
        title1={title1}
        title2={title2}
        title3={title3}
        title4={title4}
        body1={body1}
        body2={body2}
        body3={body3}
        body4={body4}
        body5={body5}
        body6={body6}
        body7={body7}
        body8={body8}
      />
    ) : (
      <div className="center">Loading slide...</div>
    );

    return (
      <React.Fragment>
        {slide}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.gGroup;
  return {
    post: state.posts.girlGroup.find((post) => post.groupName === id),
  };
};

export default connect(mapStateToProps, { GirlGroup })(gGroup);
