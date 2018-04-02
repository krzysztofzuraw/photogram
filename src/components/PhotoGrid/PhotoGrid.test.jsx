import React from "react";

import { shallow } from "enzyme";

import PhotoGrid from "./PhotoGrid";

describe("PhotoGrid Component", () => {
  it("renders correctly without photos", () => {
    const wrapper = shallow(<PhotoGrid photos={[]} isFetching={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with photos", () => {
    const photos = [
      {
        id: "1",
        urls: {
          small: "http"
        },
        user: {
          name: "Tom",
          links: {
            self: "https"
          }
        }
      }
    ];
    const wrapper = shallow(<PhotoGrid photos={photos} isFetching={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
