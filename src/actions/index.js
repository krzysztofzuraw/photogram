import { UNSPLASH_API_KEY } from "../external_api.js";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_PHOTOS = "REMOVE_PHOTOS";

export const fetchPhotos = () => dispatch => {
  return fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receivePhotos(json)));
};

const receivePhotos = json => ({
  type: RECEIVE_PHOTOS,
  photos: json
});

export const addComment = (photoId, author, comment) => ({
  type: ADD_COMMENT,
  photoId,
  author,
  comment
});

export const addLike = photoId => ({
  type: ADD_LIKE,
  photoId
});

export const removePhotos = () => ({
  type: REMOVE_PHOTOS
});
