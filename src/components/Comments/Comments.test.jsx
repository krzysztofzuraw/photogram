import React from "react";

import { shallow } from "enzyme";

import Comments from "./Comments";

describe("Comments Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Comments comments={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
