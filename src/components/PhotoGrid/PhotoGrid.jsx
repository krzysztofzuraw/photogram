import React from "react";

import PhotoContainer from "../Photo/PhotoContainer.jsx";

import Header from "../Header/Header";

import "./PhotoGrid.css";

function PhotoGrid(props) {
  return (
    <div className="wrapper">
      <Header />
      {props.photos.map((photo, key) => (
        <div className="panel" key={key}>
          <PhotoContainer
            id={photo.id}
            url={photo.urls.small}
            user={photo.user}
            style={{ maxWidth: 400 }}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
