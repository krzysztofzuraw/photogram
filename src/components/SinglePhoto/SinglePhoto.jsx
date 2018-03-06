import React from "react";

import Photo from "../Photo/Photo.jsx";
import CommentsContainer from "../Comments/CommentsContainer.jsx";

import "./SinglePhoto.css";

const SinglePhoto = props => {
  return (
    <div className="single-photo">
      <Photo
        id={props.photo.id}
        url={props.photo.urls.regular}
        user={props.photo.user}
      />
      <CommentsContainer />
    </div>
  );
};

export default SinglePhoto;
