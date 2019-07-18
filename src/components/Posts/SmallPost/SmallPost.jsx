import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";

import './SmallPost.css';

function SmallPost(props) {
  return(
    <div className='SmallPost'>
      <PostImage width={90} height={90}/>
      <h5 className="title">
        <a href="">{props.post.title}</a>
      </h5>
    </div>
  )
}

SmallPost.propTypes = {
  post: PropTypes.object
};

export default SmallPost;