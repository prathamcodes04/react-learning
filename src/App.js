import Navbar from './Navbar';
import Home from './Home';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // // const person = {name : 'pratham', age: 30};
  // const link = "http.//www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes path="/">
              <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
