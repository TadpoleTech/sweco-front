import React from 'react';
import Post from '../components/post'; // Assuming Post component is in the same directory
import '../App.css'

export default {
  title: 'Post',
  component: Post,
};

const examplePost = {
  title: 'Example Post Title',
  location: 'Example Location',
};

export const Default = () => <Post post={examplePost} />;
