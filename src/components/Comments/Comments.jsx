import React from "react";

import CommentsFormContainer from "./CommentsFormContainer";

import "./Comments.css";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <div className="comments-header">
        <span className="comments-header-title">Comments</span>
      </div>
      <div className="comments-list">
        {comments.map(comment => (
          <div className="comment">
            <h3>Cesar Farias</h3>
            <p>Damn, how awesome!</p>
          </div>
        ))}
      </div>
      <CommentsFormContainer />
    </div>
  );
};

export default Comments;
