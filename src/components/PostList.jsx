import React from 'react';
import Post from './Post';

const PostList = ({posts, title,remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign:"center"}}>Posts not found!</h1>
        );
    }
    return (
        <div>
        <h1 style={{textAlign:"center"}}>{title}</h1>
        {posts.map((post,index) => (
            <Post remove={remove} post = {post} key={post.id} number={index+1}/>
        ))}
        </div>
    );
};

export default PostList;