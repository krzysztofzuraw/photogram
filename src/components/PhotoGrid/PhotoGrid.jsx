import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";

import PhotoContainer from "../Photo/PhotoContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Error from "../Error/Error";

import "./PhotoGrid.css";

const PhotoGrid = ({ photos, isFetching, errorMessage, fetchPhotos }) => {
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

  if (errorMessage && !photos.length) {
    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="spinner-wrapper">
          <Error errorMessage onClick={fetchPhotos()} />;
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

PhotoGrid.PropTypes = {
  photos: PropTypes.array,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  fetchPhotos: PropTypes.func
};
export default PhotoGrid;
