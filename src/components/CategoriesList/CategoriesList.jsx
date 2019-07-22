import React from 'react';
import { PropTypes } from 'prop-types';

import './CategoriesList.css';

import { categoryColor } from "../../utils/category-color";

function CategoriesList(props) {
  return (
    <div className="CategoriesList">
      <h2>Categories</h2>
      <div className='categories'>
        {props.categories.map((category, index) => (
          <div key={index} className='category'>
            <a href="">
              <span className={`name ${categoryColor(category.id)}`}>{category.name}</span>
              <span className={`posts-count ${categoryColor(category.id)}`}>{category.posts_count}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posts_count: PropTypes.number
  }))
};

export default CategoriesList;