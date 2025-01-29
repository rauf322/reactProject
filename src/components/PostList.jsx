import React from 'react';
import Post from './Post';

const PostList = ({posts, title}) => {
    return (
        <div>
        <h1 style={{textAlign:"center"}}>{title}</h1>
        {posts.map((post,index) => (
            <Post key={post.id} number={index} title={post.title} desc={post.desc} />
        ))}
        </div>
    );
};

export default PostList;