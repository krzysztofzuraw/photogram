import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { RECEIVE_PHOTOS, fetchPhotos } from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../external_api.js");

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should create RECEIVE_PHOTOS action", () => {
    fetchMock.getOnce(
      "https://api.unsplash.com/photos/?client_id=UNSPLASH_API_KEY",
      {
        body: { photos: [{ id: 1 }] },
        headers: { "content-type": "application/json" }
      }
    );
    const store = mockStore({ photos: [] });

    const expectedAction = [
      { photos: { photos: [{ id: 1 }] }, type: "RECEIVE_PHOTOS" }
    ];

    return store.dispatch(fetchPhotos()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
