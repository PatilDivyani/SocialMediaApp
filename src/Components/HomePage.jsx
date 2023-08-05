// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/action/postActions';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
console.log('posts',posts)
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id='homePage'>
      <h1>Social Media For Travellers</h1>
      <div className='searchBox'>
        <img src={searchIcon} alt='Search' />
      <input type='text' placeholder='Search here...' />
      </div>
      <div className='cards'>
      {posts.map((post) => (
        <div key={post.id}>
          
          <img src={`https://picsum.photos/200?random=$%7B${post.id}%7D`} alt={post.title}/>
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/item/${post.id}`  }>Read More...</Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
