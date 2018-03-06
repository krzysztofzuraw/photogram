import React from "react";
import { Link } from "react-router-dom";

import "./Photo.css";

import UserIcon from "./UserIcon";
import HearthIcon from "./HearthIcon";
import ConversationIcon from "./ConversationIcon";

const Photo = ({
  id,
  url,
  user: { name, links: { self } },
  style,
  commentsSum,
  likesSum,
  handleLike
}) => {
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
        <HearthIcon width={30} height={30} onClickHandler={handleLike} />
        <span>{likesSum}</span>
        <ConversationIcon width={30} height={30} />
        <span>{commentsSum}</span>
      </div>
    </div>
  );
};

export default Photo;
