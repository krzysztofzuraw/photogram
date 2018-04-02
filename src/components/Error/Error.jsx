import React from "react";
import PropTypes from "prop-types";

const Error = ({ message, onClick }) => {
  return (
    <div>
      <span>There was some error with fetching data from the server.</span>
      <span>Error message: {message}</span>
      <button>Retry?</button>
    </div>
  );
};

Error.PropTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default Error;
