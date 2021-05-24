import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {name, email, body}= props.comment;
    return (
        <div className="post-design-2 row">
           <div className="col-md-3"> 
           <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <h3>Body{body}</h3>
           </div>
        </div>
    );
};

export default Comment;