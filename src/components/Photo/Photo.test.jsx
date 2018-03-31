import React from "react";

import { shallow } from "enzyme";

import Photo from "./Photo";

describe("Photo Component", () => {
  it("renders correctly", () => {
    const props = {
      id: "1",
      url: "https",
      user: {
        name: "Tom",
        links: {
          self: "https"
        }
      },
      style: {},
      commentsSum: 0,
      likesSum: 0,
      handleLike: jest.fn()
    };
    const wrapper = shallow(<Photo {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
