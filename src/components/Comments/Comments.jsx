import React from "react";
import PropTypes from "prop-types";

import CommentsFormContainer from "./CommentsFormContainer";

import "./Comments.css";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments-header">
        <span className="comments-header-title">Comments</span>
      </div>
      <div className="comments-list">
        {comments.map((comment, key) => (
          <div className="comment" key={key}>
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <CommentsFormContainer />
    </div>
  );
};

Comments.PropTypes = {
  comments: PropTypes.array
};

export default Comments;
