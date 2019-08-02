import React, {Fragment} from "react";
import {PropTypes} from "prop-types";
import {NavLink} from "react-router-dom";
import './PostMeta.css';
import PostCategory from "../PostCategory/PostCategory";

function PostMeta(props) {
  return(
    <Fragment>
      <div className="meta">
        <PostCategory category={props.category}/>
        <span className='date'>{props.created_at}</span>
      </div>
      <h5 className="title">
        <NavLink to={`/posts/${props.id}`}>
          {props.title}
        </NavLink>
      </h5>
    </Fragment>
  )
}

PostMeta.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  created_at: PropTypes.string,
  category: PropTypes.object
};

export default PostMeta;