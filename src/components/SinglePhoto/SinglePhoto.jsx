import React from "react";

import Photo from "../Photo/Photo.jsx";
import CommentsContainer from "../Comments/CommentsContainer.jsx";

import "./SinglePhoto.css";

function SinglePhoto(props) {
  const { photo } = props;
  return (
    <div className="single-photo">
      <Photo photo={photo} />
      <CommentsContainer photo={photo} />
    </div>
  );
}

export default SinglePhoto;
