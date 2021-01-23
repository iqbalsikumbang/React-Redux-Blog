import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GirlGroup } from "../../redux/actions/postActions";
import Groups from "../../components/Groups";

class index extends Component {
  componentDidMount() {
    this.props.GirlGroup();
  }
  render() {
    const groups = this.props.posts.map((group) => {
      const { groupName, fandomName, company, groupImgOne } = group;
      return (
        <Link key={groupName} to={`/girl-group/${groupName}`}>
          <Groups
            name={groupName}
            fandomName={fandomName}
            company={company}
            img={groupImgOne}
          />
        </Link>
      );
    });

    return <div className="container">{groups}</div>;
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.girlGroup,
});

export default connect(mapStateToProps, { GirlGroup })(index);
