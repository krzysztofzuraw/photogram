import React from "react";

import Photo from "../Photo/Photo.jsx";
import { Grid, Header } from "semantic-ui-react";

import "./PhotoGrid.css";

function PhotoGrid(props) {
  return (
    <div>
      <Header as="h1" textAlign="center" className="photo-grid-header">
        Unsplashgram
      </Header>
      <Grid columns={3} className="photo-grid">
        {props.photos.map((photo, key) => (
          <Grid.Column className="photo-grid-column" key={key}>
            <Photo photo={photo} renderSmall />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

export default PhotoGrid;
