import React from "react";
import PropTypes from "prop-types";

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

Header.PropTypes = {
  removePhotos: PropTypes.func,
  fetchPhotos: PropTypes.func
};

export default Header;
