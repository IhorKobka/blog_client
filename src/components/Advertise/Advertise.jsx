import React from 'react';
import { PropTypes } from 'prop-types';

function Advertise(props) {
  return (
    <div className='Advertise'>
      <a href="" className="image">
        <img src={`https://via.placeholder.com/${props.width}x${props.height}?text=SAMPLE AD`}
             alt=""
             className='img-fluid'
             width={props.width}
             height={props.height}
        />
      </a>
    </div>
  )
}

Advertise.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Advertise;