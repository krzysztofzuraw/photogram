import React from "react";
import { connect } from "react-redux";

import { Comment, Header, Form, Button } from "semantic-ui-react";
import { addComment } from "../../actions/index.js";

// function Comments() {
//   return (
//     <Comment.Group>
//       <Header as="h3" dividing>
//         Comments
//       </Header>

//       <Comment>
//         <Comment.Content>
//           <Comment.Author as="a">Matt</Comment.Author>
//           <Comment.Metadata>
//             <div>Today at 5:42PM</div>
//           </Comment.Metadata>
//           <Comment.Text>How artistic!</Comment.Text>
//           <Comment.Actions>
//             <Comment.Action>Reply</Comment.Action>
//           </Comment.Actions>
//         </Comment.Content>
//       </Comment>
//     </Comment.Group>
//   );
// }

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment("anon", "You are cool!");
  }

  render() {
    return (
      <Form reply onSubmit={this.handleSubmit}>
        <Form.TextArea />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
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
