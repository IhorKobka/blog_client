import React from 'react';
import {PropTypes} from "prop-types";
import {categoryColor} from "../../../utils/category-color";
import {NavLink} from "react-router-dom";

import './PostCategory.css';

function PostCategory(props) {
  return (
    <NavLink to={`/posts_by_category/${props.category.id}`}
             className={`category ${categoryColor(props.category.id)}`}>
      {props.category.name}
    </NavLink>
  )
}

PostCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default PostCategory;