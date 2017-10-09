import React from "react";
import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";

import "./Photo.css";

function Photo(props) {
  const { id, description, urls } = props.photo;
  const { renderSmall } = props;
  const imageUrl = renderSmall ? urls.small : urls.regular;

  return (
    <Card className="photo-card">
      <Link to={`/photo/${id}`}>
        <Image src={imageUrl} />
      </Link>
      <Card.Content>
        <Card.Header>My Photo</Card.Header>
        <Card.Meta>Meta</Card.Meta>
        <Card.Description>{description || "No description"}</Card.Description>
      </Card.Content>
      <Card.Content extra>Likes: 22 Comments: 1</Card.Content>
    </Card>
  );
}

export default Photo;
