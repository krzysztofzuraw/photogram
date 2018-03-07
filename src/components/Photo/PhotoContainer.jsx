import React from "react";
import { connect } from "react-redux";

import Photo from "./Photo";
import { addLike } from "../../actions";

class PhotoContainer extends React.Component {
  handleLike = () => {
    const { addLike, id } = this.props;
    addLike(id);
  };

  render() {
    return <Photo {...this.props} handleLike={this.handleLike} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  commentsSum: state.comments.filter(comment => comment.photoId === ownProps.id)
    .length,
  likesSum: state.likes.filter(id => id === ownProps.id).length
});

export default connect(mapStateToProps, { addLike })(PhotoContainer);
