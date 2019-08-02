import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";
import PostMeta from "../PostMeta/PostMeta";

import './DetailedPost.css';

function DetailedPost(props) {
  return (
    <div className='DetailedPost'>
      <PostImage width={300} height={180} id={props.post.id}/>
      <div className="body">
        <PostMeta id={props.post.id}
                  title={props.post.title}
                  created_at={props.post.created_at}
                  category={props.post.category}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias at debitis nesciunt quibusdam veniam, voluptatem.</p>
      </div>
    </div>
  )
}

DetailedPost.propTypes = {
  post: PropTypes.object
};

export default DetailedPost;