import React, { useEffect, useState } from 'react';
import '../assets/stylesheets/story.css'
import { getItem } from '../utils/hn_api_util';
import {getRelativeTime } from '../utils/getRelativeTime';
import StoryCommentsIndex from './story_comments_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const FeedItem = ({ storyId, idx }) => {
  const [storyData, setStoryData] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const toggleCommentsView = () => {
    if (!storyData.kids) return;
    setExpanded(!expanded);
  }

  useEffect(() => {
    getItem(storyId).then(result => setStoryData(result));
  }, [storyId]);

  const listItem = storyData && storyData.url ? (
      <li className="story">
        <span>{`${idx + 1}. `}</span>
        <article>
          <div>
            <a href={storyData.url}>{storyData.title}</a>
            <button className='item-expander'>
            {bookmark ? <FontAwesomeIcon icon={faSolidStar} /> : <FontAwesomeIcon icon={faRegularStar} />}
            </button>
          </div>
          <p className="story-details">
            {`by ${storyData.by} ${getRelativeTime(storyData.time)} | `}
            <button onClick={toggleCommentsView}>{` ${storyData.descendants} comments `}</button>
            <span className='item-expander'>{expanded ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
          </p>
          {expanded ? <StoryCommentsIndex commentIds={storyData.kids}/> : null}
        </article>
      </li>
  ): null;

  return (
    <>
      {listItem}
    </>
  );
};

export default FeedItem;