import React from "react";

import Photo from "../Photo/Photo.jsx";

import Header from "../Header/Header";

import "./PhotoGrid.css";

function PhotoGrid(props) {
  return (
    <div className="wrapper">
      <Header />
      {props.photos.map((photo, key) => (
        <div className="panel" key={key}>
          <Photo photo={photo} renderSmall />
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
