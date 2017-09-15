import React from 'react';
import Photo from '../Photo/Photo.jsx';
import { Grid, Header } from 'semantic-ui-react'

import './PhotoGrid.css'

function PhotoGrid () {
    return (
      <div>
        <Header as='h1' textAlign='center' className="photo-grid-header">
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

export default PhotoGrid;

