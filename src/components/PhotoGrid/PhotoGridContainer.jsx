import React from "react";
import { connect } from "react-redux";

import { fetchPhotos } from "../../actions/index.js";

import PhotoGrid from "./PhotoGrid";

class PhotoGridContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return <PhotoGrid photos={this.props.photos} />;
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGridContainer);
