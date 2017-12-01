import React from "react";
import { connect } from "react-redux";

import Comments from "./Comments.jsx";

import { addComment, removeComment } from "../../actions/index.js";

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete(position) {
    this.props.removeComment(position);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.refs.author.value, this.refs.comment.value);
    this.refs.author.value = "";
    this.refs.comment.value = "";
  }

  render() {
    return (
      <Comments
        comments={this.props.comments}
        handleSubmit={this.handleSubmit}
        handleCommentDelete={this.handleCommentDelete}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments[ownProps.photo.id] || []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (author, comment) =>
    dispatch(addComment(ownProps.photo.id, author, comment)),
  removeComment: position =>
    dispatch(removeComment(ownProps.photo.id, position))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
