import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
<Navbar  className="navbar"/>
      <div className="Content">
        <Switch>
          <Route path="/">
<Home />
          </Route>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
