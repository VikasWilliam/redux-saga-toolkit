import logo from './logo.svg';
import './App.css';

const component_Style={
  position: 'relative',
  zIndex:2,
  backgroundColor:'red',
  padding:'10px'
}

function App() {
  return (
    <div className="App" style={component_Style}>
      <h1>Welcome to Advanced Modal Box tutorial</h1>
    </div>
  );
}

export default App;
