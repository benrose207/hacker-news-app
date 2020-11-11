import React from 'react';
import FeedItem from './feed_item';
import { useInfiniteScroll } from '../utils/useInfiniteScroll';
import { STORY_TOTAL } from '../constants';

const Feed = ({ storyIds }) => {
  const { count } = useInfiniteScroll();

  const loadingDiv = count < STORY_TOTAL ? (
    <div className="loading">
      Loading...
    </div>
  ) : null;

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