import React from "react";

import Photo from "../Photo/Photo.jsx";
import Comments from "../Comments/Comments.jsx";

import "./SinglePhoto.css";

const SinglePhoto = props => {
  return (
    <div className="single-photo">
      <Photo
        id={props.photo.id}
        url={props.photo.urls.regular}
        user={props.photo.user}
      />
      <Comments />
    </div>
  );
};

export default SinglePhoto;
