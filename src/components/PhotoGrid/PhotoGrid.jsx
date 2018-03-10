import React from "react";
import Spinner from "react-spinkit";

import PhotoContainer from "../Photo/PhotoContainer.jsx";
import HeaderContainer from "../Header/HeaderContainer";

import "./PhotoGrid.css";

const PhotoGrid = ({ photos, isFetching }) => {
  if (isFetching && !photos.length) {
    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="spinner-wrapper">
          <Spinner name="ball-spin-fade-loader" color="green" />
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <HeaderContainer />
      {photos.map((photo, key) => (
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
};

export default PhotoGrid;
