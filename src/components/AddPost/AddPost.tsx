import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './AddPost.css';

interface AddPostProps {
  onAddPost: (title: string, description: string) => void;
}

const AddPost: React.FC<AddPostProps> = ({ onAddPost }) => {
  const { postId } = useParams<{ postId: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
        } catch (error) {
          console.error('Erro ao carregar o post:', error);
        }
      };
      fetchPost();
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toSave = { title, description };

    const token = localStorage.getItem('token');

    try {
      if (postId) {
        await axios.put(`http://localhost:3000/api/posts/${postId}`, toSave, {
          headers: {
            Authorization: token
          }
        });
        alert('Post atualizado com sucesso!');
      } else {
        await axios.post('http://localhost:3000/api/posts', toSave , {
          headers: {
            Authorization: token
          }
        });
        alert('Post criado com sucesso!');
      }

      onAddPost(title, description);
      navigate('/admin');
    } catch (error) {
      console.error('Erro ao salvar o post:', error);
      alert('Erro ao salvar o post.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <div>
        <label htmlFor="title">Título da Postagem:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título da Postagem aqui..."
          className="add-post-input-title"
          required
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Conteúdo da Postagem aqui..."
          className="add-post-text-area-content"
          required
        />
      </div>
      <button type="submit" className="add-post-button">
        {postId ? 'Atualizar' : 'Enviar'}
      </button>
    </form>
  );
}

export default AddPost;
