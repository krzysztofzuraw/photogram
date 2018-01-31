import { UNSPLASH_API_KEY } from "../external_api.js";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const fetchPhotos = () => dispatch => {
  return fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receivePhotos(json)));
};

const receivePhotos = json => ({
  type: RECEIVE_PHOTOS,
  photos: json
});

export const addComment = (photoId, author, comment) => dispatch => {
  dispatch({
    type: ADD_COMMENT,
    photoId,
    author,
    comment
  });
};

export const removeComment = (photoId, position) => dispatch => {
  dispatch({
    type: REMOVE_COMMENT,
    photoId,
    position
  });
};
