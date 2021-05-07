import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <div className='row'>
      <Navbar />
      <div className='container-fluid'>
      <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;