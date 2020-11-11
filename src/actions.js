import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK
} from './constants';

export const addBookmark = (payload) => {
  return {
    type: ADD_BOOKMARK,
    payload
  }
}

export const removeBookmark = (payload) => {
  return {
    type: REMOVE_BOOKMARK,
    payload
  }
}