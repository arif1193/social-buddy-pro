import React from 'react';
import { useHistory } from 'react-router';
import './Post.css';

const Post = (props) => {
    const{id, title, body} = props.post;

   const history = useHistory();
   const showComments = id =>{
       const url = `post/${id}`;
       history.push(url);
   }
   
    return (
        <div className="post-design">
            <h3>ID: {id}</h3>
            <h3>Title: {title}</h3>
            <p>{body}</p>
           <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;