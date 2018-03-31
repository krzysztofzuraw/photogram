import React from "react";
import { mount } from "enzyme";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";

import { ADD_LIKE } from "../../actions";
import { PhotoContainer } from "./PhotoContainer";

function setup() {
  const history = createHistory();

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
    addLike: jest.fn()
  };

  const enzymeWrapper = mount(
    <Router history={history}>
      <PhotoContainer {...props} />
    </Router>
  );

  return {
    props,
    enzymeWrapper
  };
}

describe("PhotoContainer", () => {
  it("should call addLike on button click", () => {
    const { enzymeWrapper, props } = setup();
    const likeIcon = enzymeWrapper.find("HearthIcon");
    likeIcon.simulate("click");
    expect(props.addLike.mock.calls.length).toBe(1);
    expect(props.addLike.mock.calls[0]).toEqual(["1"]);
  });
});
