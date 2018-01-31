import React from "react";

import { shallow } from "enzyme";

import PhotoGrid from "./PhotoGrid";

describe("PhotoGrid Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PhotoGrid photos={[{}]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
