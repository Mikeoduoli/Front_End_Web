import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Error-404';

function App() {
  // Dynamic values creation
  const title = 'Welcome To the New Blog'
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1 className='title'>{title}</h1>
        <div className='content'>
          {/* #21 Deleted */}
          {/* <Home /> */}

          {/* Means only one route shows at only one time */}
          <Switch>
            {/* Route for home page */}
            <Route exact path="/">
              <Home />
            </Route>
            
            {/*New Route to Create.js*/}
            <Route path="/create">
              <Create />
            </Route>
            
            {/* Lec #25 - Route Parameters */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* The "*" means catch all the route */}
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          {/* Dynamic value */}
        </div>
      </div>
    </Router>
  );
}

export default App;
