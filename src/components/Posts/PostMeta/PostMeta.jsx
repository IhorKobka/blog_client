import React, {Fragment} from "react";
import {PropTypes} from "prop-types";
import { categoryColor } from "../../../utils/category-color";
import {NavLink} from "react-router-dom";
import './PostMeta.css';

function PostMeta(props) {
  return(
    <Fragment>
      <div className="meta">
        <NavLink to={`/posts_by_category/${props.category.id}`}
                 className={`category ${categoryColor(props.category.id)}`}>
          {props.category.name}
        </NavLink>
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
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default PostMeta;