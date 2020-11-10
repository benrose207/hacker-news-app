import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../utils/hn_api_util';
import NavBar from './navbar';
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
        <Feed storyIds={storyIds}/>
      </main>
    </>
  )
}

export default Stories;
