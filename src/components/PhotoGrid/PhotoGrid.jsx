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
    return (
      <div>
        <Header as="h1" textAlign="center" className="photo-grid-header">
          Unsplashgram
        </Header>
        <Grid columns={3} className="photo-grid">
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>

          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>

          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>

          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>

          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
          <Grid.Column className="photo-grid-column">
            <Photo />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
