// import logo from './logo.svg';
import './App.css';
// import ModeToggle from './ModeToggle';
import Child from './Child';
import ModeToggler from './ModeToggle';

function App() {
  const date = new Date();
  
  return (
    <div>
      <ModeToggler />
      <Child message= {date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
