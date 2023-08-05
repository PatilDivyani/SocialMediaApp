// src/actions/postActions.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    axios
      .get(API_URL)
      .then((response) => {
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
      });
  };
};

export { fetchPosts };
