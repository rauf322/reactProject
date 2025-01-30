//index.js
import React, { useMemo, useState } from "react";
import "./style/style.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

export default function App() {
  // State variables
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  // Sorted posts to display and we useMemo to avoid re-rendering
  const sortedPosts = useMemo(() => {
    console.log('Function getSortedPosts called');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  },[selectedSort, posts]);

  // Search posts to display and we useMemo to avoid re-rendering and send sortedPosts to make PostList sorting list by selectSort
  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

  // Function to create a new post we send to PostForm component
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Function to remove a post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  // Function to handle sorting
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'desc', name: 'By description' }
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={"React APP 3 hours!"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts</h1>
      )}
    </div>
  );
}
