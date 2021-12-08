import React, { useState } from 'react';
import Register from './components/Register';
import './App.css';
import Login from './components/Login';

function App() {
  const [notuser, setNotUser] = useState(true);
  return (
    <div className='app'>
      {notuser ? <Login setNotUser={setNotUser} /> : <Register />}
    </div>
  );
}

export default App;
