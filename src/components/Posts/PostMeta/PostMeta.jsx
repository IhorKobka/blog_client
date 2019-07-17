import React, {Fragment} from "react";
import {PropTypes} from "prop-types";
import './PostMeta.css';

function PostMeta(props) {
  return(
    <Fragment>
      <div className="meta">
        <a href="" className="category green">{props.category.name}</a>
        <span className='date'>{props.created_at}</span>
      </div>
      <h5 className="title">
        <a href="">{props.title}</a>
      </h5>
    </Fragment>
  )
}

PostMeta.propTypes = {
  title: PropTypes.string,
  created_at: PropTypes.string,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default PostMeta;