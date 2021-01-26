import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
