import React from 'react';
import Photo from '../Photo/Photo.jsx';
import { Grid } from 'semantic-ui-react'

import './PhotoGrid.css'

function PhotoGrid () {
    return (
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
    );
}

export default PhotoGrid;

