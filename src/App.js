//index.js
import React, { useEffect, useState } from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/Modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostServices from "./API/PostServices";
import Loader from "./components/UI/Loader/Loader";
import useFetching from "./hooks/useFetching";

export default function App() {
  // State variables
  const [posts, setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPost,isPostsLoading,postError] = useFetching(async () => {
    const posts = await PostServices.getAll();
    setPosts(posts);
  })


  useEffect(() => {
    fetchPost();
  }, []);

  // Function to create a new post we send to PostForm component
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Function to remove a post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };


  return (
    <div className="App">
      <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>
        Create Post!
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {isPostsLoading?<div style={{display: 'flex', justifyContent: 'center', marginTop: "50px"}}><Loader/></div>:<PostList remove={removePost} posts={sortedAndSearchPosts} title={"React APP 3 hours!"} />}
    </div>
  );
}
