import React from "react";

import { connect } from "react-redux";

import { addComment } from "../../actions/index.js";

const CommentsFormContainer = ({ dispatch }) => {
  return (
    <div className="form-wrapper">
      <form
        className="comment-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(addComment("1", "Tom", "Cool picture"));
        }}
      >
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
  );
};

export default connect()(CommentsFormContainer);
