import React from "react";
import { connect } from "react-redux";

import Comments from "./Comments.jsx";

// import { addComment } from "../../actions/index.js";

// class CommentsContainer extends React.Component {
//   // handleSubmit(event, { name, value }) {
//   //   event.preventDefault();
//   //   debugger;
//   //   this.props.addComment(this.refs.author.value, this.refs.comment.value);
//   //   this.refs.author.value = "";
//   //   this.refs.comment.value = "";
//   // }

//   render() {
//     return <Comments comments={this.props.comments} />;
//   }
// }

// // const mapDispatchToProps = (dispatch, ownProps) => ({
// //   addComment: (author, comment) =>
// //     dispatch(addComment(ownProps.photo.id, author, comment))
// // });

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments
});
export default connect(mapStateToProps)(Comments);
