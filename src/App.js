import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
