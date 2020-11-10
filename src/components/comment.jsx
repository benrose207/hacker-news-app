import React, { useState, useEffect } from 'react';
import { getItem } from '../utils/hn_api_util';
import '../assets/stylesheets/comments.css';

const Comment = ({ commentId }) => {
  const [commentData, setCommentData] = useState({});

  useEffect(() => {
    getItem(commentId).then(result => setCommentData(result));
  }, [commentId]);

  const viewRepliesButton = commentData.kids ? (
    <button>{`${commentData.kids.length} replies`}</button>
  ) : null;

  const commentDetails = commentData && commentData.text ? (
    <li className="comment">
      <p>{commentData.by} {commentData.time}</p>
      <p dangerouslySetInnerHTML={{ __html: commentData.text }}></p>
      {viewRepliesButton}
    </li>
  ) : null;

  return (
    <>
      {commentDetails}
    </>
  )
};

export default Comment;
