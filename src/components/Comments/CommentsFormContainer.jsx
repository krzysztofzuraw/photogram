import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { addComment } from "../../actions";

class CommentsFormContainer extends React.Component {
  defaultState = { name: "", comment: "" };

  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { dispatch, match } = this.props;
    event.preventDefault();
    dispatch(
      addComment(match.params.photoId, this.state.name, this.state.comment)
    );
    this.setState(this.defaultState);
  };

  render() {
    return (
      <div className="form-wrapper">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-input"
            required
            value={this.state.name}
          />
          <textarea
            onChange={this.handleChange}
            id="comment"
            name="comment"
            placeholder="Message"
            className="form-input"
            required
            value={this.state.comment}
          />
          <input type="submit" value="Submit" className="form-button" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(CommentsFormContainer));
