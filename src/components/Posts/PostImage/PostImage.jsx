import React from 'react';
import { PropTypes } from 'prop-types';

import './PostImage.css';

function PostImage(props) {
  return(
    <a href="" className="image">
      <img src={`https://via.placeholder.com/${props.width}x${props.height}`}
           alt=""
           className='img-fluid'
           width={props.width}
           height={props.height}
      />
    </a>
  )
}

PostImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default PostImage;