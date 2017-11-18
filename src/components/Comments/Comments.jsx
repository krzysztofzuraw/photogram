import React from "react";
import { connect } from "react-redux";

import { Comment, Form, Button } from "semantic-ui-react";
import { addComment, removeComment } from "../../actions/index.js";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete(position) {
    this.props.removeComment(position);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.refs.author.value, this.refs.comment.value);
    this.refs.author.value = "";
    this.refs.comment.value = "";
  }

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
                  onClick={() => this.handleCommentDelete(key)}
                />
              </Comment>
            ))
          : null}

        <Form onSubmit={this.handleSubmit}>
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
}

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments[ownProps.photo.id] || []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (author, comment) =>
    dispatch(addComment(ownProps.photo.id, author, comment)),
  removeComment: position =>
    dispatch(removeComment(ownProps.photo.id, position))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
