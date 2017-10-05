import { UNSPLASH_API_KEY } from "../external_api.js";

export const REQUEST_PHOTOS = "REQUEST_PHOTOS";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const requestPhotos = () => ({
  type: REQUEST_PHOTOS
});

export const fetchPhotos = () => dispatch => {
  dispatch(requestPhotos());
  return fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receivePhotos(json)));
};

const receivePhotos = json => ({
  type: RECEIVE_PHOTOS,
  photos: json
});
