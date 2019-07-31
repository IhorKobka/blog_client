import React from 'react';
import { PropTypes } from 'prop-types';

import Header from '../components/Header/Header';

function HeaderContainer(props) {
  return (
    <Header categories={props.categories} />
  );
}

HeaderContainer.propTypes = {
  categories: PropTypes.array
};

export default HeaderContainer;
