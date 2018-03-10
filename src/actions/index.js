import { UNSPLASH_API_KEY } from "../external_api.js";

export const FETCH_PHOTOS_REQUEST = "FETCH_PHOTOS_REQUEST";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const REMOVE_PHOTOS = "REMOVE_PHOTOS";

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_LIKE = "ADD_LIKE";

export const fetchPhotos = () => dispatch => {
  dispatch({
    type: FETCH_PHOTOS_REQUEST
  });

  return fetch(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`)
    .then(
      response => response.json(),
      error =>
        dispatch({
          type: FETCH_PHOTOS_FAILURE,
          message: error.message || "Something went wrong"
        })
    )
    .then(json =>
      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        photos: json
      })
    );
};

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
