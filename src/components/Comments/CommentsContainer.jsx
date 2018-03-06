import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Comments from "./Comments.jsx";

const mapStateToProps = (state, { match }) => ({
  comments: state.comments.filter(
    comment => comment.photoId === match.params.photoId
  )
});
export default withRouter(connect(mapStateToProps)(Comments));
