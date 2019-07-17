import React from 'react';
import { PropTypes } from 'prop-types';

import './PostImage.css';

function PostImage(props) {
  return(
    <a href="" className="image">
      <img src="https://via.placeholder.com/750x450"
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