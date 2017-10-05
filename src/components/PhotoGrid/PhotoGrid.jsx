import React from "react";
import { connect } from "react-redux";

import Photo from "../Photo/Photo.jsx";
import { Grid, Header } from "semantic-ui-react";
import { fetchPhotos } from "../../actions/index.js";

import "./PhotoGrid.css";

class PhotoGrid extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <Header as="h1" textAlign="center" className="photo-grid-header">
          Unsplashgram
        </Header>
        <Grid columns={3} className="photo-grid">
          {photos.map((photo, key) => (
            <Grid.Column className="photo-grid-column" key={key}>
              <Photo />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
