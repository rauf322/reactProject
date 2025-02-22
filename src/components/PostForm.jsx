import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

  
    const addPost = (e) => {
      e.preventDefault()
      if(post.title.length > 0 && post.body.length > 0){
        const newPost = {
          ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }else{
        alert('Please fill the form')
      }
    }
  
    const handleTitle = (e) => {
      setPost({...post, title: e.target.value})
    }
  
    const handleDesc = (e) => {
      setPost({...post, body: e.target.value})
    }

    return (
        <div>
            <form onSubmit={addPost}>
            <MyInput type="text" placeholder="Name of Title" onChange={handleTitle} value={post.title}/>
            <MyInput type="text" placeholder="Description" onChange={handleDesc} value={post.body}/>
            <MyButton type="submit">Add</MyButton>
      </form>
    </div>
    );
};

export default PostForm;