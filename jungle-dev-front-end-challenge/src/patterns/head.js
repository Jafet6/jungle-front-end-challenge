import React from 'react';
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

function Head({ title }) {
  return (
    <head>
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
    </head>
  );
};

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
