import React from "react";

import Photo from "../Photo/Photo.jsx";
import Comments from "../Comments/Comments.jsx";

import "./SinglePhoto.css";

function SinglePhoto(props) {
  const { photo } = props;
  return (
    <div className="single-photo">
      <Photo photo={photo} />
      <Comments photo={photo} />
    </div>
  );
}

export default SinglePhoto;
