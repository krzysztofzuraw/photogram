import React from "react";
import { connect } from "react-redux";

import Photo from "../Photo/Photo.jsx";
import Comments from "../Comments/Comments.jsx";

import "./SinglePhoto.css";

class SinglePhoto extends React.Component {
  render() {
    const { photo } = this.props;
    return (
      <div className="single-photo">
        <Photo photo={photo} renderSmall={false} />
        <Comments photo={photo} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos.photos.find(element => {
    return element.id === ownProps.match.params.photoId;
  })
});

export default connect(mapStateToProps)(SinglePhoto);
