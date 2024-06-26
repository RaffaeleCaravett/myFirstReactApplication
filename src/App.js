import Navbar from './navbar';
import Home from './home';
import Create from './create';
import Blog from './blog';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
    <div className="App">
<Navbar  className="navbar"/>
      <div className="Content">
        <Switch>
          <Route exact path="/">
<Home />
          </Route>
          <Route path="/create">
<Create />
          </Route>
          <Route path="/blogs/:id">
<Blog />
          </Route>
          <Route path="*">
<NotFound />
          </Route>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
