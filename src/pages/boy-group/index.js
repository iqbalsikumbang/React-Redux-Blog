import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { BoyGroup } from "../../redux/actions/postActions";
import Groups from "../../components/Groups";

class index extends Component {
  componentDidMount() {
    this.props.BoyGroup();
  }
  render() {
    const groups = this.props.posts.map((group) => {
      const { groupName, fandomName, company, groupImgOne } = group;
      return (
        <Link key={groupName} to={`/boy-group/${groupName}`}>
          <Groups
            name={groupName}
            fandomName={fandomName}
            company={company}
            img={groupImgOne}
          />
        </Link>
      );
    })
    

    return <div className="container">{groups}</div>;
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.boyGroup,
});

export default connect(mapStateToProps, { BoyGroup })(index);
