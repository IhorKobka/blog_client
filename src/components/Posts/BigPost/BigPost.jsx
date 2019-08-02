import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";
import PostMeta from "../PostMeta/PostMeta";

import './BigPost.css';

function BigPost(props) {
  return (
    <div className='BigPost'>
      <PostImage width={750} height={450} id={props.post.id}/>
      <div className="body">
        <PostMeta id={props.post.id}
                  title={props.post.title}
                  created_at={props.post.created_at}
                  category={props.post.category}
        />
      </div>
    </div>
  )
}

BigPost.propTypes = {
  post: PropTypes.object
};

export default BigPost;