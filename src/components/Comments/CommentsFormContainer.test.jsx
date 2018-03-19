import React from "react";
import { mount } from "enzyme";

import { ADD_COMMENT } from "../../actions";
import { CommentsFormContainer } from "./CommentsFormContainer";

function setup() {
  const props = {
    match: {
      params: {
        photoId: 1
      }
    },
    dispatch: jest.fn()
  };

  const enzymeWrapper = mount(<CommentsFormContainer {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("CommentsFormContainer", () => {
  it("should call addComment on form submit", () => {
    const { enzymeWrapper, props } = setup();
    const CommentsForm = enzymeWrapper.find(".comment-form");
    CommentsForm.simulate("change", {
      target: { name: "name", value: "Fake Name" }
    });
    CommentsForm.simulate("submit");
    expect(props.dispatch.mock.calls.length).toBe(1);
    expect(props.dispatch.mock.calls[0]).toEqual([
      { author: "", comment: "", photoId: 1, type: ADD_COMMENT }
    ]);
  });

  it("should set state on when form values change", () => {
    const { enzymeWrapper } = setup();
    const CommentsForm = enzymeWrapper.find(".form-input").at(0);
    CommentsForm.simulate("change", {
      target: { name: "name", value: "Fake Name" }
    });
    expect(enzymeWrapper.state()).toEqual({
      comment: "",
      name: "Fake Name"
    });
  });
});
