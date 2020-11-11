import React, { useContext } from 'react';
import AppContext from '../context';
import Feed from './feed';

const Bookmarks = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Feed storyIds={Object.keys(state.bookmarks)}/>
    </>
  );
};

export default Bookmarks;
