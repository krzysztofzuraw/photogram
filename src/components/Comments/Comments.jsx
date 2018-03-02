import React from "react";

import "./Comments.css";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments-header">
        <span className="comments-header-title">Comments</span>
      </div>
      <div className="comments-list">
        <div className="comment">
          <h3>Cesar Farias</h3>
          <p>Damn, how awesome!</p>
        </div>
        <div className="comment">
          <h3>Cesar Farias</h3>
          <p>Damn, how awesome!</p>
        </div>
        <div className="comment">
          <h3>Cesar Farias</h3>
          <p>Damn, how awesome!</p>
        </div>
      </div>
      <div className="form-wrapper">
        <form className="comment-form">
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            className="form-input"
          />
          <textarea
            id="msg"
            name="user_message"
            placeholder="Message"
            className="form-input"
          />
          <input type="submit" value="Submit" className="form-button" />
        </form>
      </div>
    </div>
  );
};

export default Comments;
