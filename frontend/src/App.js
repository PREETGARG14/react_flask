import React, { useState } from 'react';
import Register from './components/Register';
import './App.css';
import Login from './components/Login';

function App() {
  const [alreadyuser, setAlreadyUser] = useState(false);
  return (
    <div className='app'>
      {alreadyuser ? <Login /> : <Register setAlreadyUser={setAlreadyUser} />}
    </div>
  );
}

export default App;
