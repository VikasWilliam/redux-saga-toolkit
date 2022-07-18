
import { useState } from 'react';
import './App.css';
import Modal from './Modal';

const BUTTON_WRAPPER_STYLE= {
  position: 'relative',
  zIndex:1,
  
}

const OTHER_COMPONENT_STYLE={
  position:'relative',
  zIndex:2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {

  const [isOpen, setIsOpen]=useState(false)
  return (
    <div className="App" style={BUTTON_WRAPPER_STYLE}>
      <h2>Welcome to Modal box</h2>
      <button onClick={()=>setIsOpen(true)}> Open Model</button>

      <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
      This is the Modal window
      </Modal>
      <div style={OTHER_COMPONENT_STYLE}>Other Content</div>
    </div>
  );
}

export default App;
