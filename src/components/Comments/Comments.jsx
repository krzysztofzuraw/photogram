import React from "react";
import { connect } from "react-redux";

import { Comment, Header, Form, Button } from "semantic-ui-react";
import { addComment } from "../../actions/index.js";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.refs.author.value, this.refs.comment.value);
    this.refs.author.value = "";
    this.refs.comment.value = "";
  }

  render() {
    return (
      <Comment.Group>
        {this.props.comments.map((comment, key) => (
          <Comment key={key}>
            <Comment.Content>
              <Comment.Author>{comment.author}</Comment.Author>
              <Comment.Text>{comment.text}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}

        <Form onSubmit={this.handleSubmit} reply>
          <Form.Field>
            <input placeholder="Name" type="text" required ref="author" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Comment" type="text" ref="comment" />
          </Form.Field>
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (author, comment) =>
    dispatch(addComment(ownProps.photo.id, author, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
