import './App.css';
import Navbar from './navbar';

function App() {
const title= "Now we became serious. "

  return (
    <div className="App">
<Navbar />
      <div className="Content">
        <h1>
{title}
</h1>
      </div>
    </div>
  );
}

export default App;
