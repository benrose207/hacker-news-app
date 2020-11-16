import React, { useEffect, useState, useContext, memo } from 'react';
import '../assets/stylesheets/story.css'
import AppContext from '../context';
import { addBookmark, removeBookmark} from '../actions';
import { getItem } from '../utils/hn_api_util';
import { getRelativeTime } from '../utils/getRelativeTime';
import StoryCommentsIndex from './story_comments_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const FeedItem = memo(function FeedItem({ storyId, idx }) {
  const { state, dispatch } = useContext(AppContext);
  const [storyData, setStoryData] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [bookmark, setBookmark] = useState(state.bookmarks[storyId] ? true : false);

  const toggleCommentsView = () => {
    if (!storyData.kids) return;
    setExpanded(!expanded);
  }

  const toggleBookmark = () => {
    const action = bookmark ? removeBookmark(storyData) : addBookmark(storyData);
    dispatch(action);

    setBookmark(!bookmark);
  }

  useEffect(() => {
    getItem(storyId).then(result => setStoryData(result));
  }, [storyId]);

  const bookmarkButton = (
    <button className='item-expander' onClick={toggleBookmark}>
      {bookmark ? <FontAwesomeIcon icon={faSolidStar} /> : <FontAwesomeIcon icon={faRegularStar} />}
    </button>
  )

  const listItem = storyData && storyData.url ? (
      <li className="story">
        <span>{`${idx + 1}. `}</span>
        <article>
          <div>
            <a href={storyData.url}>{storyData.title}</a>
            {bookmarkButton}
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
});

export default FeedItem;