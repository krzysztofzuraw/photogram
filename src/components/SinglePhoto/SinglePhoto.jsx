import React from "react";
import PropTypes from "prop-types";

import PhotoContainer from "../Photo/PhotoContainer.jsx";
import CommentsContainer from "../Comments/CommentsContainer.jsx";

import "./SinglePhoto.css";

const SinglePhoto = props => {
  return (
    <div className="single-photo">
      <PhotoContainer
        id={props.photo.id}
        url={props.photo.urls.regular}
        user={props.photo.user}
      />
      <CommentsContainer />
    </div>
  );
};

SinglePhoto.PropTypes = {
  photo: PropTypes.object
};

export default SinglePhoto;
