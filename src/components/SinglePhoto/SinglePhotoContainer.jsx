import React from "react";
import { connect } from "react-redux";

import SinglePhoto from "./SinglePhoto.jsx";

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos.find(element => {
    return element.id === ownProps.match.params.photoId;
  })
});

const SinglePhotoContainer = connect(mapStateToProps)(SinglePhoto);

export default SinglePhotoContainer;
