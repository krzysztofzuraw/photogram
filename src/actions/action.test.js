import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  fetchPhotos,
  ADD_COMMENT,
  addComment,
  ADD_LIKE,
  addLike,
  REMOVE_PHOTOS,
  removePhotos
} from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should create actions when dispatching fetchPhotos succeed", () => {
    fetchMock.get(
      `https://api.unsplash.com/photos/?client_id=${process.env
        .REACT_APP_API_KEY}`,
      {
        body: { photos: [{ id: 1 }] },
        headers: { "content-type": "application/json" }
      }
    );
    const store = mockStore({ photos: [] });

    const expectedActions = [
      { type: FETCH_PHOTOS_REQUEST },
      { photos: { photos: [{ id: 1 }] }, type: FETCH_PHOTOS_SUCCESS }
    ];

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it.skip("should create action when dispatching fetchPhotos fails", () => {
    fetchMock.get(
      `https://api.unsplash.com/photos/?client_id=${process.env
        .REACT_APP_API_KEY}`,
      {
        throws: { message: "network error" }
      }
    );

    const store = mockStore({ photos: [] });

    const expectedActions = [
      { type: FETCH_PHOTOS_REQUEST },
      { type: FETCH_PHOTOS_FAILURE, message: "Something went wrong" }
    ];

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Plan Actions", () => {
  it("should create action to addComment", () => {
    const expectedAction = {
      type: ADD_COMMENT,
      photoId: 1,
      author: "Fake name",
      comment: "Fake"
    };

    expect(addComment(1, "Fake name", "Fake")).toEqual(expectedAction);
  });

  it("should create action to addLike", () => {
    const expectedAction = {
      type: ADD_LIKE,
      photoId: 1
    };

    expect(addLike(1)).toEqual(expectedAction);
  });

  it("should create action to removePhotos", () => {
    const expectedAction = {
      type: REMOVE_PHOTOS
    };

    expect(removePhotos()).toEqual(expectedAction);
  });
});
