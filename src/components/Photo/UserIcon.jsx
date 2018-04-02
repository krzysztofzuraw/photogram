import React from "react";
import PropTypes from "prop-types";

const UserIcon = props => {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className="user-icon"
    >
      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
    </svg>
  );
};

UserIcon.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default UserIcon;
