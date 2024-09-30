import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPostsContainer from "./components/AdminPostList/AdminPostList";
import Login from "./components/Login/Login";
import AddPost from "./components/AddPost/AddPost";
import PostListSearchContainer from "./components/PostList/ListPost";
import PostDetail from "./components/PostDetail/PostDetail";

interface Post {
  title: string;
  description: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, description: string) => {
    setPosts([...posts, { title, description }]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostListSearchContainer/>}/>
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPostsContainer/>} />
        <Route path="/addPost" element={<AddPost onAddPost={addPost} />} />
        <Route path="/addOrEditPost/:postId" element={<AddPost onAddPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
