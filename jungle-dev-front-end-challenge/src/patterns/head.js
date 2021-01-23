import React from 'react';
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

function Head({ title }) {
  return (
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
