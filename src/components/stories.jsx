import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { getStoryIds } from '../utils/hn_api_util';
import NavBar from './navbar';
import Bookmarks from './bookmarks';
import Feed from './feed';

const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(results => setStoryIds(results));
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Route path="/" exact>
          <Feed storyIds={storyIds}/>
        </Route>
        <Route path="/bookmarks" component={Bookmarks}/>
      </main>
    </>
  )
}

export default Stories;
