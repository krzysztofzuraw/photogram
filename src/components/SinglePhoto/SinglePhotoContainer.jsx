import React from "react";
import { connect } from "react-redux";

import SinglePhoto from "./SinglePhoto.jsx";

const SinglePhotoContainer = props => <SinglePhoto photo={props.photo} />;

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos.photos.find(element => {
    return element.id === ownProps.match.params.photoId;
  })
});

export default connect(mapStateToProps)(SinglePhotoContainer);
