import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState([]);


    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setPosts(data))
    },[])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data=>setComments(data))
    },[])
    return (
        <div>
            <h4>Post detail {id}</h4>
            <p>User Title:{posts.body}</p>
            <p>See Comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;