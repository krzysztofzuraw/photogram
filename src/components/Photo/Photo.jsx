import React from "react";
import { Link } from "react-router-dom";

import "./Photo.css";

import UserIcon from "./UserIcon";
import HearthIcon from "./HearthIcon";
import ConversationIcon from "./ConversationIcon";

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { likes: 0 };
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const { id, url, user: { name, links: { self } }, style } = this.props;
    return (
      <div className="photo" style={style}>
        <div className="photo-header">
          <UserIcon width={30} height={30} />
          <a href={self} className="photo-author">
            {name}
          </a>
        </div>
        <Link to={`/photo/${id}`}>
          <img alt="placeholder" className="photo-img" src={url} />
        </Link>
        <div className="photo-meta">
          <HearthIcon width={30} height={30} onClickHandler={this.handleLike} />
          <span>{this.state.likes}</span>
          <ConversationIcon width={30} height={30} />
          <span>20</span>
        </div>
      </div>
    );
  }
}

export default Photo;
