import React from 'react';
import FeedItem from './feed_item';
import { useInfiniteScroll } from '../utils/useInfiniteScroll';

const Feed = ({ storyIds }) => {
  const { count } = useInfiniteScroll();

  const loadingDiv = (
    <div className="loading">
      {count < storyIds.length ? <p>Loading...</p> : null}
    </div>
  );

  return (
    <div className="stories-container">
      <ul>
        {storyIds.slice(0, count).map((storyId, idx) => (
          <FeedItem key={storyId} storyId={storyId} idx={idx} />
        ))}
      </ul>
      {loadingDiv}
    </div >
  )
}

export default Feed;