import React from 'react';
import { PropTypes } from 'prop-types';
import {NavLink} from "react-router-dom";

import './PostImage.css';

function PostImage(props) {
  return(
    <NavLink to={`/posts/${props.id}`} className="image">
      <img src={`https://via.placeholder.com/${props.width}x${props.height}`}
           alt=""
           className='img-fluid'
           width={props.width}
           height={props.height}
      />
    </NavLink>
  )
}

PostImage.propTypes = {
  id: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default PostImage;