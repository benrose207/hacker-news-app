import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK
} from './constants';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_BOOKMARK:
      const story = action.payload;
      newState.bookmarks[story.id] = story;
      return newState;
    case REMOVE_BOOKMARK:
      delete newState.bookmarks[action.payload.id]
      return newState;
    default:
      return state;
  }
};