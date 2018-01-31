import React from "react";

import { Comment, Form, Button } from "semantic-ui-react";

class Comments extends React.Component {
  render() {
    return (
      <Comment.Group size="large">
        {this.props.comments
          ? this.props.comments.map((comment, key) => (
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
                  onClick={() => this.props.handleCommentDelete(key)}
                />
              </Comment>
            ))
          : null}

        <Form onSubmit={this.props.handleSubmit}>
          {/* <Form.Field>
            <input placeholder="Name" type="text" required ref="author" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Comment" type="text" ref="comment" />
          </Form.Field> */}
          <Form.Input
            placeholder="Name"
            name="name"
            onChange={this.props.handleSubmit}
          />
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
}

export default Comments;
