import React from "react";
import { connect } from "react-redux";

import { fetchPhotos } from "../../actions";

import PhotoGrid from "./PhotoGrid";

class PhotoGridContainer extends React.Component {
  componentDidMount() {
    if (!this.props.photos.length) {
      this.fetchPhotos();
    }
  }

  fetchPhotos = () => {
    this.props.fetchPhotos();
  };

  render() {
    return (
      <PhotoGrid
        photos={this.props.photos}
        errorMessage={this.props.errorMessage}
        fetchPhotos={this.fetchPhotos}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = state => ({
  photos: state.rootReducer.photos,
  isFetching: state.rootReducer.isFetching,
  errorMessage: state.rootReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGridContainer);
