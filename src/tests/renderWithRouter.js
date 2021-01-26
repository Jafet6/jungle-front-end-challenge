import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (ui, route = '/', path) => {
  const initialEntries = [route];
  const history = createMemoryHistory({ initialEntries });

  return {
    ...render(<Router history={history}><Route path={path}>{ui}</Route></Router>),
    history,
  };
};

export default renderWithRouter;
