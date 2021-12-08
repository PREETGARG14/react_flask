import React, { useState } from 'react';

const Login = ({ setNotUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to the server
    console.log('clicked');
  };

  const handleNotUserSubmit = (e) => {
    e.preventDefault();
    setNotUser(false);
  };

  return (
    <div className='contaniner'>
      <h2>Login</h2>

      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />

      <input
        placeholder='Password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button type='subimt' className='btn' onClick={handleSubmit}>
        Submit
      </button>
      <button type='submit' className='btn' onClick={handleNotUserSubmit}>
        Not a user?
      </button>
    </div>
  );
};

export default Login;
