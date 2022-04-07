import React from 'react';
import PropTypes from 'prop-types';

ListPost.propTypes = {
  posts: PropTypes.array
};

ListPost.defaultProps = {
  posts: []
}

function ListPost(props) {
  const {posts} = props;
  return (
    <div>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default ListPost;