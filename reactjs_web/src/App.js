import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Dynamic values creation
  const title = 'Welcome To the New Blog'
  return (
    <div className="App">
      <Navbar />
      <h1 className='title'>{title}</h1>
      <div className='content'>
        <Home />
        {/* Dynamic value */}
      </div>
    </div>
  );
}

export default App;
