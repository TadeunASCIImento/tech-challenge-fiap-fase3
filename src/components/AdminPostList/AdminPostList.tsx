import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './AdminPostList.css'


interface Post {
  id: string;
  title: string;
  description: string;
}

interface PostListProps {
  posts: Post[];
}

const AdminPostList: React.FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${postId}`, {
        headers: {
          Authorization: token
        }
      });
      alert('Post excluído com sucesso!');
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir o post:", error);
      alert('Erro ao excluir o post.');
    }
  };
  return (
    <ul>
      <button className="create" onClick={() => navigate("/addPost")}>+ Nova Postagem</button>
      {posts.map((post) => (
        <li key={post.id} value={post.id}>
          <h4>{post.title}</h4>
          <button className="delete" onClick={() => handleDelete(post.id)}>Excluir</button>
          <button className="edit" onClick={() => navigate(`/addOrEditPost/${post.id}`)}>Editar</button>
        </li>
      ))}
    </ul>
  )

}
const AdminPostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts?page=1&limit=20");
        setPosts(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h1>Lista de Postagens</h1>
      <AdminPostList posts={posts} />
    </div>
  );
};

export default AdminPostsContainer;