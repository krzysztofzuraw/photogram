import React from "react";

import Photo from "../Photo/Photo.jsx";
import Comments from "../Comments/Comments.jsx";

import './SinglePhoto.css';

export default function SinglePhoto() {
  return (
    <div className="single-photo">
      <Photo />
      <Comments />
    </div>
  );
}
