import React from 'react';
import {PropTypes} from "prop-types";

import './TagsList.css';

function TagsList(props) {
  return (
    <div className="TagsList">
      {props.tags.map((tag, index) => (
        <a href="" key={index} className='tag'>{tag.name}</a>
      ))}
    </div>
  )
}

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

export default TagsList;