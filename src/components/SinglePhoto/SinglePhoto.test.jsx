import React from "react";

import { shallow } from "enzyme";

import SinglePhoto from "./SinglePhoto";

describe("SinglePhoto Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <SinglePhoto photo={{ id: "1", urls: { regular: "http" }, user: {} }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
