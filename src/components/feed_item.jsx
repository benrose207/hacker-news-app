import React, { useEffect, useState } from 'react';
import '../assets/stylesheets/story.css'
import { getItem } from '../utils/hn_api_util';
import {getRelativeTime } from '../utils/getRelativeTime';
import StoryCommentsIndex from './story_comments_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const FeedItem = ({ storyId, idx }) => {
  const [storyData, setStoryData] = useState({});
  const [expanded, setExpanded] = useState(false);

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
          <a href={storyData.url}>{storyData.title}</a>
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