import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import Teste from '../pages/teste';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
      <Switch>
        <Route path='/teste' component={Teste} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
