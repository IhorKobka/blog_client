import React from 'react';
import { PropTypes } from 'prop-types';
import './Post.css';

function Post(props) {
  return (
    <div className='Post'>
      <a href="" className="image">
        <img src="https://via.placeholder.com/360x215" alt="" className='img-fluid'/>
      </a>
      <div className="body">
        <div className="meta">
          <a href="" className="category green">{props.post.category.name}</a>
          <span className='date'>{props.post.created_at}</span>
        </div>
        <h5 className="title">
          <a href="">{props.post.title}</a>
        </h5>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    created_at: PropTypes.string,
    category: {
      id: PropTypes.number,
      name: PropTypes.string
    }
  })
};

export default Post;