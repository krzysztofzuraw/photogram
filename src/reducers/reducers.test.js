import * as reducers from "./index";
import * as actions from "../actions";

describe("photos reducer", () => {
  it("should return initial state", () => {
    expect(reducers.photos(undefined, {})).toEqual([]);
  });

  it("should handle FETCH_PHOTOS_SUCCESS on new state", () => {
    expect(
      reducers.photos([], {
        type: actions.FETCH_PHOTOS_SUCCESS,
        photos: [{ id: "1" }]
      })
    ).toEqual([{ id: "1" }]);
  });

  it("should handle FETCH_PHOTOS_SUCCESS on existing state", () => {
    expect(
      reducers.photos([{ id: "1" }], {
        type: actions.FETCH_PHOTOS_SUCCESS,
        photos: [{ id: "2" }]
      })
    ).toEqual([{ id: "1" }, { id: "2" }]);
  });
});

describe("isFetching reducer", () => {
  it("should return initial state", () => {
    expect(reducers.isFetching(undefined, {})).toEqual(false);
  });

  it("should handle FETCH_PHOTOS_REQUEST on new state", () => {
    expect(
      reducers.isFetching(false, { type: actions.FETCH_PHOTOS_REQUEST })
    ).toEqual(true);
  });

  it("should handle FETCH_PHOTOS_REQUEST on existing state", () => {
    expect(
      reducers.isFetching(true, { type: actions.FETCH_PHOTOS_REQUEST })
    ).toEqual(true);
  });

  it("should handle FETCH_PHOTOS_SUCCESS on new state", () => {
    expect(
      reducers.isFetching(false, { type: actions.FETCH_PHOTOS_SUCCESS })
    ).toEqual(false);
  });

  it("should handle FETCH_PHOTOS_SUCCESS on new state", () => {
    expect(
      reducers.isFetching(true, { type: actions.FETCH_PHOTOS_SUCCESS })
    ).toEqual(false);
  });
});

describe("errorMessage reducer", () => {
  it("should return initial state", () => {
    expect(reducers.errorMessage(undefined, {})).toEqual(null);
  });

  it("should handle FETCH_PHOTOS_FAILURE on new state", () => {
    expect(
      reducers.errorMessage(null, {
        type: actions.FETCH_PHOTOS_FAILURE,
        message: "Error"
      })
    ).toEqual("Error");
  });

  it("should handle FETCH_PHOTOS_FAILURE on existing state", () => {
    expect(
      reducers.errorMessage("Error", {
        type: actions.FETCH_PHOTOS_FAILURE,
        message: "Another Error"
      })
    ).toEqual("Another Error");
  });
});

describe("comments reducer", () => {
  it("should return initial state", () => {
    expect(reducers.comments(undefined, {})).toEqual([]);
  });

  it("should handle ADD_COMMENT on new state", () => {
    expect(
      reducers.comments([], {
        type: actions.ADD_COMMENT,
        photoId: "1",
        author: "Tom",
        comment: "cool"
      })
    ).toEqual([{ photoId: "1", author: "Tom", text: "cool" }]);
  });

  it("should handle ADD_COMMENT on existing state", () => {
    expect(
      reducers.comments([{ photoId: "2", author: "Kris", text: "awesome" }], {
        type: actions.ADD_COMMENT,
        photoId: "1",
        author: "Tom",
        comment: "cool"
      })
    ).toEqual([
      { photoId: "2", author: "Kris", text: "awesome" },
      { photoId: "1", author: "Tom", text: "cool" }
    ]);
  });
});

describe("likes reducer", () => {
  it("should return initial state", () => {
    expect(reducers.likes(undefined, {})).toEqual([]);
  });

  it("should handle ADD_LIKE on new state", () => {
    expect(
      reducers.likes([], {
        type: actions.ADD_LIKE,
        photoId: "1"
      })
    ).toEqual(["1"]);
  });

  it("should handle ADD_LIKE on existing state", () => {
    expect(
      reducers.likes(["1"], {
        type: actions.ADD_LIKE,
        photoId: "1"
      })
    ).toEqual(["1", "1"]);
  });
});

describe("root reducer", () => {
  it("should return initial state", () => {
    expect(reducers.rootReducer(undefined, {})).toEqual({
      comments: [],
      errorMessage: null,
      isFetching: false,
      likes: [],
      photos: []
    });
  });

  it("should handle REMOVE_PHOTOS on new state", () => {
    expect(
      reducers.rootReducer(
        {
          comments: [],
          errorMessage: null,
          isFetching: false,
          likes: [],
          photos: []
        },
        { type: actions.REMOVE_PHOTOS }
      )
    ).toEqual({
      comments: [],
      errorMessage: null,
      isFetching: false,
      likes: [],
      photos: []
    });
  });

  it("should handle REMOVE_PHOTOS on existing state", () => {
    expect(
      reducers.rootReducer(
        {
          comments: [],
          errorMessage: null,
          isFetching: false,
          likes: ["1"],
          photos: [{ id: "1" }]
        },
        { type: actions.REMOVE_PHOTOS }
      )
    ).toEqual({
      comments: [],
      errorMessage: null,
      isFetching: false,
      likes: [],
      photos: []
    });
  });
});
