import React from "react";

import "./Header.css";

const Header = ({ removePhotos, fetchPhotos }) => {
  return (
    <header className="header">
      <span className="header-wrapper">
        <span className="header-text">Photogram</span>
        <button
          className="form-button"
          onClick={() => {
            removePhotos();
            fetchPhotos();
          }}
        >
          Refresh
        </button>
      </span>
    </header>
  );
};

export default Header;
