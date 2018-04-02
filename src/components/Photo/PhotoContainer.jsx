import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Photo from "./Photo";
import { addLike } from "../../actions";

export class PhotoContainer extends React.Component {
  handleLike = () => {
    const { addLike, id } = this.props;
    addLike(id);
  };

  render() {
    return <Photo {...this.props} handleLike={this.handleLike} />;
  }
}

PhotoContainer.PropTypes = {
  addLike: PropTypes.func,
  id: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  commentsSum: state.rootReducer.comments.filter(
    comment => comment.photoId === ownProps.id
  ).length,
  likesSum: state.rootReducer.likes.filter(id => id === ownProps.id).length
});

export default connect(mapStateToProps, { addLike })(PhotoContainer);
