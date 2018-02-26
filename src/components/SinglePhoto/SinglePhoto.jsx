import React from "react";

import Photo from "../Photo/Photo.jsx";

import CoversationIcon from "../Photo/ConversationIcon";

import "./SinglePhoto.css";

const SinglePhoto = props => {
  return (
    <div className="single-photo">
      <Photo
        id={props.photo.id}
        url={props.photo.urls.regular}
        user={props.photo.user}
        style={{ maxWidth: 1000 }}
      />
      <div className="comments">
        <div className="comments-header">
          <span className="comments-header-titile">Comments</span>
          <span className="comments-header-icon">
            <CoversationIcon width={30} height={30} />
          </span>
          <span className="comments-header-count">30</span>
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
    </div>
  );
};

export default SinglePhoto;
