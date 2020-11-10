import React, { useState } from 'react';
import Comment from './comment';

const StoryCommentsIndex = ({ commentIds }) => {
  const COMMENTS_INCREMENT = 10;
  const [count, setCount] = useState(COMMENTS_INCREMENT);

  const expandComments = () => {
    setCount(count + COMMENTS_INCREMENT);
  };

  const viewMoreButton = commentIds.length > COMMENTS_INCREMENT ? (
    <button onClick={expandComments}>View More</button>
  ) : null;

  return (
    <section>
      <ul>
        {commentIds.slice(0, count).map(commentId => (
          <Comment key={commentId} commentId={commentId} marginOffset="1"/>
        ))}
      </ul>
      {viewMoreButton}
    </section>
  )
};

export default StoryCommentsIndex;
