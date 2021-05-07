import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routers/AppRoutes';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{backgroundImage: 'url(https://i.ibb.co/0ZbZ6Ws/White-Walkers.jpg)',}}>
      <Router>
        <Router>
          <AppRoutes />
        </Router>
      </Router>
    </div>
  );
}

export default App;
