import React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";
import { addLike } from "../../actions";

class PhotoContainer extends React.Component {
  state = { likes: 0 };

  handleLike = () => {
    debugger;
  };

  render() {
    return <Photo {...this.props} handleLike={this.handleLike} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentsSum: state.comments.filter(comment => comment.photoId === ownProps.id)
    .length
});

export default connect(mapStateToProps, { addLike })(PhotoContainer);
