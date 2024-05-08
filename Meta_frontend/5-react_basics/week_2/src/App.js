// import logo from './logo.svg';
import './App.css';
// import ModeToggle from './ModeToggle';
import Child from './Child';

function App() {
  const date = new Date();
  
  return (
    <div>
      <Child message= {date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
