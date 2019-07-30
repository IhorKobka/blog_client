import React from 'react';
import { Button } from 'reactstrap';
import { PropTypes } from 'prop-types';

import './LoadMoreBtn.css';

function LoadMoreBtn(props) {
  return (
    <div className='LoadMoreBtn'>
      <Button onClick={props.loadPosts}>Load More</Button>
    </div>
  )
}

LoadMoreBtn.propTypes = {
  loadPosts: PropTypes.func
};

export default LoadMoreBtn;