import React, { Component } from "react";

import "./Loader.scss";

export default ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-container">
      <div className="loader" />
    </div>
  ) : null;
};
