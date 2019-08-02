import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";
import PostMeta from "../PostMeta/PostMeta";

import './MediumPost.css';

function MediumPost(props) {
  return (
    <div className='MediumPost'>
      <PostImage width={360} height={215} id={props.post.id}/>
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

MediumPost.propTypes = {
  post: PropTypes.object
};

export default MediumPost;