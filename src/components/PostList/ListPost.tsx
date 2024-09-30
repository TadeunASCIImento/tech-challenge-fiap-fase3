import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import './ListPost.css'

interface Post {
  id: string;
  title: string;
  description: string;
}

const PostListSearchContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts?page=1&limit=20");
        setPosts(response.data.data);
        setFilteredPosts(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
        setError("Erro ao buscar os posts.");
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const searchPostsByKeyword = async () => {
      setError('');
      try {
        if (keyword) {
          const response = await axios.get(
            `http://localhost:3000/api/posts/search?keyword=${keyword}`
          );
          setFilteredPosts(response.data);
        }
      } catch (err) {
        setError('An error occurred while searching for posts.');
      }
    };

    searchPostsByKeyword();
  }, [keyword, posts]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handlePostClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };


  return (
    <div className="post-list">
      <FaUserCircle className="login-icon" onClick={handleLoginClick} title="Login" /> { }
      <header className="post-list-header">
        <h1>Postagens</h1>
      </header>
      <label className="search-label">Buscar</label>
      <input
        type="text"
        placeholder="Digite a palavra para busca..."
        value={keyword}
        onChange={handleKeywordChange}
        className="search-input"
      />
      {error && <p className="error-message">{error}</p>}
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id} title="Clique para ler mais" onClick={() => handlePostClick(post.id)} className="post-item">
              <h2>{post.title}</h2>
              <p className="post-content">
                {post.description.substring(0, 100).concat('...')}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </div>
  );
};

export default PostListSearchContainer;
