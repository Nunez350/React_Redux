import React from 'react';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import ListTitle from '../ListTitle/ListTitle';

const CommentBox = () => {
    return (
        <div className="commentBox">
            <CommentList>
                <ListTitle />
            </CommentList>
            <CommentForm />
        </div>

    );
};

export default CommentBox;