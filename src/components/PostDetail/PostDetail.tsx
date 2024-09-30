import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import './PostDetail.css';

interface Post {
    id: string;
    title: string;
    description: string;
  }

const PostDetail: React.FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do post:", error);
        setError("Erro ao buscar os detalhes do post.");
      }
    };
    fetchPostDetail();
  }, [postId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="post-detail">
      <h1 className="">{post.title}</h1>
      <p className="">{post.description}</p>
    </div>
  );
};

export default PostDetail;
