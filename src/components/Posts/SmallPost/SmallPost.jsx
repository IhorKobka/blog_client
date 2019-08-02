import React from 'react';
import { PropTypes } from 'prop-types';
import PostImage from "../PostImage/PostImage";
import {NavLink} from "react-router-dom";

import './SmallPost.css';

function SmallPost(props) {
  return(
    <div className='SmallPost'>
      <PostImage width={90} height={90} id={props.post.id}/>
      <h5 className="title">
        <NavLink to={`/posts/${props.post.id}`}>{props.post.title}</NavLink>
      </h5>
    </div>
  )
}

SmallPost.propTypes = {
  post: PropTypes.object
};

export default SmallPost;