import React from 'react';
import Post from './Post';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({posts, title,remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign:"center"}}>Posts not found!</h1>
        );
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}
            </h1>
            <TransitionGroup>
            {posts.map((post,index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} post={post}  number={index+1}/>
                    </CSSTransition>
            ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;