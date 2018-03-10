import React from "react";

const Error = ({ message, onClick }) => {
  return (
    <div>
      <span>There was some error with fetching data from the server.</span>
      <span>Error message: {message}</span>
      <button>Retry?</button>
    </div>
  );
};

export default Error;
