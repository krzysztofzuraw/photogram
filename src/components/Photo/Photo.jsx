import React from 'react';
import { Image, Segment, Card } from 'semantic-ui-react';

import './Photo.css';

function Photo () {
    return (
        <Card className="photo-card">
            <Image src='http://via.placeholder.com/200x200' />
            <Card.Content>
                <Card.Header>
                    My Photo
                </Card.Header>
                <Card.Meta>
                    Meta
                </Card.Meta>
                <Card.Description>
                    My cool Description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                Likes: 22
                Comments: 1
            </Card.Content>
        </Card>
    );
}

export default Photo;

// https://react.semantic-ui.com/views/card use instead of segment
