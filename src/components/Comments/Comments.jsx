import React from "react";

import { Comment, Form, Button } from "semantic-ui-react";

function Comments(props) {
  return (
    <Comment.Group size="large">
      {props.comments
        ? props.comments.map((comment, key) => (
            <Comment key={key}>
              <Comment.Content>
                <Comment.Author>{comment.author}</Comment.Author>
                <Comment.Text>{comment.text}</Comment.Text>
              </Comment.Content>
              <Button
                content="Delete comment"
                labelPosition="left"
                icon="delete"
                secondary
                onClick={() => props.handleCommentDelete(key)}
              />
            </Comment>
          ))
        : null}

      <Form onSubmit={props.handleSubmit}>
        <Form.Field>
          <input placeholder="Name" type="text" required ref="author" />
        </Form.Field>
        <Form.Field>
          <input placeholder="Comment" type="text" ref="comment" />
        </Form.Field>
        <Button
          content="Add comment"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}

export default Comments;
