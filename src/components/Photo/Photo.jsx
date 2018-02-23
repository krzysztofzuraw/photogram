import React from "react";

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
    const {
      urls: { small },
      user: { name, links: { self } }
    } = this.props.photo;
    return (
      <div className="photo">
        <div className="photo-header">
          <UserIcon width={30} height={30} />
          <a href={self} className="photo-author">
            {name}
          </a>
        </div>
        <img
          alt="placeholder"
          className="photo-img"
          onClick={() => console.log("redirect to photo")}
          src={small}
        />
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
