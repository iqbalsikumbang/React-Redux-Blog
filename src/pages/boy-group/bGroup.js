import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slide from "../../components/Slide";
import Swipers from "../../components/Swiper"

import { connect } from "react-redux";
import { BoyGroup } from "../../redux/actions/postActions";

class bGroup extends Component {
  componentDidMount() {
    this.props.BoyGroup();
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

    const { members } = this.props.post || {}

    const swipe = (
      <Swipers members={members} />
    )
    
    return (
      <React.Fragment>
        {/* {swipe} */}
        {slide}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.bGroup;

  return {
    post: state.posts.boyGroup.find(post => post.groupName === id),
  };
};

export default connect(mapStateToProps, { BoyGroup })(bGroup);
