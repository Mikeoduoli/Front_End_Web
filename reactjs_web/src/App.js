import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Dynamic values creation
  const title = 'Welcome To the New Blog'
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        {/* Dynamic value */}
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;
