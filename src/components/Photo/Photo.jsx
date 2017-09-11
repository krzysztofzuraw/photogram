import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

import './Photo.css';

function Photo () {
    return (
        <Segment className="photo-segment">
            <Image src='http://via.placeholder.com/200x200' />
        </Segment>
    );
}

export default Photo;
