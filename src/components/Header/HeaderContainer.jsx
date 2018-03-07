import React from "react";
import { connect } from "react-redux";

import Header from "./Header";

import { removePhotos, fetchPhotos } from "../../actions";

export default connect(null, { removePhotos, fetchPhotos })(Header);
