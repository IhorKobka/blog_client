import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";
import PostMeta from "../PostMeta/PostMeta";

import './BigPost.css';

function BigPost(props) {
  return (
    <div className='BigPost'>
      <PostImage/>
      <div className="body">
        <PostMeta title={props.post.title}
                  created_at={props.post.created_at}
                  category={props.post.category}
        />
      </div>
    </div>
  )
}

BigPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    created_at: PropTypes.string,
    category: {
      id: PropTypes.number,
      name: PropTypes.string
    }
  })
};

export default BigPost;