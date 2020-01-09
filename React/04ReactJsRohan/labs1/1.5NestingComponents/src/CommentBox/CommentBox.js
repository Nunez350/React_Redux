import React from 'react';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';

const CommentBox = () => {
    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList />
            <CommentForm />
        </div>
    );
};

export default CommentBox;