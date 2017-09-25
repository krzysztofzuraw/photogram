import { UNSPLASH_API_KEY } from "../external_api.js";

export const REQUEST_PHOTOS = "REQUEST_PHOTOS";

const requestPhotos = unsplash => ({
  type: REQUEST_PHOTOS,
  unsplash
});

const fetchPosts = unsplash => dispatch => {
  dispatch(requestPhotos(unsplash));
  return fetch(
    `https://api.unsplash.com/photos/?client_id=%${UNSPLASH_API_KEY}`
  ).then(response => response.json());
};
