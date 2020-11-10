import React, { useState, useEffect } from 'react';
import { getItem } from '../utils/hn_api_util';
import '../assets/stylesheets/comments.css';

const Comment = ({ commentId, marginOffset }) => {
  const [commentData, setCommentData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const toggleCommentsView = () => {
    setExpanded(!expanded);
  }

  useEffect(() => {
    getItem(commentId).then(result => setCommentData(result));
  }, [commentId]);

  const viewRepliesButton = commentData.kids ? (
    <button onClick={toggleCommentsView}>{`${commentData.kids.length} replies`}</button>
  ) : null;

  const commentDetails = commentData && commentData.text ? (
    <li className="comment">
      <p>{commentData.by} {commentData.time}</p>
      <p dangerouslySetInnerHTML={{ __html: commentData.text }}></p>
      {viewRepliesButton}
      {expanded ? (
        <ul style={{ marginLeft: `${marginOffset}rem` }}>
          {commentData.kids.map(commentId => <Comment key={commentId} commentId={commentId} marginOffset={parseInt(marginOffset) + 1} />)}
        </ul>
      ) : null}
    </li>
  ) : null;

  return (
    <>
      {commentDetails}
    </>
  )
};

export default Comment;
